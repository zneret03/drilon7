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
            type='button'
            size='sm'
            active={selected}
            aria-pressed={selected}
            className='inline-flex items-center gap-2'
            onClick={() => router.push(sourcesHref(option), { scroll: false })}
          >
            {option}
            {/* Inherits the chip's own colour so it tracks hover and active state. */}
            <span className='opacity-70'>
              {option === 'ALL' ? total : counts[option]}
            </span>
          </Chip>
        )
      })}
    </div>
  )
}
