import { ICourse } from "@/types/ICourse";
import React from "react";
import TrimmedText from "../TrimmedText";

type Props = {
  course: ICourse;
};
export default function Course(props: Props) {
  const { course } = props;
  if (!course) return null;
  return (
    <div className="px-4 py-4 transition flex flex-col gap-2 cursor-pointer border border-dashed border-border-primary hover:border-border-primary-hover">
      <h2 className="text-2xl text-neutral-300">{course.name}</h2>
      <TrimmedText
        string={course.description}
        showReadMoreButton={false}
        className="text-neutral-400"
      />
    </div>
  );
}
