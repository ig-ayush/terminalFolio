import { motion, AnimatePresence } from "framer-motion";
import {useState, useCallback} from "react";
import TerminalWindow from "./TerminalWindow";
import TerminalBody from "./TerminalBody";
import StatusBar from "./StatusBar";
import WelcomeBanner from "./WelcomeBanner";
import BootScreen from "./BootScreen";

function Terminal() {
    const [booted, setBooted] = useState(false);
    const inputRef = useState(null);
    const [history, setHistory] = useState([]);

    const handleBoot = useCallback(() => {
    setBooted(true);
    setTimeout(() => {
    inputRef.current?.focus();
    setHistory([{ id: Date.now(), prompt: "", cmd: "", output: <WelcomeBanner /> }]);
    }, 10);
  } , []);


  return (
    <div className="terminal min-h-screen bg-[#020905] flex justify-center items-center p-3 sm:p-5"
      style={{
        backgroundImage:
          "radial-gradient(ellipse at 30% 20%, #003d1a22 0%, transparent 60%), radial-gradient(ellipse at 70% 80%, #001a3322 0%, transparent 60%)",
      }}
      >
       <motion.div
        initial={{ opacity: 0, scale: 0.96, y: 20 }}
        animate={{ opacity: 1, scale: 1, y: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="main-body w-full max-w-4xl"
      > 

        {/* Boot Screen */}
        <AnimatePresence>{!booted && <BootScreen onDone={handleBoot} />}</AnimatePresence>.

      {/* Terminal Window */}
        <TerminalWindow />

        {/* Terminal Body */}
        <TerminalBody booted={booted} inputRef={inputRef} history={history} setHistory={setHistory} />

        {/* Status Bar */}
        <StatusBar />

      </motion.div>
    </div>
  );
}

export default Terminal;