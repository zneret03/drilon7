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
    <ul className='space-y-3'>
      {certificates.map((certificate) => (
        <li key={certificate.id}>
          <Card hover className='p-5'>
            <div className='flex flex-wrap items-center justify-between gap-3'>
              <ChunkIdChip id={certificate.id} href={sourcesHref('CRT')} />
              <Badge tone='quiet'>PDF</Badge>
            </div>
            <h3 className='text-prose mt-2'>
              <ExternalLink href={certificate.file} icon>
                {certificate.title}
              </ExternalLink>
            </h3>
            <p className='text-muted mt-1.5 text-sm'>{certificate.subtitle}</p>
          </Card>
        </li>
      ))}
    </ul>
  )
}
