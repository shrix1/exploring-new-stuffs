import React from "react"
import Card from "./Card"
import { Button } from "@/components/ui/button"

const Page = () => {
  return (
    <main className="p-10">
      <h1 className="mb-6 text-xl underline underline-offset-[5px] decoration-blue-400 decoration-wavy">
        Hover radial grad
      </h1>

      <section className="flex gap-10 flex-wrap">
        <Card
          className="bg-white hover:scale-105 transition-transform duration-300"
          grad="rgba(0,90,255,0.2)"
        >
          <>
            <div className="space-y-3">
              <h1 className="text-xl underline font-bold tracking-wide text-blue-500">
                Shrix1
              </h1>
              <p className="text-black dark:text-white">
                software development Engg @exemplaryai
              </p>
            </div>
            <Button variant="outline">Hire me</Button>
          </>
        </Card>

        <Card
          className="bg-violet-500 hover:-translate-y-2 transition-transform duration-300"
          grad="rgba(178,102,255)"
        >
          <>
            <div className="space-y-3">
              <h1 className="text-xl underline font-bold tracking-wide text-white">
                Exemplaryai
              </h1>
              <p className="text-white dark:text-white">
                The best place to work
              </p>
            </div>
            <Button
              variant="outline"
              className="text-white hover:bg-violet-400"
            >
              Learn more
            </Button>
          </>
        </Card>

        <Card className="bg-white" grad="rgba(178,102,255,0.2)">
          <>
            <div className="space-y-3">
              <h1 className="text-xl underline font-bold tracking-wide text-violet-500">
                EemplaryAi
              </h1>
              <p className="text-black dark:text-white">Startup to unicorn</p>
            </div>
            <Button variant="outline">Sheesh!</Button>
          </>
        </Card>
      </section>
    </main>
  )
}

export default Page
