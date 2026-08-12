import './Logo.css'

type LogoProps = {
  className?: string
}

export function Logo({ className = '' }: LogoProps) {
  return (
    <img
      className={`brand-logo ${className}`.trim()}
      src="/logo.png"
      alt="Originmaster — AI-first software company logo"
      width={300}
      height={48}
      decoding="async"
    />
  )
}
