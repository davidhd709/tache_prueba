export function SectionHeading({ title, description, center = false }) {
  return (
    <div className={`${center ? 'mx-auto max-w-3xl text-center' : 'max-w-3xl'} animate-fade-up`}>
      <h2 className="text-balance text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">{title}</h2>
      {description ? <p className="mt-4 text-base leading-relaxed text-slate-600 sm:text-lg">{description}</p> : null}
    </div>
  )
}
