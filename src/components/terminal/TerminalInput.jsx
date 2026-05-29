import { useCallback, useState, useEffect, forwardRef } from "react";
import { COMMANDS } from "../commands/Commands";

const TerminalInput = forwardRef(({
  input,
  setInput,
  booted,
  cmdHistory,
  setCmdHistory,
  historyIdx,
  setHistoryIdx,
  setHistory,
}, ref) => {  

  const [showCursor, setShowCursor] = useState(true);

  // Blinking Cursor
  useEffect(() => {
    const t = setInterval(() => setShowCursor((s) => !s), 530);
    return () => clearInterval(t);
  }, []);

  const PROMPT = "ayush@terminalfolio:~$";

  const runCommand = useCallback((raw) => {
    const cmd = raw.trim().toLowerCase();
    if (!cmd) return;

    setCmdHistory((h) => [raw, ...h]);
    setHistoryIdx(-1);

    if (cmd === "clear") {
      setHistory([]);
      return;
    }

    const handler = COMMANDS[cmd];
    const output = handler ? (
      handler()
    ) : (
      <div>
        <p className="text-[#ff5f5f]">
          bash: <span className="font-semibold">{cmd}</span>: command not found
        </p>
        <p className="text-[#6b7280] text-xs mt-1">
          Type <span className="text-[#00e5ff]">help</span> to see available commands.
        </p>
      </div>
    );

    setHistory((h) => [
      ...h,
      { id: Date.now() + Math.random(), prompt: PROMPT, cmd: raw, output },
    ]);
  }, [setCmdHistory, setHistoryIdx, setHistory]);

  const onKeyDown = (e) => {
    if (e.key === "Enter") {
      runCommand(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      const next = Math.min(historyIdx + 1, cmdHistory.length - 1);
      setHistoryIdx(next);
      setInput(cmdHistory[next] ?? "");
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      const next = Math.max(historyIdx - 1, -1);
      setHistoryIdx(next);
      setInput(next === -1 ? "" : cmdHistory[next] ?? "");
    } else if (e.key === "Tab") {
      e.preventDefault();
      const match = Object.keys(COMMANDS).find((c) => c.startsWith(input.toLowerCase()));
      if (match) setInput(match);
    }
  };

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
              ref={ref}                  
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
  );
});

export default TerminalInput;