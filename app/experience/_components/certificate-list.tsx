import { Badge, Card, ChunkIdChip, ExternalLink } from '@/components/ui'
import { sourcesHref } from '@/lib/nav'
import type { Certificate } from '@/types'

/**
 * Certificates that open the scan itself. The files are served from /public, so
 * the evidence does not depend on a third-party host staying reachable.
 */
export function CertificateList({
  certificates
}: {
  certificates: readonly Certificate[]
}) {
  return (
    <ul className='grid gap-6 md:grid-cols-2'>
      {certificates.map((certificate) => (
        <li key={certificate.id}>
          <Card hover className='flex h-full flex-col gap-3'>
            <div className='flex items-start justify-between gap-4'>
              <h3 className='text-heading text-lg'>
                <ExternalLink href={certificate.file} icon>
                  {certificate.title}
                </ExternalLink>
              </h3>
              <ChunkIdChip id={certificate.id} href={sourcesHref('CRT')} />
            </div>
            <p className='text-body text-sm'>{certificate.subtitle}</p>
            <Badge tone='quiet' className='mt-auto self-start'>
              PDF
            </Badge>
          </Card>
        </li>
      ))}
    </ul>
  )
}
