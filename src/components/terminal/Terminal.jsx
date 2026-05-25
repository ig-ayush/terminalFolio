import { motion } from "framer-motion";
import {useState} from "react";
import TerminalWindow from "./TerminalWindow";
import TerminalBody from "./TerminalBody";
import StatusBar from "./StatusBar";

function Terminal() {
  const [booted, setBooted] = useState(true);

  return (
    <div className="terminal min-h-screen bg-[#020905] flex justify-center items-center p-3 sm:p-5"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 30% 20%, #003d1a22 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, #001a3322 0%, transparent 60%)",
      }}
      >
       <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={booted ? { opacity: 1, scale: 1, y: 0 } : { opacity: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="main-body w-full max-w-4xl"
        style={{
          filter: "drop-shadow(0 0 40px #00ff9d18)",
        }}
      > 
      {/* Terminal Window */}
        <TerminalWindow />

        {/* Terminal Body */}
        <TerminalBody />

        {/* Status Bar */}
        <StatusBar />

      </motion.div>
    </div>
  );
}

export default Terminal;