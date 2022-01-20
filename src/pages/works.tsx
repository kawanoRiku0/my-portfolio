import React from "react";
import { motion } from "framer-motion";

export default function Works() {
  return (
    <motion.div
      initial={{ scale: 0, rotate: "360deg" }}
      animate={{ scale: 1, rotate: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className="h-screen bg-main-yellow opacity-50"></div>
    </motion.div>
  );
}
