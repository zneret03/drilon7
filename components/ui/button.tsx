import Link from 'next/link'
import { cn } from '@/lib/cn'
import type { ComponentProps } from 'react'

type Variant = 'solid' | 'outline' | 'ghost'
type Size = 'sm' | 'md'

const BASE =
  'inline-flex items-center justify-center gap-2 whitespace-nowrap font-mono transition ease-standard disabled:cursor-not-allowed disabled:opacity-50'

const VARIANTS: Record<Variant, string> = {
  solid: 'bg-accent font-bold text-background hover:bg-accent-hover',
  outline: 'border border-accent bg-accent-wash text-accent hover:bg-accent/20',
  ghost: 'text-muted hover:text-accent'
}

const SIZES: Record<Size, string> = {
  sm: 'h-8 px-3 text-2xs',
  md: 'h-10 px-5 text-sm'
}

type Styling = {
  variant?: Variant
  size?: Size
  className?: string
}

function buttonClass({ variant = 'solid', size = 'md', className }: Styling): string {
  return cn(BASE, VARIANTS[variant], SIZES[size], className)
}

export type ButtonProps = ComponentProps<'button'> & Styling

/**
 * The only button styling in the app. Kept free of hooks so it stays a server
 * component while a client screen can still hand it an `onClick`.
 */
export function Button({ variant, size, className, ...props }: ButtonProps) {
  const classes = buttonClass({ variant, size, className })
  return <button className={classes} {...props} />
}

type Outbound = {
  /** Adds `target`/`rel`, so an off-site jump never hands over the tab. */
  external?: boolean
}

export type ButtonLinkProps = ComponentProps<typeof Link> & Styling & Outbound

/** Navigation that has to read as the primary action, with the same variants. */
export function ButtonLink({
  variant,
  size,
  external,
  className,
  ...props
}: ButtonLinkProps) {
  const outbound = external ? { target: '_blank', rel: 'noreferrer noopener' } : {}
  const classes = buttonClass({ variant, size, className })
  return <Link className={classes} {...outbound} {...props} />
}
