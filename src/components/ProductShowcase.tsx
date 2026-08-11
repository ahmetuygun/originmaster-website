import { Reveal } from './Reveal'
import { PremiumMedia } from './PremiumMedia'
import './ProductShowcase.css'

export function ProductShowcase() {
  return (
    <section className="product">
      <div className="container">
        <Reveal>
          <div className="product__header">
            <h2 className="section-heading">Software that feels as good as it works.</h2>
            <p className="section-copy">
              Great software should disappear into the experience. It should feel
              intuitive, fast, reliable, and natural.
            </p>
          </div>
        </Reveal>
        <Reveal delay={0.1}>
          <PremiumMedia
            src="/images/product-dashboard.jpg"
            alt="Clean enterprise software dashboard showing analytics, charts, and data tables in a light browser interface"
            aspect="product"
            className="product__media"
          />
        </Reveal>
      </div>
    </section>
  )
}
