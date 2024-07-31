export default function About() {
  return (
    <section className="flex min-h-screen justify-center bg-gradient-to-b from-zinc-950 to-zinc-900 py-20 leading-7 tracking-wide">
      <div className="flex max-w-4xl flex-col">
        <div className="mb-6 flex w-full items-center justify-center gap-6">
          <div className="h-px w-20 flex-1 bg-emerald-500" />
          <h2 className="text-2xl font-bold text-emerald-500">About</h2>
          <div className="h-px w-20 flex-1 bg-emerald-500" />
        </div>
        <div className="space-y-4 px-3 md:px-20">
          <div className="flex">
            <span className="mr-3 text-emerald-400">&#62;</span>
            <p>
              Hey there! I&apos;m Viktor, a mechanical engineering graduate
              currently in the final stretch of my master&apos;s degree.
            </p>
          </div>
          <div className="flex">
            <span className="mr-3 text-emerald-400">&#62;</span>
            <p>
              In addition to my studies, I got into the world of software
              development since early 2022 and have been in love with it ever
              since.
            </p>
          </div>
          <div className="flex">
            <span className="mr-3 text-emerald-400">&#62;</span>
            <p>
              Outside the realm of academia and coding, I&apos;m usually
              exploring the latest in tech and constantly seeking new knowledge.
            </p>
          </div>
          <div className="flex">
            <span className="mr-3 text-emerald-400">&#62;</span>
            <p>
              My primary focus is web development, especially building
              full-stack Next.js applications.
            </p>
          </div>
          <div className="flex">
            <span className="mr-3 text-emerald-400">&#62;</span>
            <p>
              I am driven by the challenge of problem-solving, which is the main
              reason I have chosen to pursue a career in software development.
              This attribute, coupled with my engineering background, makes me
              well suited to create solutions for complex problems.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
