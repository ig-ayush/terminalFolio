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

}

export {COMMANDS};