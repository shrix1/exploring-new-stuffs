"use client"
import React, { useEffect, useState } from "react"

const useScroll: React.FC<number> = (maxScrollValue) => {
  const [scrolled, setScrolled] = useState(false)
  const [scrollValue, setScrollValue] = useState({
    currentY: 0,
    previousY: 0,
  })

  useEffect(() => {
    const handleScroll = () => {
      setScrollValue((prev) => ({
        currentY: window.scrollY,
        previousY: prev.currentY,
      }))
    }
    window.addEventListener("scroll", handleScroll)
    return () => window.removeEventListener("scroll", handleScroll)
  }, [scrollValue])

  useEffect(() => {
    if (
      scrollValue.currentY > maxScrollValue &&
      scrollValue.currentY > scrollValue.previousY
    ) {
      setScrolled(true)
    } else {
      setScrolled(false)
    }
  }, [scrollValue, maxScrollValue])

  return scrolled
}

export default useScroll
