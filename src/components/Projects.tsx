import ImageSlider from "./ImageSlider";

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
          My main focus, however, has been on building full-stack web
          applications. Along the way, I&apos;ve written a lot of bad code and
          gradually improved my skills. Here are some of my notable projects:
        </p>
        <div className="my-4 h-px w-full bg-zinc-700" />
        <div className="space-y-3">
          <p className="text-xl text-emerald-500">CaseMaker</p>
          <p>
            Next.js app for creating custom phone cases. Upload your own image
            and choose additional features like color, finish and case type.
            Price is automatically calculated and on checkout you are redirected
            to Stripe for payment.
          </p>
          <div className="pb-5 pt-3">
            <ImageSlider
              images={[
                "/casemaker/image1.png",
                "/casemaker/image2.png",
                "/casemaker/image3.png",
                "/casemaker/image4.png",
              ]}
            />
          </div>
          <div className="mt-20 grid grid-cols-2 gap-6">
            <button className="rounded-md bg-emerald-500 px-4 py-2 font-semibold transition hover:bg-emerald-600">
              See it live
            </button>
            <button className="rounded-md border border-emerald-500 px-4 py-2 font-semibold text-emerald-500 transition hover:bg-zinc-800">
              View code
            </button>
          </div>
        </div>
        <div className="my-4 h-px w-full bg-zinc-700" />
      </div>
    </section>
  );
}
