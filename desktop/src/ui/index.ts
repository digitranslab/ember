import login, { loginId } from '@digitranslab/login'
import { getEmbeddedLabel, getMetadata, setMetadata } from '@digitranslab/platform'
import presentation, { closeClient, MessageBox, setDownloadProgress } from '@digitranslab/presentation'
import { settingId } from '@digitranslab/setting'
import {
  closePanel,
  closePopup,
  createApp,
  fetchMetadataLocalStorage,
  getCurrentLocation,
  getCurrentResolvedLocation,
  navigate,
  parseLocation,
  pushRootBarProgressComponent,
  removeRootBarComponent,
  setMetadataLocalStorage,
  showPopup
} from '@digitranslab/ui'

import { notificationId } from '@digitranslab/notification'
import { workbenchId } from '@digitranslab/workbench'

import { isOwnerOrMaintainer } from '@digitranslab/core'
import { configurePlatform } from './platform'
import { defineScreenShare } from './screenShare'
import { IPCMainExposed } from './types'
import settings from '@digitranslab/setting'

defineScreenShare()

void configurePlatform().then(() => {
  createApp(document.body)
})

window.addEventListener('DOMContentLoaded', () => {
  const ipcMain = (window as any).electron as IPCMainExposed

  ipcMain.on('open-settings', () => {
    closePopup()
    closePanel()
    const loc = getCurrentResolvedLocation()
    loc.fragment = undefined
    loc.query = undefined
    loc.path[2] = settingId
    loc.path.length = 3
    navigate(loc)
  })

  ipcMain.on('select-workspace', () => {
    closePopup()
    closePanel()
    const loc = getCurrentResolvedLocation()
    loc.fragment = undefined
    loc.query = undefined
    loc.path[0] = loginId
    loc.path[1] = 'selectWorkspace'
    loc.path.length = 2
    navigate(loc)
  })

  ipcMain.on('logout', () => {
    const tokens = fetchMetadataLocalStorage(login.metadata.LoginTokens)
    if (tokens !== null) {
      const loc = getCurrentLocation()
      loc.path.splice(1, 1)
      setMetadataLocalStorage(login.metadata.LoginTokens, tokens)
    }
    setMetadata(presentation.metadata.Token, null)
    setMetadataLocalStorage(login.metadata.LastToken, null)
    setMetadataLocalStorage(login.metadata.LoginEndpoint, null)
    setMetadataLocalStorage(login.metadata.LoginEmail, null)
    void closeClient().then(() => {
      navigate({ path: [loginId] })
    })
  })

  ipcMain.handleDeepLink((urlString) => {
    const urlObject = new URL(urlString)
    navigate(parseLocation(urlObject))
  })

  ipcMain.handleNotificationNavigation(() => {
    // For now navigate only to Inbox
    const frontUrl = getMetadata(presentation.metadata.FrontUrl) ?? window.location.origin
    const location = getCurrentResolvedLocation()
    const urlString = `${frontUrl}/${workbenchId}/${location.path[1]}/${notificationId}`
    const urlObject = new URL(urlString)
    navigate(parseLocation(urlObject))
  })

  ipcMain.handleUpdateDownloadProgress((progress) => {
    setDownloadProgress(progress)
  })

  ipcMain.handleAuth((token) => {
    const authLoc = {
      path: ['login', 'auth'],
      query: { token }
    }

    navigate(authLoc)
  })

  ipcMain.on('start-backup', () => {
    // We need to obtain current token and endpoint and trigger backup
    const token = getMetadata(presentation.metadata.Token)
    const endpoint = getMetadata(presentation.metadata.Endpoint)
    const workspace = getMetadata(presentation.metadata.WorkspaceId)
    if (isOwnerOrMaintainer()) {
      if (token != null && endpoint != null && workspace != null) {
        ipcMain.startBackup(token, endpoint, workspace)
      }
    } else {
      showPopup(MessageBox, {
        label: settings.string.OwnerOrMaintainerRequired
      })
    }
  })

  ipcMain.on('backup', (evt: any, ...args: any) => {
    pushRootBarProgressComponent('backup',
      getEmbeddedLabel('Backup'),
      () => { return args[0] },
      () => {
        ipcMain.cancelBackup()
      },
      undefined,
      undefined,
      50
    )
  })
  ipcMain.on('backup-cancel', () => {
    removeRootBarComponent('backup')
  })
})