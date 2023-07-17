"use client";
import Field from "@/components/Field";
import Section from "@/components/Section";
import React from "react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { z } from "zod";
import { FieldContextProvider } from "@/components/Field/context";
import { Button } from "@/components/Button";
import sendEmail from "@/utils/send-email";
const emailSchema = z.object({
  name: z.string(),
  email: z.string().email("Email Inválido"),
  message: z.string().min(5, "Mensagem tem de ter pelo menos 5 caracteres"),
});

export type EmailForm = z.infer<typeof emailSchema>;
export default function Contact() {
  const form = useForm<EmailForm>({
    resolver: zodResolver(emailSchema),
  });
  const onSubmit = ({ email, name, message }: EmailForm) => {
    window.location.href = sendEmail({
      email,
      name,
      message,
      reciverEmail: "valdemiroviegas@yahoo.com",
      subject: "YouCanLearn - Mensagem"
    })
  };
  return (
    <Section
    className="py-12"
      id="contact"
    >
        <h4 className="text-2xl font-bold text-primary mb-2">Contacte-nos</h4>
      
      <div className="grow flex items-center">
        <form
          className="w-full grid md:grid-cols-2 gap-4"
          onSubmit={form.handleSubmit(onSubmit)}
        >
          <FieldContextProvider form={form}>
            <Field id="name" placeholder="Name..." />
            <Field id="email" placeholder="Email..." />
            <Field
              id="message"
              placeholder="Message..."
              fieldType="textarea"
              fieldsetClassName="col-span-2"
            />
            <Button className="col-span-2">Enviar</Button>
          </FieldContextProvider>
        </form>
      </div>
    </Section>
  );
}
