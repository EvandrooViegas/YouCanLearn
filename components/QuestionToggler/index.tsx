"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IQuestion } from "@/types/IQuestion";
type Props = {
  question: IQuestion;
};

const exit = { height: 0, opacity: 0 };
const animate = { height: "auto", opacity: 1 };
const initial = { height: 0, opacity: 0 };

export default function QuestionToggler(props: Props) {
  const { question } = props;
  const [isToggled, setIsToggled] = useState(true);
  const onClick = () => setIsToggled(!isToggled);
  const icon = isToggled ? "+" : "-";
  if (!question) return null;
  return (
    <button
      onClick={onClick}
      className="text-start group cursor-pointer p-5 transition border border-zinc-300 selection:border-primary hover:border-primary  focus:border-primary outline-none border-dashed"
    >
      <h4 className=" text-xl text-neutral-600 group-hover:text-neutral-700">
        {icon} {question.text}
      </h4>
      <AnimatePresence>
        {!isToggled ? (
          <motion.p
            exit={exit}
            animate={animate}
            initial={initial}
            className="text-sm text-neutral-600 whitespace-pre-line"
          >
            {question.answer}
          </motion.p>
        ) : null}
      </AnimatePresence>
    </button>
  );
}
