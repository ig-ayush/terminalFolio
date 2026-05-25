export default function TerminalInput({ inputRef, input, setInput, booted }) {

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            // Handle command execution here
            setInput("");
        }
    }

    return (
        <>
            {booted && (
            <div className="input-block flex items-center gap-2 mt-2">
              <span className="text-[#00ff9d] font-semibold select-none whitespace-nowrap text-sm">
                {PROMPT}
              </span>
              <div className="flex-1 relative flex items-center">
                <span className="text-[#e2e8f0] text-sm break-all">{input}</span>
                <span
                  className={`inline-block w-[7px] h-[1em] bg-[#00ff9d] ml-0.5 transition-opacity duration-100 ${
                    showCursor ? "opacity-100" : "opacity-0"
                  }`}
                  style={{ verticalAlign: "text-bottom" }}
                />
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKeyDown}
                  className="absolute inset-0 opacity-0 w-full bg-transparent outline-none caret-transparent"
                  autoComplete="off"
                  autoCorrect="off"
                  autoCapitalize="off"
                  spellCheck="false"
                  aria-label="Terminal input"
                />
              </div>
            </div>
          )}
        </>
    )
}
