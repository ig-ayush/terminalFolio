import { useState, useRef, useEffect } from "react";
import TerminalOutput from "./TerminalOutput";
import TerminalInput from "./TerminalInput";

export default function TerminalBody({ booted, inputRef, history, setHistory }) {
  const [input, setInput] = useState("");
  const [cmdHistory, setCmdHistory] = useState([]);
  const [historyIdx, setHistoryIdx] = useState(-1);
  const bottomRef = useRef(null);
  const containerRef = useRef(null);

  // Auto-scroll
  useEffect(() => {
    bottomRef.current?.scrollIntoView({ behavior: "smooth" });
  }, [history]);

  // Focus input when clicking anywhere in terminal body
  const focusInput = () => {
    inputRef.current?.focus();
  };

  return (
    <div
      ref={containerRef}
      onClick={focusInput}
      className="terminal-body bg-[#0a160e] border border-[#1a3324] rounded-b-xl min-h-[70vh] max-h-[80vh] overflow-y-auto p-4 sm:p-5 cursor-text font-mono text-sm relative"
      style={{
        scrollbarWidth: "thin",
        scrollbarColor: "#1e3a2f transparent",
      }}
    >
      <div className="output-block space-y-1">
        {history.map((output) => (
          <TerminalOutput key={output.id} output={output} />
        ))}
      </div>

      <TerminalInput
        ref={inputRef}
        input={input}
        setInput={setInput}
        booted={booted}
        cmdHistory={cmdHistory}
        setCmdHistory={setCmdHistory}
        historyIdx={historyIdx}
        setHistoryIdx={setHistoryIdx}
        setHistory={setHistory}
        history={history}
      />

      <div ref={bottomRef} />
    </div>
  );
}