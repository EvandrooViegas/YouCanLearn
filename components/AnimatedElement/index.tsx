"use client"

import { motion, HTMLMotionProps } from "framer-motion"
import { HTMLAttributes, ReactElement, ReactHTML } from "react"

type Props<T extends keyof ReactHTML> = {
  children: React.ReactNode,
  element: T
} & HTMLAttributes<HTMLDivElement> & HTMLMotionProps<T>

export default function AnimatedElement<T extends keyof ReactHTML>(props: Props<T>) {
  const { children, element = "div", ...rest } = props
  // @ts-expect-error
  const Motion = motion[element]

  return (
    <Motion {...rest}>
      { children }
    </Motion>
  )
}