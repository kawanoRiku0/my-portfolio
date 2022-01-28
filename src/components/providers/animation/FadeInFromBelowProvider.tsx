import { motion, useAnimation } from "framer-motion";
import { FC, ReactNode, useEffect } from "react";
import { useInView } from "react-intersection-observer";

type Props = {
  children: ReactNode;
};

export const FadeInFromBelowProvider: FC<Props> = ({ children }) => {
  const control = useAnimation();
  const { ref, inView } = useInView();

  useEffect(() => {
    // 要素が画面に入ってきたタイミングでフェードイン
    if (inView) {
      control.start("visible");
    }
  });

  const fadeInFromBelowVariant = {
    hidden: { y: 50, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        duration: 0.5,
        delay: 0.8,
      },
    },
  };

  return (
    <motion.div
      ref={ref}
      animate={control}
      initial="hidden"
      variants={fadeInFromBelowVariant}
    >
      {children}
    </motion.div>
  );
};
