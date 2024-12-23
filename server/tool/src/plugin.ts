import { Metadata, plugin, Plugin } from '@digitranslab/platform'

/**
 * @public
 */
export const toolId = 'tool' as Plugin

/**
 * @public
 */
const toolPlugin = plugin(toolId, {
  metadata: {
    InitWorkspace: '' as Metadata<string>,
    InitRepoDir: '' as Metadata<string>
  }
})

export default toolPlugin
