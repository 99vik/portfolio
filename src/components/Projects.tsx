export default function Projects() {
  return (
    <section className="flex min-h-screen justify-center bg-zinc-900 py-20 leading-7 tracking-wide">
      <div className="flex max-w-4xl flex-col">
        <div className="mb-6 flex w-full items-center justify-center gap-6">
          <div className="h-px w-20 flex-1 bg-emerald-500" />
          <h2 className="text-2xl font-bold text-emerald-500">Projects</h2>
          <div className="h-px w-20 flex-1 bg-emerald-500" />
        </div>
        <p>
          In my free time, I&apos;ve built numerous projects from scratch, each
          varying in size, complexity, and technology. These range from CLI
          games like Chess in Ruby to machine learning projects using PyTorch.
          However, my main focus has been on building full-stack web
          applications. Here are some of notable examples:
        </p>
        <div className="my-4 h-px w-full bg-emerald-500/20" />
        <div className="grid grid-cols-3 gap-4">
          <div className="flex flex-col space-y-3">
            <p className="self-center text-xl text-emerald-500">CaseMaker</p>
            <p>
              A web application for managing and tracking cases. Next.js app for
              creating custom phone cases.
            </p>
            <div className="grid grid-cols-2 gap-4">
              <button className="rounded-md bg-emerald-500 px-4 py-2 font-semibold transition hover:bg-emerald-600">
                See it live
              </button>
              <button className="rounded-md border border-emerald-500 px-4 py-2 font-semibold text-emerald-500 transition hover:bg-zinc-800">
                View code
              </button>
            </div>
          </div>
          <div className="col-span-2">Pics</div>
        </div>
      </div>
    </section>
  );
}
