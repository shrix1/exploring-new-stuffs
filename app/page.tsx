export default function Home() {
  return (
    <main className="p-32 flex gap-10 flex-col">
      {Array.from({ length: 10 }).map((_, i) => (
        <div key={i}>
          <h1 className="text-5xl capitalize mb-6 font-medium">hello check</h1>
          <p className="text-xl">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Adipisci
            corporis, ut modi accusantium impedit doloremque esse quisquam
            numquam nihil aliquam ea ducimus in dolores officiis at itaque
            voluptatum omnis recusandae!
          </p>
        </div>
      ))}
    </main>
  )
}
