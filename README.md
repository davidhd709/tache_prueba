# Tache Technology Landing

Landing page moderna y optimizada para conversión de **Tache Technology**, construida con **React + Vite + Tailwind CSS**.

## Características

- Diseño claro tipo startup tecnológica (sin modo oscuro)
- Secciones orientadas a confianza y captación de clientes
- Componentes reutilizables y estructura organizada
- Tarjetas modernas, sombras suaves y animaciones sutiles
- Responsive para móvil, tablet y escritorio
- Formulario de contacto visual (sin backend)

## Estructura principal

- `src/components/sections/`: secciones de la landing
- `src/components/ui/`: componentes reutilizables de interfaz
- `src/data/content.js`: contenido centralizado (servicios, beneficios, proceso, métricas)

## Ejecutar el proyecto

```bash
npm install
npm run dev
```

## Build de producción

```bash
npm run build
```

## Integrar Botpress

1. Copia `.env.example` a `.env`.
2. Pega en `VITE_BOTPRESS_CONFIG_URL` la URL del script de configuración de tu bot.
3. Si solo tienes la URL `shareable.html`, pégala en `VITE_BOTPRESS_SHAREABLE_URL`.
4. Ejecuta el proyecto con `npm run dev`.

Si ambos (`VITE_BOTPRESS_CONFIG_URL` y `VITE_BOTPRESS_SHAREABLE_URL`) están vacíos, el chat no se carga.
