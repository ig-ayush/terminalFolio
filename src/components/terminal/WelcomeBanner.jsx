function WelcomeBanner() {
  return (
    <div className="space-y-2">
      <pre className="text-[#00ff9d] text-[10px] sm:text-xs leading-tight font-mono select-none overflow-x-auto">
{` █████╗ ██╗   ██╗██╗   ██╗███████╗██╗  ██╗
██╔══██╗╚██╗ ██╔╝██║   ██║██╔════╝██║  ██║
███████║ ╚████╔╝ ██║   ██║███████╗███████║
██╔══██║  ╚██╔╝  ██║   ██║╚════██║██╔══██║
██║  ██║   ██║   ╚██████╔╝███████║██║  ██║
╚═╝  ╚═╝   ╚═╝    ╚═════╝ ╚══════╝╚═╝  ╚═╝`}
      </pre>
      <div className="flex flex-wrap gap-x-4 gap-y-1 text-xs">
        <span className="text-[#00e5ff]">Aspiring Full-Stack Developer</span>
        <span className="text-[#4a6b55]">·</span>
        <span className="text-[#6b7280]">Open-Source Enthusiast</span>
        <span className="text-[#4a6b55]">·</span>
        <span className="text-[#6b7280]">India 🇮🇳</span>
      </div>
      <div className="border-t border-[#1e3a2f] my-2" />
      <p className="text-[#6b7280] text-xs">
        Welcome! Type <span className="text-[#00e5ff] font-semibold">help</span> to see all
        commands, or start with <span className="text-[#00e5ff] font-semibold">about</span>.
      </p>
      <p className="text-[#2d5240] text-[10px]">
        Hint: Try <span className="text-[#4a6b55]">sudo hire ayush</span> 👀
      </p>
    </div>
  );
}

export default WelcomeBanner;