import React from "react";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <motion.div
      initial={{ scale: 0, borderRadius: "50%" }}
      animate={{ scale: 1 }}
      exit={{ scale: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className=" relative h-screen bg-main-green opacity-50 ">
        <div className="absolute top-1/3 left-1/2 -translate-x-1/2  text-white space-y-2 md:space-y-8">
          <h2 className=" text-[40px] md:text-7xl opacity-90 font-Pacifico">
            KawanoRiku
          </h2>
          <p className="text-center text-2xl md:text-4xl font-serif">
            WEB&nbsp;DEVELOPER
          </p>
        </div>
      </div>
    </motion.div>
  );
}
