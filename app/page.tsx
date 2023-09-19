import { HeroScrollPreview } from "@/components/AnimateCard"

export default function Home() {
  return (
    <main className="px-32 flex flex-col">
      {/* {Array.from({ length: 10 }).map((_, i) => (
        <div key={i}>
          <h1 className="text-5xl capitalize mb-6 font-medium">hello check</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            corporis, ut modi accusantium impedit doloremque esse quisquam
            numquam nihil aliquam ea ducimus in dolores officiis at itaque
            voluptatum omnis recusandae!
          </p>
        </div>
      ))} */}
      <div className="text-center text-6xl font-semibold pt-20">
        Idk title Goes here <br />{" "}
        <span className="font-bold text-sky-500"> Exemplary AI</span>
      </div>
      <HeroScrollPreview />
    </main>
  )
}
