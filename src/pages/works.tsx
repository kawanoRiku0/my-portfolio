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
      <div className="min-h-screen bg-main-yellow opacity-50">
        <div className=" pt-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0 }}
            transition={{ delay: 1, duration: 0.5 }}
          >
            <h1 className=" font-bold mx-auto container text-2xl p-5 text-white max-w-5xl md:text-4xl ">
              WORKS（近日公開）
            </h1>
            <div className="p-4 flex flex-wrap  max-w-5xl justify-around mx-auto after:content-[''] after:block after:w-[27%] after:m-1">
              <div className="aspect-square w-[27%] bg-gray-500 bg-opacity-50 m-1 my-3 text-center"></div>
            </div>
          </motion.div>
        </div>
      </div>
    </motion.div>
  );
}
