"use client";

import { IField, Props } from "./types";
import FieldComp from "./Field";
import { useFieldContext } from "./context";
import { Controller } from "react-hook-form";

const propsDefaults = {
  fieldType: "input",
} as Partial<Props>;

export default function Field(props: Props) {
  const { className, id, fieldsetClassName, ...rest } = { ...propsDefaults, ...props };
  const {
    control,
    formState: { errors },
  } = useFieldContext();
  const fieldAttr = {
    ...rest,
    className: `
    w-full transition px-6 py-4
    bg-transparent border-transparent outline-none 
    border-b border-zinc-300 placeholderdlder:text-neutral-200 text-black  
    focus:border-primary bg-neutral-200 focus:bg-neutral-300  ${className}
    `,
  } as IField;
  const error = errors?.[id]?.message;
  return (
    <fieldset className={fieldsetClassName}>
      <Controller
        name={id}
        control={control}
        render={({ field }) => <FieldComp {...field} {...fieldAttr} id={id} />}
      />
      {error ? <p className="text-sm text-red-400">{error}</p> : null}
    </fieldset>
  );
}