import { useCallback, useState, useEffect } from "react";
import { COMMANDS } from "../commands/Commands";
import { colgroup } from "framer-motion/client";
export default function TerminalInput({ inputRef, input, setInput, booted, cmdHistory, setCmdHistory, historyIdx, setHistoryIdx, setHistory }) {
    const [showCursor, setShowCursor] = useState(true);

    // cursor
    useEffect(() => {
        const t = setInterval(() => setShowCursor((s) => !s), 530);
    return () => clearInterval(t);
    }, []);

    const PROMPT = "ayush@terminalfolio:~$";

    const runCommand = useCallback(
    (raw) => {
      const cmd = raw.trim().toLowerCase();
      if (!cmd) return;

      // Save to command history
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
    },
    []
  );

    const onKeyDown = (e) => {
        if (e.key === "Enter") {
            console.log("Running command:", input);
            runCommand(input);
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
