import React from "react";
import { motion } from "framer-motion";
import ContactForm from "components/organisms/form/ContactForm";

export default function Contact() {
  return (
    <motion.div
      initial={{ y: "200%" }}
      animate={{ y: 0 }}
      exit={{ opacity: 0 }}
      transition={{ ease: "easeOut", duration: 0.5 }}
    >
      <div className="h-screen relative">
        <div className=" pt-20 ">
          <h2 className=" p-3 font-bold text-4xl">お問い合わせ</h2>
          <div className="w-full max-w-xl p-4 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <ContactForm />
          </div>
        </div>
      </div>
    </motion.div>
  );
}
