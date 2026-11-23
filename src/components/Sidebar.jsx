import { profile, sections } from '../data/content.js'
import { GitHubIcon, LinkedInIcon, MailIcon } from './Icons.jsx'

const socials = [
  { href: profile.github, label: 'GitHub', Icon: GitHubIcon, external: true },
  { href: profile.linkedin, label: 'LinkedIn', Icon: LinkedInIcon, external: true },
  { href: `mailto:${profile.email}`, label: 'Email', Icon: MailIcon },
]

export default function Sidebar({ active }) {
  return (
    <header className="pt-16 pb-8 lg:sticky lg:top-0 lg:flex lg:h-screen lg:w-[48%] lg:flex-col lg:justify-between lg:py-24">
      <div>
        <img
          src={profile.photo}
          alt={`Portrait of ${profile.name}`}
          width="88"
          height="88"
          className="mb-5 size-22 rounded-full border border-slate-400/15 object-cover grayscale"
        />
        <h1 className="text-4xl font-bold tracking-tight text-strong sm:text-5xl">
          <a href="/">{profile.name}</a>
        </h1>
        <p className="mt-3 text-lg font-medium text-strong">{profile.role}</p>
        <p className="mt-4 max-w-xs">{profile.tagline}</p>

        <nav aria-label="Sections" className="mt-14 hidden lg:block">
          <ul>
            {sections.map((id) => {
              const on = active === id
              return (
                <li key={id}>
                  <a href={`#${id}`} className="group flex items-center gap-4 py-2.5">
                    <span
                      className={`h-px transition-all ${on ? 'w-16 bg-strong' : 'w-8 bg-muted group-hover:w-16 group-hover:bg-strong'}`}
                    />
                    <span
                      className={`text-xs font-bold tracking-[0.12em] uppercase ${on ? 'text-strong' : 'text-muted group-hover:text-strong'}`}
                    >
                      {id}
                    </span>
                  </a>
                </li>
              )
            })}
          </ul>
        </nav>
      </div>

      <div className="mt-7">
        <p className="inline-flex items-center gap-2 text-sm text-strong">
          <span className="size-2 rounded-full bg-accent shadow-[0_0_0_4px_rgba(125,211,192,0.12)]" />
          {profile.status}
        </p>
        <ul className="mt-5 flex gap-5" aria-label="Links">
          {socials.map(({ href, label, Icon, external }) => (
            <li key={label}>
              <a
                href={href}
                aria-label={label}
                className="block text-body transition-colors hover:text-strong"
                {...(external ? { target: '_blank', rel: 'noopener noreferrer' } : {})}
              >
                <Icon />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </header>
  )
}
