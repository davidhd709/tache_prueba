import { Container } from '../ui/Container'
import { Button } from '../ui/Button'
import { navItems } from '../../data/content'

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-200/70 bg-white/88 backdrop-blur-md">
      <Container>
        <div className="flex h-20 items-center justify-between gap-6">
          <a href="#inicio" className="text-lg font-bold tracking-tight text-slate-900 sm:text-xl">
            Tache <span className="text-[#1d0cdf]">Technology</span>
          </a>

          <nav className="hidden items-center gap-6 md:flex">
            {navItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-sm font-medium text-slate-600 transition hover:text-[#1d0cdf]"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <Button href="#contacto" className="hidden sm:inline-flex">
            Solicitar asesoría
          </Button>
        </div>

        <nav className="flex gap-4 overflow-x-auto border-t border-slate-100 py-3 [scrollbar-width:none] [&::-webkit-scrollbar]:hidden md:hidden">
          {navItems.map((item) => (
            <a
              key={item.label}
              href={item.href}
              className="whitespace-nowrap rounded-full border border-slate-200 bg-white px-3 py-1.5 text-xs font-semibold text-slate-600 transition hover:border-[#1d0cdf]/30 hover:text-[#1d0cdf]"
            >
              {item.label}
            </a>
          ))}
        </nav>
      </Container>
    </header>
  )
}
