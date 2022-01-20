import React from "react";
import { motion } from "framer-motion";

export default function Contact() {
  return (
    <motion.div
      initial={{ y: "200%" }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className="h-screen bg-main-red opacity-50"></div>
    </motion.div>
  );
}
