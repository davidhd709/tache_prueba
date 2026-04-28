import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'
import { SectionHeading } from '../ui/SectionHeading'

export function ContactSection() {
  const handleSubmit = (event) => {
    event.preventDefault()
    window.alert('Gracias por tu mensaje. Pronto nos pondremos en contacto contigo para tu asesoría.')
    event.currentTarget.reset()
  }

  return (
    <section id="contacto" className="section-offset py-20 sm:py-24">
      <Container>
        <div className="grid gap-10 rounded-3xl border border-slate-200 bg-white p-8 shadow-[0_22px_42px_-34px_rgba(15,23,42,0.45)] sm:p-10 lg:grid-cols-[0.92fr_1.08fr]">
          <div>
            <SectionHeading
              title="Hablemos de tu proyecto"
              description="Comparte la necesidad de tu negocio y te contactaremos con una propuesta clara y orientada a resultados."
            />

            <ul className="mt-8 space-y-4">
              <li className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <span className="rounded-lg bg-white p-2 text-[#1d0cdf] shadow-sm">
                  <Icon name="mail" className="h-4 w-4" />
                </span>
                contacto@tachetechnology.com
              </li>
              <li className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <span className="rounded-lg bg-white p-2 text-[#1d0cdf] shadow-sm">
                  <Icon name="phone" className="h-4 w-4" />
                </span>
                +57 300 000 0000
              </li>
              <li className="flex items-center gap-3 rounded-xl bg-slate-50 px-4 py-3 text-sm text-slate-700">
                <span className="rounded-lg bg-white p-2 text-[#1d0cdf] shadow-sm">
                  <Icon name="location" className="h-4 w-4" />
                </span>
                Colombia | Atención remota nacional e internacional
              </li>
            </ul>
          </div>

          <form onSubmit={handleSubmit} className="grid gap-4">
            <div className="grid gap-2">
              <label htmlFor="name" className="text-sm font-semibold text-slate-700">
                Nombre
              </label>
              <input
                id="name"
                name="name"
                required
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1d0cdf] focus:ring-4 focus:ring-[#1d0cdf]/10"
                placeholder="Tu nombre completo"
              />
            </div>

            <div className="grid gap-4 sm:grid-cols-2">
              <div className="grid gap-2">
                <label htmlFor="email" className="text-sm font-semibold text-slate-700">
                  Correo
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1d0cdf] focus:ring-4 focus:ring-[#1d0cdf]/10"
                  placeholder="tu@empresa.com"
                />
              </div>

              <div className="grid gap-2">
                <label htmlFor="whatsapp" className="text-sm font-semibold text-slate-700">
                  WhatsApp
                </label>
                <input
                  id="whatsapp"
                  name="whatsapp"
                  required
                  className="rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1d0cdf] focus:ring-4 focus:ring-[#1d0cdf]/10"
                  placeholder="+57 300 123 4567"
                />
              </div>
            </div>

            <div className="grid gap-2">
              <label htmlFor="service" className="text-sm font-semibold text-slate-700">
                Servicio de interés
              </label>
              <select
                id="service"
                name="service"
                required
                defaultValue=""
                className="rounded-xl border border-slate-200 px-4 py-3 text-sm text-slate-700 outline-none transition focus:border-[#1d0cdf] focus:ring-4 focus:ring-[#1d0cdf]/10"
              >
                <option value="" disabled>
                  Selecciona una opción
                </option>
                <option>Desarrollo de páginas web</option>
                <option>Aplicaciones web personalizadas</option>
                <option>Automatización de procesos</option>
                <option>Bots con inteligencia artificial</option>
                <option>APIs e integraciones</option>
                <option>Gestión de bases de datos</option>
              </select>
            </div>

            <div className="grid gap-2">
              <label htmlFor="message" className="text-sm font-semibold text-slate-700">
                Mensaje
              </label>
              <textarea
                id="message"
                name="message"
                rows="4"
                required
                className="resize-none rounded-xl border border-slate-200 px-4 py-3 text-sm outline-none transition focus:border-[#1d0cdf] focus:ring-4 focus:ring-[#1d0cdf]/10"
                placeholder="Cuéntanos qué necesitas digitalizar o mejorar"
              />
            </div>

            <button
              type="submit"
              className="mt-2 inline-flex items-center justify-center rounded-xl bg-[#1d0cdf] px-6 py-3 text-sm font-semibold text-white transition hover:-translate-y-0.5 hover:bg-[#1609bb]"
            >
              Solicitar asesoría
            </button>
          </form>
        </div>
      </Container>
    </section>
  )
}
