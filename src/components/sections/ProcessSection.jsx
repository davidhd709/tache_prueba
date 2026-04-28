import { Container } from '../ui/Container'
import { SectionHeading } from '../ui/SectionHeading'
import { processSteps } from '../../data/content'

export function ProcessSection() {
  return (
    <section id="proceso" className="section-offset py-20 sm:py-24">
      <Container>
        <SectionHeading
          center
          title="Así convertimos tu idea en una solución funcional"
          description="Trabajamos con una metodología clara para construir soluciones con impacto real y evolución continua."
        />

        <div className="mt-12 grid gap-5 lg:grid-cols-4">
          {processSteps.map((step, index) => (
            <article
              key={step.title}
              className="rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#1d0cdf]/30"
            >
              <span className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-[#1d0cdf] text-sm font-bold text-white">
                {index + 1}
              </span>
              <h3 className="mt-4 text-lg font-bold text-slate-900">{step.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{step.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
