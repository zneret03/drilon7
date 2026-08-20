'use client'

import { useRouter } from 'next/navigation'
import { Chip } from '@/components/ui'
import { sourcesHref } from '@/lib/nav'
import type { Namespace } from '@/types'

/**
 * Client leaf so the corpus list itself can stay a Server Component: only the
 * chips need a click handler, and the selection lives in the URL, not in state.
 */
export function NamespaceFilter({
  namespaces,
  counts,
  active
}: {
  namespaces: readonly Namespace[]
  counts: Record<Namespace, number>
  active: Namespace | 'ALL'
}) {
  const router = useRouter()
  const total = Object.values(counts).reduce((sum, count) => sum + count, 0)
  const options: readonly (Namespace | 'ALL')[] = ['ALL', ...namespaces]

  return (
    <div
      role='group'
      aria-label='Filter chunks by namespace'
      className='flex flex-wrap gap-2'
    >
      {options.map((option) => {
        const selected = option === active

        return (
          <Chip
            key={option}
            size='sm'
            active={selected}
            aria-pressed={selected}
            className='px-3.5 py-1.5 tracking-wider'
            onClick={() => router.push(sourcesHref(option), { scroll: false })}
          >
            {/* One run, like the design: the count reads as part of the label. */}
            {option} · {option === 'ALL' ? total : counts[option]}
          </Chip>
        )
      })}
    </div>
  )
}
