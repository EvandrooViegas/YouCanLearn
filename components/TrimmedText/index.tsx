"use client";
import trimString, { IOptions } from "@/utils/trim-string";
import React, { useState } from "react";

type Props = {
  string: string | null;
  options?: IOptions;
  showReadMoreButton?: boolean;
} & React.HTMLAttributes<HTMLDivElement>

const defaultProps:Props = {
    string: "",
    showReadMoreButton: true
}

export default function TrimmedText(props: Props) {
  const { options, string, showReadMoreButton, className, ...rest } = { ...defaultProps, ...props  };
  const [isTrimmed, setIsTrimmed] = useState(true);
  if(!string) return null
  const trimmedText = trimString(string);
  return (
    <div className={`flex flex-col gap-2 text-xs  ${className}`} {...rest}>
      <p>{isTrimmed ? trimmedText : string}</p>
      {showReadMoreButton ? (
        <button onClick={() => setIsTrimmed(!isTrimmed)}>
          Ler {isTrimmed ? "mais" : "menos"}
        </button>
      ) : null}
    </div>
  );
}
