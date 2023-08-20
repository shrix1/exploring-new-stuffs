import React from "react"
import Card from "./Card"
import { Button } from "@/components/ui/button"

const Page = () => {
  return (
    <main className="p-10">
      <h1 className="mb-6 text-center text-xl underline underline-offset-[5px] decoration-blue-400 decoration-wavy">
        Hover radial grad
      </h1>

      <section className="grid grid-cols-1 w-full gap-5 lg:grid-cols-3 place-items-center">
        <Card
          className="bg-white border-blue-500 hover:scale-105 transition-transform duration-300"
          grad="rgba(0,90,255,0.4)"
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
            <Button>Hire me</Button>
          </>
        </Card>

        <Card
          className="bg-blue-500 overflow-hidden border-blue-500 hover:scale-105 transition-transform duration-300
          hover:ring-2 hover:ring-blue-500 hover:ring-offset-2"
          grad="rgba(255,255,255,0.3)"
        >
          <>
            <div
              className="absolute transform -translate-x-[500px] rotate-45
             group-hover:translate-x-[550px] inset-0 ease-out transition-transform delay-75 duration-1000
             w-16 h-screen -mt-[300px] bg-white/20"
            />
            <div className="space-y-3">
              <h1 className="text-xl underline font-bold tracking-wide text-white">
                Shrix1
              </h1>
              <p className="text-white">
                software development Engg @exemplaryai
              </p>
            </div>
            <Button variant="secondary">Hire me</Button>
          </>
        </Card>

        <Card
          className="bg-violet-500 dark:bg-violet-500 hover:-translate-y-2 transition-transform duration-300"
          // grad="rgba(178,102,255 , 0.8)"
          grad="rgba(255,255,255,0.4)"
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
            <Button variant="secondary" className="hover:bg-violet-400">
              Learn more
            </Button>
          </>
        </Card>

        <Card
          className="bg-black border-violet-600 overflow-hidden hover:ring-2 hover:ring-violet-700 hover:ring-offset-2 hover:scale-105 transition-transform duration-300"
          grad="rgba(178,102,255,0.5)"
        >
          <>
            <div
              className="absolute transform -translate-x-[500px] rotate-45
             group-hover:translate-x-[550px] inset-0 ease-out transition-transform delay-75 duration-1000
             w-16 h-screen -mt-[300px] bg-white/20"
            />
            <div className="space-y-3">
              <h1 className="text-xl underline font-bold tracking-wide text-violet-500">
                EemplaryAi
              </h1>
              <p className="text-white">Startup to unicorn</p>
            </div>
            <Button className="bg-violet-600 hover:bg-violet-700 hover:text-white">
              Sheesh!
            </Button>
          </>
        </Card>
      </section>
    </main>
  )
}

export default Page
