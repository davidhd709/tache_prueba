import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { metrics } from '../../data/content'

export function MetricsSection() {
  return (
    <section className="section-offset py-20 sm:py-24">
      <Container>
        <div className="rounded-3xl border border-[#1d0cdf]/15 bg-gradient-to-r from-[#eef2ff] via-white to-[#e6f9ff] p-8 sm:p-10">
          <SectionHeading
            center
            title="Indicadores de propuesta de valor"
            description="Estas métricas representan el enfoque de valor que aplicamos en cada proyecto digital."
          />

          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {metrics.map((item) => (
              <article key={item.label} className="rounded-2xl border border-white bg-white/90 p-5 text-center shadow-sm">
                <p className="text-3xl font-bold tracking-tight text-[#1d0cdf]">{item.value}</p>
                <p className="mt-2 text-sm leading-relaxed text-slate-600">{item.label}</p>
              </article>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
