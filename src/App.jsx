import { useEffect, useState } from 'react'
import Sidebar from './components/Sidebar.jsx'
import { Card, Section } from './components/ui.jsx'
import { experience, profile, projects, sections, stack } from './data/content.js'

function useActiveSection(ids) {
  const [active, setActive] = useState(ids[0])
  useEffect(() => {
    const onScroll = () => {
      const y = window.scrollY + window.innerHeight * 0.35
      let current = ids[0]
      for (const id of ids) {
        const el = document.getElementById(id)
        if (el && el.offsetTop <= y) current = id
      }
      if (window.innerHeight + window.scrollY >= document.body.scrollHeight - 4) current = ids[ids.length - 1]
      setActive(current)
    }
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [ids])
  return active
}

function useSpotlight() {
  const [pos, setPos] = useState({ x: '50%', y: '20%' })
  useEffect(() => {
    if (!window.matchMedia('(pointer: fine)').matches) return
    const onMove = (e) => setPos({ x: `${e.clientX}px`, y: `${e.clientY}px` })
    window.addEventListener('pointermove', onMove, { passive: true })
    return () => window.removeEventListener('pointermove', onMove)
  }, [])
  return pos
}

export default function App() {
  const active = useActiveSection(sections)
  const { x, y } = useSpotlight()

  return (
    <>
      <a
        href="#content"
        className="sr-only focus:not-sr-only focus:fixed focus:top-4 focus:left-4 focus:z-50 focus:rounded-md focus:bg-accent focus:px-3 focus:py-2 focus:text-ink"
      >
        Skip to content
      </a>
      <div
        aria-hidden="true"
        className="pointer-events-none fixed inset-0 z-0"
        style={{ background: `radial-gradient(600px at ${x} ${y}, rgba(125,211,192,0.06), transparent 80%)` }}
      />

      <div className="relative z-10 mx-auto max-w-6xl px-6 lg:flex lg:justify-between lg:gap-12 lg:px-12">
        <Sidebar active={active} />

        <main id="content" className="pb-16 lg:w-[52%] lg:py-24">
          <Section id="about" title="About">
            <div className="space-y-4">
              <p>
                I'm a <strong>full stack developer</strong> with 3+ years of experience, based in Angeles City, Philippines. Most of my work lives
                inside companies: the internal platforms that process policies, pay people, track production and route
                requests. I care about software that is fast, boring to operate and easy for the next developer to pick
                up.
              </p>
              <p>
                Today I work at <strong>Thurston Software Solutions</strong>, building and maintaining insurance
                management systems on <strong>Blazor, C#, .NET and SQL Server</strong>. Before that, at{' '}
                <strong>La Rose Noire</strong>, I was the developer and DBA who turned paper and spreadsheet processes
                into web apps, including face-recognition attendance and a production tracking system I proposed and
                built.
              </p>
              <p>
                I like owning the whole path: database design, APIs, UI, deployment to IIS or Azure, and the production
                support afterwards.
              </p>
              <p>
                Outside of code I also do graphic design and video editing.{' '}
                <a
                  href={profile.design}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-strong underline decoration-accent/40 underline-offset-4 transition-colors hover:text-accent"
                >
                  See that portfolio ↗
                </a>
              </p>
            </div>
          </Section>

          <Section id="experience" title="Experience">
            <ol className="group/list grid gap-2">
              {experience.map((job) => (
                <Card key={job.title} label={job.when} {...job} />
              ))}
            </ol>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-6 inline-block border-b border-transparent font-semibold text-strong transition-colors hover:border-accent hover:text-accent"
            >
              View full résumé <span aria-hidden="true">↗</span>
            </a>
          </Section>

          <Section id="projects" title="Projects">
            <p className="mb-2 text-sm text-muted">
              Most of my work is private company software, so these are write-ups rather than public repos.
            </p>
            <ol className="group/list grid gap-2">
              {projects.map((p, i) => (
                <Card key={p.title} label={String(i + 1).padStart(2, '0')} {...p} />
              ))}
            </ol>
          </Section>

          <Section id="stack" title="Stack">
            <dl className="grid gap-3.5">
              {stack.map(([k, v]) => (
                <div key={k} className="grid gap-0.5 border-b border-slate-400/10 pb-3.5 lg:grid-cols-[168px_1fr] lg:gap-4">
                  <dt className="text-sm font-semibold text-strong">{k}</dt>
                  <dd className="text-[0.94rem]">{v}</dd>
                </div>
              ))}
            </dl>
          </Section>

          <Section id="contact" title="Contact">
            <p className="max-w-md text-2xl leading-snug text-strong">
              Hiring for a .NET or full stack role? I'd like to hear about it.
            </p>
            <a
              href={`mailto:${profile.email}`}
              className="mt-5 inline-block rounded-md border border-accent px-5 py-3 text-[0.95rem] font-semibold break-all text-accent transition-colors hover:bg-accent/10"
            >
              {profile.email}
            </a>
            <dl className="mt-8 grid gap-3.5">
              {[
                ['Phone', profile.phone, `tel:${profile.phone.replace(/\s/g, '')}`],
                ['LinkedIn', 'View profile ↗', profile.linkedin],
                ['GitHub', 'github.com/RRamos777 ↗', profile.github],
                ['Résumé', 'Download PDF ↗', profile.resume],
                ['Location', profile.location],
              ].map(([label, value, href]) => (
                <div key={label} className="grid gap-0.5 border-b border-slate-400/10 pb-3.5 lg:grid-cols-[168px_1fr] lg:gap-4">
                  <dt className="text-sm font-semibold text-strong">{label}</dt>
                  <dd className="text-[0.94rem] break-words">
                    {href ? (
                      <a
                        href={href}
                        className="transition-colors hover:text-accent"
                        {...(href.startsWith('http') || href.endsWith('.pdf') ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
                      >
                        {value}
                      </a>
                    ) : (
                      value
                    )}
                  </dd>
                </div>
              ))}
            </dl>
            <p className="mt-4 text-sm text-muted">Full-time remote · Available for EST/PST, GMT and AEST overlap.</p>
          </Section>
        </main>
      </div>
    </>
  )
}
