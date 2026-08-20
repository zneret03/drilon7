import { Card } from '@/components/ui'
import type { PipelineStep } from '@/types'

/**
 * The pipeline is the case study's argument — every stage inspectable — so it
 * wraps into a single column on a narrow screen rather than hiding stages behind
 * a control or a scroll container no keyboard can reach.
 */
export function CasePipeline({ steps }: { steps: PipelineStep[] }) {
  return (
    <ol className='grid gap-4 sm:grid-cols-2 lg:grid-cols-3'>
      {steps.map((stage) => (
        <Card key={stage.step} as='li'>
          <p className='text-2xs tracking-mono text-accent font-mono'>{stage.step}</p>
          <p className='text-body-strong mt-2 text-base'>{stage.label}</p>
          <p className='text-muted text-2xs mt-1 font-mono'>{stage.tech}</p>
        </Card>
      ))}
    </ol>
  )
}
