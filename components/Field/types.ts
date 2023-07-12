


import { EmailForm } from "@/app/(pages)/Contact";
import {
  InputHTMLAttributes,
  SelectHTMLAttributes,
  TextareaHTMLAttributes,
} from "react";
import { ControllerRenderProps, Path, UseFormRegister, UseFormRegisterReturn } from "react-hook-form";

export type ISelectOption = {
  value: string;
  label: string;
};

export type FieldAttributes = InputHTMLAttributes<HTMLInputElement> &
  TextareaHTMLAttributes<HTMLTextAreaElement> &
  SelectHTMLAttributes<HTMLSelectElement>;

export type IInput = {
  fieldType?: "input";
} & InputHTMLAttributes<HTMLInputElement>;
export type ITextArea = {
  fieldType?: "textarea";
} & TextareaHTMLAttributes<HTMLTextAreaElement>;
export type ISelect = {
  fieldType?: "select";
  options: ISelectOption[];
} & SelectHTMLAttributes<HTMLSelectElement>;

export type IField = {
  id: Path<EmailForm>;
  
} & Partial<ControllerRenderProps<EmailForm>> & (IInput | ITextArea | ISelect) 
export type Props = {
  fieldsetClassName?: string
} & IField;



