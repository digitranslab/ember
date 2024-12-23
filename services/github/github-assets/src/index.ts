//
// Copyright © 2023 Digitrans Inc.
//

import { loadMetadata } from '@digitranslab/platform'
import github from '@digitranslab/github'

const icons = require('../assets/icons.svg') as string // eslint-disable-line
loadMetadata(github.icon, {
  Github: `${icons}#github`,
  GithubRepository: `${icons}#repository`,
  PullRequest: `${icons}#pullRequest`,
  PullRequestMerged: `${icons}#pullRequestMerged`,
  PullRequestClosed: `${icons}#pullRequestClosed`,
  Forks: `${icons}#forks`
})
