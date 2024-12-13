<!--
// Copyright © 2024 Digitrans Inc.
//
-->

<script lang="ts">
  import { Doc, type Blob, type Ref } from '@digitranslab/core'
  import presentation, { PDFViewer, createQuery, getClient } from '@digitranslab/presentation'
  import guest, { PublicLink, createPublicLink } from '@digitranslab/guest'
  import view from '@digitranslab/view'
  import { Location } from '@digitranslab/ui'
  import { getObjectLinkFragment } from '@digitranslab/view-resources'
  import { printToPDF } from '@digitranslab/print'
  import { signPDF } from '@digitranslab/sign'
  import { getMetadata } from '@digitranslab/platform'

  export let object: Doc
  export let signed: boolean = false

  const client = getClient()

  let isLoading = true
  let isLinkLoading = true
  let link: PublicLink | undefined = undefined
  let file: Ref<Blob> | undefined = undefined

  $: objId = object?._id

  const linkQuery = createQuery()
  $: {
    link = undefined
    file = undefined
    isLoading = true
    isLinkLoading = true
    linkQuery.query(
      guest.class.PublicLink,
      { attachedTo: objId },
      (res) => {
        link = res[0]
        isLinkLoading = false
      },
      { limit: 1 }
    )
  }

  $: if (link?.url !== undefined && link.url !== '' && file === undefined) {
    const token = getMetadata(presentation.metadata.Token) ?? ''

    printToPDF(link.url, token).then(
      (res) => {
        if (signed) {
          signPDF(res, token).then(
            (signedRes) => {
              file = signedRes as Ref<Blob>
              isLoading = false
            },
            (err) => {
              console.error(err)
              isLoading = false
            }
          )
        } else {
          file = res as Ref<Blob>
          isLoading = false
        }
      },
      (err) => {
        console.error(err)
        isLoading = false
      }
    )
  }

  $: if (object !== undefined && !isLinkLoading) {
    void createLinkIfMissing(object)
  }

  async function getObjectLocation (obj: Doc): Promise<Location> {
    const panelComponent = client.getHierarchy().classHierarchyMixin(obj._class, view.mixin.ObjectPanel)
    const comp = panelComponent?.component ?? view.component.EditDoc

    return await getObjectLinkFragment(client.getHierarchy(), obj, {}, comp)
  }

  async function createLinkIfMissing (obj: Doc): Promise<void> {
    if (link?.attachedTo === obj._id) {
      return
    }

    if (link === undefined) {
      const location = await getObjectLocation(obj)

      await createPublicLink(client, obj, location)
    }
  }
</script>

<PDFViewer {file} name="PDF print preview" contentType="application/pdf" {isLoading} on:close on:fullsize />
