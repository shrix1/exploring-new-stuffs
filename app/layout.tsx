import { ThemeProvider } from "@/components/theme-provider"
import "./globals.css"
import type { Metadata } from "next"
import { Be_Vietnam_Pro } from "next/font/google"
import NavBar from "@/components/NavBar"
import Footer from "@/components/Footer"

const vietnamese = Be_Vietnam_Pro({
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"],
  subsets: ["latin-ext", "vietnamese"],
  style: "normal",
})

export const metadata: Metadata = {
  title: "Learning new Stuff",
  description: "Laeerning new Stuffs",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body className={vietnamese.className}>
        <ThemeProvider attribute="class" enableSystem defaultTheme="system">
          <NavBar />
          {children}
          <Footer />
        </ThemeProvider>
      </body>
    </html>
  )
}
