import { z } from 'zod'
import { awardSchema } from './schema'
import type { Award } from '@/types'

const awards: Award[] = z.array(awardSchema).parse([
  {
    id: 'AWD-01',
    year: '2022',
    title:
      'Best Thesis — Early detection of diseases through fingernails using image processing'
  },
  {
    id: 'AWD-02',
    year: '2021',
    title: 'ASEAN Data Science Explorers — 2nd Runner-up, National Finals'
  },
  {
    id: 'AWD-03',
    year: '2020',
    title: 'HackFest 2020 Top 13 — Traversing the Filipino New Normal with Technology'
  },
  {
    id: 'AWD-04',
    year: '2018',
    title: 'Programmer of the Year — System Technology Institute'
  }
])

export default awards
