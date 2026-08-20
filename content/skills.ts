import { z } from 'zod'
import { skillSchema } from './schema'
import type { Skill } from '@/types'

/** Approximate years in production work, ordered by depth. Labelled approximate. */
const skills: Skill[] = z.array(skillSchema).parse([
  { name: 'React', years: 5 },
  { name: 'Next.js', years: 5 },
  { name: 'TailwindCSS', years: 5 },
  { name: 'styled-components', years: 5 },
  { name: 'TypeScript', years: 4 },
  { name: 'Node.js', years: 4 },
  { name: 'Jest / testing', years: 3 },
  { name: 'CI-CD pipelines', years: 3 },
  { name: 'GraphQL', years: 2 },
  { name: 'Elixir / Phoenix', years: 2 },
  { name: 'Firebase', years: 2 },
  { name: 'PostgreSQL', years: 1.5 },
  { name: 'Prisma ORM', years: 1.5 },
  { name: 'Terraform', years: 1 },
  { name: 'Fastify', years: 1 },
  { name: 'LitElement', years: 1 },
  { name: 'Supabase', years: 1 }
])

export default skills
