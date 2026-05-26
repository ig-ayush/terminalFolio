import { motion } from "framer-motion";
import { useState, useEffect } from "react";

const BOOT_LINES = [
  { text: "BIOS v2.4.1 — POST check passed ✓", delay: 0 },
  { text: "Mounting /dev/portfolio...", delay: 400 },
  { text: "Loading kernel modules: [react] [tailwind] [framer-motion]", delay: 900 },
  { text: "Initializing portfolio engine v3.1.0...", delay: 1400 },
  { text: "Fetching projects from remote... done (4 projects)", delay: 1900 },
  { text: "Loading skill matrix... done", delay: 2300 },
  { text: "Configuring SSH keys... skipped (no firewall needed 😎)", delay: 2700 },
  { text: "Running diagnostics... 0 errors found ✓", delay: 3200 },
  { text: "", delay: 3600 },
  { text: "███████████████████████████████ 100%", delay: 3700 },
  { text: "", delay: 4000 },
  { text: "✦ ACCESS GRANTED ✦", delay: 4100, highlight: true },
];

function BootScreen({ onDone }) {
  const [visibleLines, setVisibleLines] = useState([]);
  const [done, setDone] = useState(false);

  useEffect(() => {
    const timers = BOOT_LINES.map((line, i) =>
      setTimeout(() => {
        setVisibleLines((prev) => [...prev, line]);
        if (i === BOOT_LINES.length - 1) {
          setTimeout(() => setDone(true), 700);
          setTimeout(onDone, 1000);
        }
      }, line.delay)
    );
    return () => timers.forEach(clearTimeout);
  }, [onDone]);

  return (
    <motion.div
      className="fixed inset-0 bg-[#030a06] flex items-center justify-center z-50 p-6"
      animate={done ? { opacity: 0 } : { opacity: 1 }}
      transition={{ duration: 0.6 }}
    >
      <div className="w-full max-w-xl font-mono text-sm space-y-1">
        {visibleLines.map((line, i) => (
          <motion.p
            key={i}
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
            className={
              line.highlight
                ? "text-[#00ff9d] font-bold text-base tracking-widest text-center mt-2"
                : line.text === ""
                ? "h-2"
                : "text-[#4ade80]"
            }
          >
            {line.text}
          </motion.p>
        ))}
        {visibleLines.length > 0 && !done && (
          <span className="inline-block w-2 h-4 bg-[#00ff9d] animate-pulse ml-1" />
        )}
      </div>
    </motion.div>
  );
}

export default BootScreen;