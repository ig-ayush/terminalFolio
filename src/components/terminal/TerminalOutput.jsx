import { motion } from "framer-motion";

export default function TerminalOutput({ output }) {
    return (
    <motion.div
      initial={{ opacity: 0, y: 6 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.25 }}
      className="mb-4"
    >
      {/* Command echo */}
      <div className="flex items-center gap-2 mb-2">
        <span className="text-[#00ff9d] font-semibold text-sm select-none">
          {output.prompt}
        </span>
        <span className="text-[#e2e8f0] text-sm">{output.cmd}</span>
      </div>
      {/* Output */}
      <div className="ml-0 text-sm leading-relaxed">
        {output.output}
      </div>
    </motion.div>
    )
}