import { z } from 'zod'
import { articleSchema } from './schema'
import type { Article } from '@/types'

/** Published writing. Previously invisible on the site — action item P1-03. */
const writing: Article[] = z.array(articleSchema).parse([
  {
    id: 'WRT-01',
    title:
      'How to one-shot your feature with this orchestration workers graph engineering in Claude',
    url: 'https://dev.to/zneret03/how-to-one-shot-your-feature-with-this-orchestration-workers-graph-engineering-in-claude-2cmf'
  },
  {
    id: 'WRT-02',
    title: 'How to create SSH and connect to Bitbucket/GitHub in WSL2',
    url: 'https://dev.to/zneret03/how-to-create-ssh-and-connect-to-bitbucketgithub-in-wsl2-5cml'
  }
])

export default writing
