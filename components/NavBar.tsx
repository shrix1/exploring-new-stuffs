"use client"
import ThemeSelector from "@/components/ThemeSelector"
import useScroll from "@/lib/hooks/useScroll"
import React from "react"
import { Button } from "@/components/ui/button"
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"
import { ArrowTopRightIcon } from "@radix-ui/react-icons"
import Link from "next/link"

const NavBar = () => {
  const scrolled = useScroll(50)

  const routes = [{ name: "hoverCard", path: "/hovercard" }]

  return (
    <nav
      className={`w-full flex items-center z-10 justify-around p-4 sticky top-0 border-b
      ${
        scrolled
          ? "dark:bg-black/70 translate-y-[-100px] transition-transform duration-700 bg-white/70"
          : "bg-white dark:bg-black translate-y-0 transition-transform duration-700"
      } `}
    >
      <h1 className="text-xl font-medium">
        <Link href="/">
          Code by{" "}
          <span className="text-blue-500 font-semibold underline">Shri</span>
        </Link>
      </h1>
      <section className="flex justify-center items-center gap-3">
        <DropdownMenu>
          <DropdownMenuTrigger asChild>
            <Button variant="outline">
              Routes <ArrowTopRightIcon className="w-4 h-4" />
            </Button>
          </DropdownMenuTrigger>
          <DropdownMenuContent align="end">
            {routes.map((r) => (
              <DropdownMenuItem key={r.name}>
                <Link href={r.path}> {r.name}</Link>
              </DropdownMenuItem>
            ))}
          </DropdownMenuContent>
        </DropdownMenu>
        <ThemeSelector />
      </section>
    </nav>
  )
}

export default NavBar
