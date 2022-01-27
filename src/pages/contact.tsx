import React from "react";

import { motion } from "framer-motion";
import { Toaster } from "react-hot-toast";

import { ContactForm } from "components/case/molecules/ContactForm";
import { DefaultLayout } from "components/layouts/DefaultLayout";

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
        <DefaultLayout pageTitle="CONTACT" titleColor="text-black">
          <div className="w-full max-w-xl p-4 absolute top-1/2 -translate-y-1/2 left-1/2 -translate-x-1/2">
            <ContactForm />
          </div>
        </DefaultLayout>
      </motion.div>
    </div>
  );
}
