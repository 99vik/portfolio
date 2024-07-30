export default function About() {
  return (
    <section className="min-h-screen leading-7 tracking-wide flex justify-center bg-gradient-to-b py-20 from-zinc-950 to-zinc-900">
      <div className="flex flex-col max-w-4xl">
        <div className="flex items-center mb-6 gap-6 w-full justify-center">
          <div className="h-px w-20 bg-emerald-500 flex-1" />
          <h2 className="text-2xl font-bold text-emerald-500">About</h2>
          <div className="h-px w-20 bg-emerald-500 flex-1" />
        </div>
        <div className="space-y-4 px-20">
          <div className="flex">
            <span className="text-emerald-400 mr-3">&#62;</span>
            <p>
              Hey there! I&apos;m Viktor, a mechanical engineering graduate
              currently in the final stretch of my master&apos;s degree.
            </p>
          </div>
          <div className="flex">
            <span className="text-emerald-400 mr-3">&#62;</span>
            <p>
              In addition to my studies, I got into the world of software
              development since early 2022 and have been in love with it ever
              since.
            </p>
          </div>
          <div className="flex">
            <span className="text-emerald-400 mr-3">&#62;</span>
            <p>
              Outside the realm of academia and coding, I&apos;m usually
              exploring the latest in tech and constantly seeking new knowledge.
            </p>
          </div>
          <div className="flex">
            <span className="text-emerald-400 mr-3">&#62;</span>
            <p>
              My primary focus is web development, especially building
              full-stack Next.js applications.
            </p>
          </div>
          <div className="flex">
            <span className="text-emerald-400 mr-3">&#62;</span>
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
