import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

const solutionPoints = [
  'Estrategia digital enfocada en conversión',
  'Diseño visual moderno y experiencia clara',
  'Tecnología escalable para crecimiento continuo',
]

export function SolutionSection() {
  return (
    <section className="section-offset py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_22px_44px_-35px_rgba(15,23,42,0.45)] sm:p-10 lg:grid-cols-[1.12fr_0.88fr]">
          <SectionHeading
            title="Soluciones digitales diseñadas para hacer crecer tu negocio"
            description="En Tache Technology diseñamos y desarrollamos herramientas digitales a la medida, combinando estrategia, diseño y tecnología para mejorar la operación, la atención al cliente y la presencia online de tu empresa."
          />

          <div className="grid content-center gap-4">
            {solutionPoints.map((point) => (
              <div key={point} className="rounded-2xl bg-slate-50 p-4">
                <p className="flex items-center gap-3 text-sm font-medium text-slate-700 sm:text-base">
                  <span className="inline-flex rounded-full bg-[#1d0cdf] p-1 text-white">
                    <Icon name="check" className="h-3.5 w-3.5" />
                  </span>
                  {point}
                </p>
              </div>
            ))}
          </div>
        </div>
      </Container>
    </section>
  )
}
