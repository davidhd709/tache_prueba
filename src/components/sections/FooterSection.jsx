import { Container } from '../ui/Container'

export function FooterSection() {
  return (
    <footer className="border-t border-slate-200 bg-white py-14">
      <Container>
        <div className="grid gap-10 md:grid-cols-[1.2fr_0.8fr_0.8fr]">
          <div>
            <h3 className="text-lg font-bold text-slate-900">
              Tache <span className="text-[#1d0cdf]">Technology</span>
            </h3>
            <p className="mt-3 max-w-md text-sm leading-relaxed text-slate-600">
              Impulsamos negocios con soluciones digitales claras, funcionales y escalables para mejorar su presencia,
              operación y crecimiento.
            </p>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">Servicios</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>Desarrollo web</li>
              <li>Aplicaciones personalizadas</li>
              <li>Automatización e integraciones</li>
              <li>Gestión de datos</li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-bold uppercase tracking-[0.14em] text-slate-500">Contacto</h4>
            <ul className="mt-3 space-y-2 text-sm text-slate-600">
              <li>contacto@tachetechnology.com</li>
              <li>+57 300 000 0000</li>
              <li>@tachetechnology</li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-slate-200 pt-6 text-xs text-slate-500 sm:flex sm:items-center sm:justify-between">
          <p>Copyright © {new Date().getFullYear()} Tache Technology. Todos los derechos reservados.</p>
          <p className="mt-2 sm:mt-0">LinkedIn | Instagram | Facebook</p>
        </div>
      </Container>
    </footer>
  )
}
