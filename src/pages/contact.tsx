import React from "react";

import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

import { ContactForm } from "components/case/molecules/ContactForm";

export default function Contact() {
  return (
    <div className="h-screen overflow-y-hidden">
      {/* emailJS送信中、送信後に表示するトースター */}
      <Toaster />
      <motion.div
        initial={{ y: "100%" }}
        animate={{ y: 0 }}
        exit={{ y: "100%" }}
        transition={{ ease: "easeOut", duration: 0.5 }}
      >
        <div className="h-screen relative">
          <div className=" pt-20 ">
            <h2 className=" text-center p-3 font-bold text-4xl">
              お問い合わせ
            </h2>
            <div className="w-full max-w-xl p-4 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
              <ContactForm />
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}
