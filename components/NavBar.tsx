"use client"
import ThemeSelector from "@/components/ThemeSelector"
import useScroll from "@/lib/hooks/useScroll"
import React from "react"

const NavBar = () => {
  const scrolled = useScroll(50)

  return (
    <nav
      className={`w-full flex items-center justify-around p-4 sticky top-0 border-b
      ${
        scrolled
          ? "dark:bg-black/70 translate-y-[-100px] transition-transform duration-700 bg-white/70"
          : "bg-white dark:bg-black translate-y-0 transition-transform duration-700"
      } `}
    >
      <h1 className="text-xl font-medium">Shri</h1>
      <ThemeSelector />
    </nav>
  )
}

export default NavBar
