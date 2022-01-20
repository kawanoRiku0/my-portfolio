import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ scale: 0, borderRadius: "50%" }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ ease: "easeOut", duration: 1 }}
    >
      <div className="h-screen bg-main-green opacity-50"></div>
    </motion.div>
  );
}
