import { motion } from "framer-motion";
import {useState} from "react";

export default function TerminalWindow() {
  
  return (
   <div className="nav-title bg-[#0e1f14] rounded-t-xl border border-[#1a3324] border-b-0">
          {/* Title bar */}
          <div className="flex items-center justify-between px-4 py-3">
            {/* Traffic lights */}
            <div className="flex gap-2">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56] hover:opacity-80 cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e] hover:opacity-80 cursor-pointer" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f] hover:opacity-80 cursor-pointer" />
            </div>
            {/* Title */}
            <span className="text-[#4a6b55] text-xs font-mono tracking-widest">
              ayushacharya@portfolio — zsh — 120×40
            </span>
            {/* Spacer */}
            <div className="w-14" />
          </div>
          {/* Tabs bar */}
          <div className="flex items-end px-4 gap-1 border-t border-[#1a3324]">
            <div className="px-3 py-1.5 bg-[#0a160e] border border-[#1a3324] border-b-0 rounded-t text-[#00ff9d] text-xs font-mono">
              ~
            </div>
            <div className="px-3 py-1.5 text-[#4a6b55] text-xs font-mono hover:text-[#00ff9d] cursor-pointer transition-colors">
              +
            </div>
          </div>
    </div>
  );
}