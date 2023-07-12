"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { IQuestion } from "@/types/IQuestion";
type Props = {
  question: IQuestion;
};
export default function QuestionToggler(props: Props) {
  const { question } = props;
  const [isToggled, setIsToggled] = useState(true);
  if (!question) return null;
  return (
    <div
      onClick={() => setIsToggled(!isToggled)}
      className="cursor-pointer p-5 transition border border-border-primary hover:border-border-primary-hover  border-dashed"
    >
      <h4 className="text-2xl">
        {isToggled ? "+" : "-"} {question.text}
      </h4>
      <AnimatePresence>
        {isToggled ? null : (
          <motion.p
            exit={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            initial={{ height: 0, opacity: 0 }}
            className="text-sm text-neutral-200"
          >
            {question.answer}
          </motion.p>
        )}
      </AnimatePresence>
    </div>
  );
}
