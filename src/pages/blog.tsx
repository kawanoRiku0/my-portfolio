import React from "react";
import { motion } from "framer-motion";

export default function Blog() {
  return (
    <motion.div
      initial={{ x: "200%" }}
      animate={{ x: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className="h-screen bg-main-blue opacity-50"></div>
    </motion.div>
  );
}
