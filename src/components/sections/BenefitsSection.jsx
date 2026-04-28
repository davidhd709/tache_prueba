import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'
import { benefits } from '../../data/content'

export function BenefitsSection() {
  return (
    <section id="beneficios" className="section-offset py-20 sm:py-24">
      <Container>
        <SectionHeading center title="Tecnología pensada para resultados reales" />

        <div className="mt-12 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {benefits.map((benefit) => (
            <div
              key={benefit}
              className="rounded-2xl border border-slate-200 bg-white px-5 py-4 shadow-sm transition hover:border-[#1d0cdf]/30 hover:shadow-[0_16px_30px_-24px_rgba(29,12,223,0.45)]"
            >
              <p className="flex items-center gap-3 text-sm font-semibold text-slate-700 sm:text-base">
                <span className="inline-flex rounded-full bg-[#dbf4ff] p-1.5 text-[#0e7490]">
                  <Icon name="check" className="h-3.5 w-3.5" />
                </span>
                {benefit}
              </p>
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
