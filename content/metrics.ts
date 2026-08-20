import { z } from 'zod'
import { metricSchema } from './schema'
import type { Metric } from '@/types'

/**
 * Verified impact figures only. One entry against eight roles is the single
 * biggest gap in the corpus (.claude/gap-analysis.md G-01, action item P0-01).
 * Nothing is estimated to pad this list.
 */
const metrics: Metric[] = z.array(metricSchema).parse([
  {
    id: 'MET-01',
    org: 'Senti.AI',
    text: 'Verified impact figure: the BIR 2307 reimbursement platform digitised more than 50,000 files per month via OCR.',
    value: '50k+',
    statLabel: 'Files a month digitised by the Senti.AI OCR platform he supported'
  }
])

export default metrics
