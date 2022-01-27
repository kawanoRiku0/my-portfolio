import React from "react";

import { motion } from "framer-motion";

import { DefaultLayout } from "components/layouts/DefaultLayout";

export default function Works() {
  return (
    <motion.div
      initial={{ scaleX: 0 }}
      animate={{ scaleX: 1 }}
      exit={{ scaleX: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <DefaultLayout pageTitle="WORKS" pageColor="bg-main-yellow">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0 }}
          transition={{ delay: 1, duration: 0.5 }}
        >
          <div className="p-4 flex flex-wrap  max-w-5xl justify-around mx-auto after:content-[''] after:block after:w-[27%] after:m-1">
            <div className="aspect-square w-[27%] bg-gray-500 bg-opacity-50 m-1 my-3 text-center"></div>
          </div>
        </motion.div>
      </DefaultLayout>
    </motion.div>
  );
}
