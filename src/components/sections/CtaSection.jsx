import { Button } from '../ui/Button'
import { Container } from '../ui/Container'

export function CtaSection() {
  return (
    <section className="section-offset py-20 sm:py-24">
      <Container>
        <div className="rounded-3xl bg-[#1d0cdf] px-8 py-12 text-white sm:px-12 sm:py-14">
          <h2 className="text-balance text-3xl font-bold tracking-tight sm:text-4xl">
            ¿Tienes una idea o proceso que quieras digitalizar?
          </h2>
          <p className="mt-4 max-w-2xl text-base leading-relaxed text-indigo-100 sm:text-lg">
            Cuéntanos qué necesita tu negocio y te ayudaremos a convertirlo en una solución digital clara,
            funcional y profesional.
          </p>
          <Button href="#contacto" variant="secondary" className="mt-8 border-white/30 bg-white text-[#1d0cdf] hover:bg-white/90">
            Solicitar asesoría
          </Button>
        </div>
      </Container>
    </section>
  )
}
