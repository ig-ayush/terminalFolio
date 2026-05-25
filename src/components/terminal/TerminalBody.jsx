import {useState, useRef} from "react";

export default function TerminalBody() {
    const [input, setInput] = useState("");
    const inputRef = useRef(null);
    const containerRef = useRef(null);
    const [history, setHistory] = useState([]);
    const [cmdHistory, setCmdHistory] = useState([]);
    const [historyIndex, setHistoryIndex] = useState(-1);
    

    return (
        <div
        ref={containerRef}
        // onClick={focusInput}
        className="terminal-body bg-[#0a160e] border border-[#1a3324] rounded-b-xl min-h-[70vh] max-h-[80vh] overflow-y-auto p-4 sm:p-5 cursor-text font-mono text-sm relative"
        style={{
            scrollbarWidth: "thin",
            scrollbarColor: "#1e3a2f transparent",
          }}
        >
            This is a terminal interface. You can type commands here.
        </div>
    )
}