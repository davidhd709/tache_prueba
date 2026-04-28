import { Button } from '../ui/Button'
import { Container } from '../ui/Container'
import { Icon } from '../ui/Icon'

const kpis = [
  { label: 'Automatizaciones activas', value: '14' },
  { label: 'Integraciones conectadas', value: '32' },
  { label: 'Tiempo operativo ahorrado', value: '38%' },
]

export function HeroSection() {
  return (
    <section id="inicio" className="section-offset relative overflow-hidden pt-16 sm:pt-20 lg:pt-24">
      <Container>
        <div className="grid items-center gap-12 lg:grid-cols-[1.05fr_0.95fr]">
          <div className="animate-fade-up">
            <p className="inline-flex rounded-full border border-[#1d0cdf]/15 bg-[#1d0cdf]/8 px-4 py-1.5 text-sm font-semibold text-[#1d0cdf]">
              Soluciones digitales para negocios en crecimiento
            </p>

            <h1 className="mt-6 text-balance text-4xl font-bold leading-tight tracking-tight text-slate-900 sm:text-5xl lg:text-6xl">
              Transformamos ideas en soluciones digitales inteligentes
            </h1>

            <p className="mt-6 max-w-2xl text-base leading-relaxed text-slate-600 sm:text-lg">
              Creamos páginas web, aplicaciones personalizadas y automatizaciones que ayudan a tu negocio a crecer,
              vender más y trabajar de forma más eficiente.
            </p>

            <div className="mt-8 flex flex-wrap gap-4">
              <Button href="#contacto">Solicitar cotización</Button>
              <Button href="#servicios" variant="secondary">
                Ver servicios
              </Button>
            </div>
          </div>

          <div className="relative animate-fade-up lg:justify-self-end">
            <div className="animate-float absolute -left-8 top-6 hidden rounded-2xl border border-white/80 bg-white/95 px-4 py-3 shadow-[0_10px_30px_-15px_rgba(15,23,42,0.2)] sm:block">
              <p className="text-xs font-semibold uppercase tracking-[0.16em] text-slate-500">Eficiencia</p>
              <p className="mt-1 text-sm font-bold text-slate-800">Flujos conectados en tiempo real</p>
            </div>

            <div className="rounded-3xl border border-slate-200 bg-white p-6 shadow-[0_20px_55px_-28px_rgba(15,23,42,0.35)]">
              <div className="flex items-center justify-between border-b border-slate-100 pb-4">
                <div>
                  <p className="text-sm font-semibold text-slate-900">Panel de operación digital</p>
                  <p className="text-xs text-slate-500">Visión general de rendimiento</p>
                </div>
                <div className="animate-pulse-soft rounded-full bg-[#1d0cdf] px-3 py-1 text-xs font-semibold text-white">
                  Online
                </div>
              </div>

              <div className="mt-5 space-y-4">
                {kpis.map((item) => (
                  <div key={item.label} className="rounded-xl bg-slate-50 p-4">
                    <div className="flex items-start justify-between gap-4">
                      <p className="text-sm font-medium text-slate-600">{item.label}</p>
                      <p className="text-lg font-bold text-slate-900">{item.value}</p>
                    </div>
                    <div className="mt-3 h-2 overflow-hidden rounded-full bg-slate-200">
                      <div className="h-full rounded-full bg-gradient-to-r from-[#1d0cdf] to-[#00c7d9]" style={{ width: item.value === '32' ? '74%' : item.value === '14' ? '61%' : '83%' }} />
                    </div>
                  </div>
                ))}
              </div>

              <div className="mt-5 grid grid-cols-2 gap-3">
                <div className="rounded-xl border border-slate-100 bg-white p-3">
                  <p className="text-xs text-slate-500">Canales integrados</p>
                  <p className="mt-1 text-lg font-bold text-slate-900">WhatsApp + Email</p>
                </div>
                <div className="rounded-xl border border-slate-100 bg-white p-3">
                  <p className="text-xs text-slate-500">Estado</p>
                  <p className="mt-1 flex items-center gap-2 text-sm font-semibold text-[#1d0cdf]">
                    <Icon name="check" className="h-4 w-4" /> Flujo estable
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  )
}
