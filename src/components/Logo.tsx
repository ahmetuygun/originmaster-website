import './Logo.css'

type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src="/logo.png"
      alt="Origin Master"
      width={300}
      height={48}
      decoding="async"
    />
  )
}
