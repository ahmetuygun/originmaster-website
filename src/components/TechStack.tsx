import { Reveal } from './Reveal'
import './TechStack.css'

type TechItem = {
  name: string
  logo: string
}

const languages: TechItem[] = [
  { name: 'Java', logo: '/icons/tech/java.svg' },
  { name: 'TypeScript', logo: '/icons/tech/typescript.svg' },
  { name: 'Python', logo: '/icons/tech/python.svg' },
  { name: 'Kotlin', logo: '/icons/tech/kotlin.svg' },
  { name: 'Go', logo: '/icons/tech/go.svg' },
  { name: 'SQL', logo: '/icons/tech/sql.svg' },
]

const frameworks: TechItem[] = [
  { name: 'Spring', logo: '/icons/tech/spring.svg' },
  { name: 'React', logo: '/icons/tech/react.svg' },
  { name: 'Node.js', logo: '/icons/tech/nodejs.svg' },
  { name: 'Next.js', logo: '/icons/tech/nextjs.svg' },
  { name: 'FastAPI', logo: '/icons/tech/fastapi.svg' },
  { name: '.NET', logo: '/icons/tech/dotnet.svg' },
]

const platforms: TechItem[] = [
  { name: 'PostgreSQL', logo: '/icons/tech/postgresql.svg' },
  { name: 'Kubernetes', logo: '/icons/tech/kubernetes.svg' },
  { name: 'AWS', logo: '/icons/tech/aws.svg' },
  { name: 'Docker', logo: '/icons/tech/docker.svg' },
  { name: 'Redis', logo: '/icons/tech/redis.svg' },
  { name: 'GraphQL', logo: '/icons/tech/graphql.svg' },
]

function TechGroup({
  title,
  items,
}: {
  title: string
  items: TechItem[]
}) {
  return (
    <div className="tech-stack__group">
      <p className="tech-stack__group-label">{title}</p>
      <ul className="tech-stack__list">
        {items.map((item) => (
          <li key={item.name} className="tech-stack__chip">
            <img src={item.logo} alt={`${item.name} logo`} width={22} height={22} />
            <span className="tech-stack__chip-name">{item.name}</span>
          </li>
        ))}
      </ul>
    </div>
  )
}

export function TechStack() {
  return (
    <section className="tech-stack" aria-labelledby="tech-stack-heading">
      <div className="container">
        <Reveal>
          <div className="tech-stack__intro">
            <p className="section-label">Engineering</p>
            <h2 id="tech-stack-heading" className="tech-stack__heading">
              Languages, frameworks, and platforms we ship with.
            </h2>
            <p className="tech-stack__copy">
              Modern stacks chosen for clarity, performance, and long-term maintainability —
              from enterprise Java to product-grade web and cloud systems.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="tech-stack__panel">
            <TechGroup title="Languages" items={languages} />
            <TechGroup title="Frameworks & runtimes" items={frameworks} />
            <TechGroup title="Data & cloud" items={platforms} />
          </div>
        </Reveal>
      </div>
    </section>
  )
}
