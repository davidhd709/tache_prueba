import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'
import { services } from '../../data/content'

export function ServicesSection() {
  return (
    <section id="servicios" className="section-offset py-20 sm:py-24">
      <Container>
        <SectionHeading
          center
          title="Servicios tecnológicos para una operación más inteligente"
          description="Cada servicio está diseñado para mejorar la forma en que tu negocio se presenta, opera y escala en el entorno digital."
        />

        <div className="mt-12 grid gap-5 md:grid-cols-2 xl:grid-cols-3">
          {services.map((service) => (
            <article
              key={service.title}
              className="group rounded-3xl border border-slate-200 bg-white p-6 shadow-sm transition-all duration-300 hover:-translate-y-1.5 hover:border-[#1d0cdf]/35 hover:shadow-[0_26px_45px_-32px_rgba(29,12,223,0.55)]"
            >
              <span className="inline-flex rounded-xl bg-[#eef2ff] p-3 text-[#1d0cdf] transition group-hover:bg-[#1d0cdf] group-hover:text-white">
                <Icon name={service.icon} className="h-5 w-5" />
              </span>

              <h3 className="mt-4 text-lg font-bold text-slate-900">{service.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-slate-600">{service.description}</p>
            </article>
          ))}
        </div>
      </Container>
    </section>
  )
}
