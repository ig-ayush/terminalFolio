import {PORTFOLIO} from "./Portfolio";

const GREEN = "text-[#00ff9d]";
const CYAN = "text-[#00e5ff]";
const YELLOW = "text-[#ffd200]";
const ORANGE = "text-[#ff9d00]";
const PINK = "text-[#ff5fa0]";
const DIM = "text-[#6b7280]";
const WHITE = "text-[#e2e8f0]";


const HR = () => <div className="border-t border-[#1e3a2f] my-2 opacity-60" />;

const Tag = ({ children, color = "text-[#00ff9d]" }) => (
  <span className={`border border-current ${color} px-1.5 py-0.5 text-[10px] rounded font-mono mr-1 mb-1 inline-block`}>
    {children}
  </span>
);

const Link = ({ href, children }) => (
  <a
    href={href}
    target="_blank"
    rel="noopener noreferrer"
    className="text-[#00e5ff] underline underline-offset-2 hover:text-[#00ff9d] transition-colors"
  >
    {children}
  </a>
);


const COMMANDS = {

     help: () => (
    <div className="space-y-1">
      <p className={`${GREEN} font-bold mb-2`}>╔═══ Available Commands ═══╗</p>
      {[
        ["help", "List all available commands"],
        ["about", "Who is Ayush?"],
        ["education", "Academic background"],
        ["skills", "Technical skill set"],
        ["projects", "Featured projects"],
        ["experience", "Work & internship history"],
        ["certificates", "Certifications earned"],
        ["contact", "Get in touch"],
        ["socials", "Social & professional links"],
        ["resume", "View / download resume"],
        ["clear", "Clear terminal output"],
        ["whoami", "???"],
      ].map(([cmd, desc]) => (
        <div key={cmd} className="flex gap-3 items-start">
          <span className={`${CYAN} min-w-25 font-semibold`}>{cmd}</span>
          <span className={DIM}>→ {desc}</span>
        </div>
      ))}
      <HR />
      <p className={`${DIM} text-xs`}>Tip: Use ↑ / ↓ to navigate command history</p>
    </div>
  ),

  about: () => (
    <div className="space-y-3">
      <div className={`${GREEN} text-lg font-bold`}>
        ██╗  ██╗██╗   ██╗███████╗██╗  ██╗
      </div>
      <div className="space-y-1">
        <p>
          <span className={`${CYAN} font-semibold`}>Name        </span>
          <span className={WHITE}>{PORTFOLIO.name}</span>
        </p>
        <p>
          <span className={`${CYAN} font-semibold`}>Role        </span>
          <span className={YELLOW}>{PORTFOLIO.role}</span>
        </p>
        <p>
          <span className={`${CYAN} font-semibold`}>Location    </span>
          <span className={WHITE}>{PORTFOLIO.location}</span>
        </p>
      </div>
      <HR />
      <p className={`${WHITE} leading-relaxed max-w-xl`}>{PORTFOLIO.bio}</p>
      <p className={`${DIM} text-xs mt-1`}>
        Type <span className={CYAN}>skills</span> or <span className={CYAN}>projects</span> to explore further.
      </p>
    </div>
  ),

    education: () => (
    <div className="space-y-2">
      <p className={`${GREEN} font-bold`}>▶ Education</p>
      <HR />
      <p>
        <span className={`${CYAN} font-semibold`}>Degree    </span>
        <span className={YELLOW}>{PORTFOLIO.education.degree}</span>
      </p>
      <p>
        <span className={`${CYAN} font-semibold`}>Institute </span>
        <span className={WHITE}>{PORTFOLIO.education.college}</span>
      </p>
      <p>
        <span className={`${CYAN} font-semibold`}>Graduated </span>
        <span className={WHITE}>{PORTFOLIO.education.year}</span>
      </p>
      <p>
        <span className={`${CYAN} font-semibold`}>Details   </span>
        <span className={DIM}>{PORTFOLIO.education.details}</span>
      </p>
    </div>
  ),


  skills: () => (
    <div className="space-y-3">
      <p className={`${GREEN} font-bold`}>▶ Technical Skills</p>
      <HR />
      {Object.entries(PORTFOLIO.skills).map(([category, items]) => (
        <div key={category}>
          <p className={`${CYAN} font-semibold mb-1`}>[{category}]</p>
          <div className="flex flex-wrap gap-1 ml-2">
            {items.map((s) => (
              <Tag key={s} color={
                category === "Frontend" ? "text-[#00ff9d]" :
                category === "Backend" ? "text-[#00e5ff]" :
                category === "Database" ? "text-[#ffd200]" : "text-[#ff9d00]"
              }>{s}</Tag>
            ))}
          </div>
        </div>
      ))}
    </div>
  ),

  projects: () => (
    <div className="space-y-4">
      <p className={`${GREEN} font-bold`}>▶ Featured Projects</p>
      <HR />
      {PORTFOLIO.projects.map((p, i) => (
        <div key={i} className="border border-[#1e3a2f] rounded-lg p-3 bg-[#050f0a]/60 hover:border-[#00ff9d]/40 transition-colors">
          <div className="flex items-center gap-2 mb-1">
            <span className={`${GREEN} font-bold`}>{String(i + 1).padStart(2, "0")}.</span>
            <span className={`${YELLOW} font-semibold text-sm`}>{p.title}</span>
          </div>
          <p className={`${WHITE} text-xs leading-relaxed mb-2 ml-6`}>{p.description}</p>
          <div className="flex flex-wrap gap-1 ml-6 mb-2">
            {p.tech.map((t) => <Tag key={t}>{t}</Tag>)}
          </div>
          <div className="flex gap-4 ml-6 text-xs">
            <Link href={p.github}>⌥ GitHub</Link>
            <Link href={p.demo}>⌘ Live Demo</Link>
          </div>
        </div>
      ))}
    </div>
  ),

  experience: () => (
    <div className="space-y-3">
      <p className={`${GREEN} font-bold`}>▶ Work Experience</p>
      <HR />
      {PORTFOLIO.experience.map((e, i) => (
        <div key={i} className="relative pl-4 border-l border-[#1e3a2f]">
          <div className="absolute left-1.25 top-1.5 w-2 h-2 rounded-full bg-[#00ff9d]" />
          <p className={`${YELLOW} font-semibold text-sm`}>{e.role}</p>
          <p className={`${CYAN} text-xs`}>{e.company} <span className={DIM}>· {e.period}</span></p>
          <p className={`${WHITE} text-xs mt-1 leading-relaxed`}>{e.desc}</p>
          {i < PORTFOLIO.experience.length - 1 && <div className="mt-3" />}
        </div>
      ))}
    </div>
  ),

  certificates: () => (
    <div className="space-y-2">
      <p className={`${GREEN} font-bold`}>▶ Certifications</p>
      <HR />
      {PORTFOLIO.certificates.map((c, i) => (
        <div key={i} className="flex items-start gap-3">
          <span className={`${GREEN} mt-0.5`}>◆</span>
          <div>
            <p className={`${YELLOW} text-sm font-semibold`}>{c.title}</p>
            <p className={`${DIM} text-xs`}>{c.org} · {c.year}</p>
          </div>
        </div>
      ))}
    </div>
  ),

  contact: () => (
    <div className="space-y-2">
      <p className={`${GREEN} font-bold`}>▶ Contact Information</p>
      <HR />
      <p><span className={`${CYAN} font-semibold`}>Email     </span><Link href={`mailto:${PORTFOLIO.email}`}>{PORTFOLIO.email}</Link></p>
      <p><span className={`${CYAN} font-semibold`}>Phone     </span><span className={WHITE}>{PORTFOLIO.phone}</span></p>
      <p><span className={`${CYAN} font-semibold`}>Location  </span><span className={WHITE}>{PORTFOLIO.location}</span></p>
    </div>
  ),

  socials: () => (
    <div className="space-y-2">
      <p className={`${GREEN} font-bold`}>▶ Social Links</p>
      <HR />
      {Object.entries(PORTFOLIO.socials).map(([platform, url]) => (
        <p key={platform}>
          <span className={`${CYAN} font-semibold min-w-[90px] inline-block`}>{platform}</span>
          <Link href={url}>{url}</Link>
        </p>
      ))}
    </div>
  ),

  resume: () => (
    <div className="space-y-2">
      <p className={`${GREEN} font-bold`}>▶ Resume</p>
      <HR />
      <p className={WHITE}>Opening resume in a new tab...</p>
      <p><Link href="#">📄 ayush_resume_2024.pdf</Link></p>
      <p className={`${DIM} text-xs`}>If the download doesn't start, click the link above.</p>
    </div>
  ),

  whoami: () => (
    <div>
      <p className={GREEN}>root@universe:~$ whoami</p>
      <p className={WHITE}>A curious developer who turns caffeine into commits.</p>
      <p className={CYAN}>uid=1337(ayush) gid=1337(developer) groups=1337(developer),0(root),42(hackers)</p>
    </div>
  )

}

export {COMMANDS};