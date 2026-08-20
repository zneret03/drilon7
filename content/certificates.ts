import { z } from 'zod'
import { certificateSchema } from './schema'
import type { Certificate } from '@/types'

/** Served from /public so the link never depends on GitHub staying reachable. */
const certificates: Certificate[] = z.array(certificateSchema).parse([
  {
    id: 'CRT-01',
    title: 'HackFest Loyola',
    subtitle: 'Unplugged — participation, Ian Drilon',
    file: '/certificates/hackfest-loyola-unplugged.pdf'
  },
  {
    id: 'CRT-02',
    title: 'ASEAN Data Science Explorers',
    subtitle: 'Second Runner-up — National Finals',
    file: '/certificates/asean-dse-national-finals.pdf'
  }
])

export default certificates
