import Image from 'next/image'
import type { Project } from '@/types'

type GalleryImage = NonNullable<Project['overview']>['gallery'][number]

/**
 * The screenshots, in colour and captioned. `object-contain` over a plain
 * surface because the set mixes desktop and phone captures and a fixed crop
 * would cut evidence out of the tall ones; no tint, no lightbox (W-17, W-18).
 */
export function ProjectGallery({ images }: { images: GalleryImage[] }) {
  return (
    <ul className='grid gap-6 md:grid-cols-2'>
      {images.map((image) => (
        <li key={image.src}>
          <figure>
            <div className='border-line bg-surface relative aspect-[4/3] w-full border'>
              <Image
                alt={image.alt}
                className='object-contain'
                fill
                sizes='(min-width: 1240px) 576px, (min-width: 768px) 50vw, 100vw'
                src={image.src}
              />
            </div>
            <figcaption className='text-muted mt-3 font-mono text-xs'>
              {image.caption}
            </figcaption>
          </figure>
        </li>
      ))}
    </ul>
  )
}
