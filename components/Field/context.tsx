"use client";

import { EmailForm } from "@/app/(pages)/Contact";
import { createContext, useContext } from "react";
import { UseFormReturn } from "react-hook-form";

export const FieldContext = createContext({} as UseFormReturn<EmailForm>);

type Props = {
  children: React.ReactNode;
  form: UseFormReturn<EmailForm>;
};
export const FieldContextProvider = (props: Props) => {
  const { children, form } = props;
  return (
    <FieldContext.Provider value={form}>
      {children}
    </FieldContext.Provider>
  );
};

export const useFieldContext = () => {
    return useContext(FieldContext)
}