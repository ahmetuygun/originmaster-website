import './PremiumMedia.css'

type PremiumMediaProps = {
  src: string
  alt: string
  className?: string
  aspect?: 'hero' | 'square' | 'wide' | 'case' | 'product'
}

export function PremiumMedia({
  src,
  alt,
  className = '',
  aspect = 'wide',
}: PremiumMediaProps) {
  return (
    <figure className={`premium-media premium-media--${aspect} ${className}`.trim()}>
      <img src={src} alt={alt} loading="lazy" decoding="async" />
    </figure>
  )
}
