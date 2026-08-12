import { Reveal } from './Reveal'
import './AIPlatforms.css'

type Platform = {
  name: string
  logo: string
}

const platforms: Platform[] = [
  { name: 'Hugging Face', logo: '/icons/ai/huggingface.svg' },
  { name: 'OpenAI', logo: '/icons/ai/openai.svg' },
  { name: 'Anthropic', logo: '/icons/ai/anthropic.svg' },
  { name: 'LangChain', logo: '/icons/ai/langchain.svg' },
  { name: 'PyTorch', logo: '/icons/ai/pytorch.svg' },
  { name: 'TensorFlow', logo: '/icons/ai/tensorflow.svg' },
  { name: 'Mistral', logo: '/icons/ai/mistral.svg' },
  { name: 'Ollama', logo: '/icons/ai/ollama.svg' },
]

export function AIPlatforms() {
  return (
    <section className="ai-platforms" aria-labelledby="ai-platforms-heading">
      <div className="container">
        <Reveal>
          <div className="ai-platforms__intro">
            <p className="section-label">AI platforms</p>
            <h2 id="ai-platforms-heading" className="ai-platforms__heading">
              Built on the models and tools shaping modern intelligence.
            </h2>
            <p className="ai-platforms__copy">
              We integrate leading AI platforms into production systems — carefully,
              securely, and with clear business outcomes.
            </p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <ul className="ai-platforms__grid">
            {platforms.map((item) => (
              <li key={item.name} className="ai-platforms__item">
                <img
                  className="ai-platforms__logo"
                  src={item.logo}
                  alt=""
                  width={28}
                  height={28}
                />
                <span className="ai-platforms__name">{item.name}</span>
              </li>
            ))}
          </ul>
        </Reveal>
      </div>
    </section>
  )
}
