import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'
import { problems } from '../../data/content'

export function ProblemSection() {
  return (
    <section className="section-offset py-20 sm:py-24">
      <Container>
        <SectionHeading
          title="Muchos negocios pierden oportunidades por no tener una presencia digital optimizada"
          description="Cuando la presencia digital y los procesos internos no están conectados, el crecimiento se vuelve lento, costoso y difícil de escalar."
        />

        <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {problems.map((problem) => (
            <article
              key={problem}
              className="group rounded-2xl border border-slate-200 bg-white p-5 shadow-sm transition-all duration-300 hover:-translate-y-1 hover:border-[#1d0cdf]/30 hover:shadow-[0_18px_30px_-22px_rgba(29,12,223,0.5)]"
            >
              <span className="inline-flex rounded-lg bg-[#fef3f2] p-2 text-[#d92d20]">
                <Icon name="warning" className="h-5 w-5" />
              </span>
              <p className="mt-4 text-sm leading-relaxed text-slate-700">{problem}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
