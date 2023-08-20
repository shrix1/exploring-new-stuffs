"use client"
import React from "react"
import { motion as m, useMotionTemplate, useMotionValue } from "framer-motion"
import { Button } from "@/components/ui/button"
import { cn } from "@/lib/utils"

type CardProps = {
  className: string
  grad: string
  children?: React.ReactNode
}

const Card: React.FC<CardProps> = ({ className, grad, children }) => {
  // y? framer-motion => to avoid render and fm provide 60fps animation
  const x = useMotionValue(0)
  const y = useMotionValue(0)

  const handleMouseMove = ({
    currentTarget,
    clientX,
    clientY,
  }: React.MouseEvent) => {
    const { left, top } = currentTarget.getBoundingClientRect()
    // getBoundingClientRect() returns the size of an element and its position relative to the viewport.

    // sub it to get the relative position of the mouse
    x.set(clientX - left)
    y.set(clientY - top)
  }

  return (
    <section
      className={cn(
        "w-[350px] relative h-64 rounded-xl border dark:bg-black border-gray-300 group shadow-2xl",
        className
      )}
      onMouseMove={handleMouseMove}
    >
      <m.div
        className="absolute z-0 pointer-events-none -inset-px rounded-xl opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          // useMotionTemp => x and y is obj type of if we wrap with this hook it will convert to string
          background: useMotionTemplate`radial-gradient(
            200px circle at ${x}px ${y}px,
            ${grad}, transparent 80%`,
        }}
      />
      <section className="flex relative z-5 px-8 py-10 flex-col justify-between h-full">
        {children}
      </section>
    </section>
  )
}

export default Card
