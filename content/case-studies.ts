import { z } from 'zod'
import { caseStudySchema } from './schema'
import type { CaseStudy } from '@/types'

/**
 * Long-form project write-ups. `slug` must match a project slug — enforced in
 * `content/index.ts`, which throws at import time if it does not.
 */
const caseStudies: CaseStudy[] = z.array(caseStudySchema).parse([
  {
    slug: 'nail-disease-detection',
    chunkPrefix: 'CSE-NAIL',
    summary:
      'A desktop application that reads early indicators of systemic disease from a fingernail photograph, built as an undergraduate thesis and awarded Best Thesis in 2022.',
    sections: [
      {
        kicker: 'Problem',
        title: 'Systemic disease shows up in fingernails first',
        body: 'Colour and texture changes in the nail bed are an early indicator of several systemic diseases, but reading them reliably takes a trained clinician. The thesis question was whether an ordinary camera image plus classical computer vision could surface that signal for someone without that training.'
      },
      {
        kicker: 'Approach',
        title: 'Classical CV before the classifier',
        body: 'Rather than pushing raw photographs at a network, the pipeline isolates the nail first. Canny edge detection finds the nail boundary, segmentation crops it out of the surrounding hand, and only then do colour and texture features go to an SVM for supervised classification. Fewer parameters, an inspectable failure mode, and it runs on a student laptop.'
      },
      {
        kicker: 'Interface',
        title: 'A desktop app, because the users were not online',
        body: 'Delivered as an Electron shell around a React interface talking to a Python Flask service, with Sass for styling. Packaging it as a desktop application meant it worked in clinic settings without a reliable connection, and kept the image data on the machine that captured it.'
      },
      {
        kicker: 'Outcome',
        title: 'Best Thesis, and the habit that stuck',
        body: 'The project took Best Thesis at Iloilo Science and Technology University in 2022. It also set the working pattern visible in every role since: build the smallest correct pipeline, make each stage inspectable, and only add machinery where the simple version measurably fails.'
      }
    ],
    pipeline: [
      { step: '01', label: 'Image capture', tech: 'Electron · desktop camera' },
      { step: '02', label: 'Edge detection', tech: 'Canny' },
      { step: '03', label: 'Nail segmentation', tech: 'OpenCV · Python' },
      { step: '04', label: 'Feature extraction', tech: 'colour + texture' },
      { step: '05', label: 'Classification', tech: 'SVM, supervised' },
      { step: '06', label: 'Result surface', tech: 'React · Flask API' }
    ]
  }
])

export default caseStudies
