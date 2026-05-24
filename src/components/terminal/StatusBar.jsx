export default function StatusBar() {
    return (
        <div className="ter-footer bg-[#061009] border border-[#1a3324] border-t-0 rounded-b-xl px-4 py-1.5 flex items-center justify-between text-[10px] font-mono text-[#2d5240] mt-[-2px]">
          <div className="flex items-center gap-3">
            <span className="text-[#00ff9d] flex items-center gap-1">
              <span className="w-1.5 h-1.5 rounded-full bg-[#00ff9d] inline-block animate-pulse" />
              CONNECTED
            </span>
            <span>zsh 5.9</span>
            <span>UTF-8</span>
          </div>
          <div className="flex items-center gap-3">
            <span>LF</span>
            <span>{new Date().toLocaleTimeString("en-IN", { hour: "2-digit", minute: "2-digit" })}</span>
          </div>
        </div>
    )
}