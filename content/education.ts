import { z } from 'zod'
import { educationSchema } from './schema'
import type { Education } from '@/types'

const education: Education[] = z.array(educationSchema).parse([
  {
    id: 'EDU-ISATU-01',
    school: 'Iloilo Science and Technology University',
    degree:
      'BS Computer Science — the institution appears on earlier records as Western Visayas College of Science and Technology, La Paz',
    period: 'April 2018 — June 2022',
    location: 'La Paz, Iloilo City'
  },
  {
    id: 'EDU-STI-01',
    school: 'System Technology Institute',
    degree: 'Information and Communications Technology',
    period: 'April 2016 — May 2018',
    location: 'Iloilo City'
  }
])

export default education
