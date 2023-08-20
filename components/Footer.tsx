import { GitHubLogoIcon } from "@radix-ui/react-icons"
import Link from "next/link"
import React from "react"

const Footer = () => {
  return (
    <section className="w-full p-5 flex justify-center items-center">
      <h1 className="text-lg flex items-center gap-2">
        Crafted by{" "}
        <Link
          href="https://github.com/shrix1"
          target="_blank"
          className="underline flex items-center gap-1"
        >
          Shriprasanna
          <GitHubLogoIcon className="w-4 h-5" />
        </Link>
      </h1>
    </section>
  )
}

export default Footer
