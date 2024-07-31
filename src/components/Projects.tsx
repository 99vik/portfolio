import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import ImageSlider from "./ImageSlider";
import { SiReactquery, SiShadcnui, SiTypescript } from "react-icons/si";
import { BiLogoTypescript } from "react-icons/bi";
import { BsStripe } from "react-icons/bs";
import Image from "next/image";

export default function Projects() {
  return (
    <section className="flex min-h-screen justify-center bg-zinc-900 py-20 leading-7 tracking-wide">
      <div className="flex max-w-4xl flex-col">
        <div className="mb-6 flex w-full items-center justify-center gap-6">
          <div className="h-px w-20 flex-1 bg-emerald-500" />
          <h2 className="text-2xl font-bold text-emerald-500">Projects</h2>
          <div className="h-px w-20 flex-1 bg-emerald-500" />
        </div>
        <p className="px-3">
          In my free time, I&apos;ve built numerous projects from scratch, each
          varying in size, complexity, and technology. These range from CLI
          games like Chess in Ruby to machine learning projects using PyTorch.
          My main focus, however, has been on building full-stack web
          applications. Along the way, I&apos;ve written a lot of bad code and
          gradually improved my skills. Here are some of my notable projects:
        </p>
        <div className="my-5 h-px w-full bg-zinc-700" />
        <div className="space-y-3 px-3">
          <p className="text-center text-2xl font-semibold text-emerald-500">
            CaseMaker
          </p>
          <div className="flex flex-wrap justify-center gap-3 pb-2">
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <RiNextjsFill className="size-6" />
              Next.js
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <BiLogoTypescript className="size-6" />
              TypeScript
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <RiTailwindCssFill className="size-6" />
              Tailwind CSS
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <SiShadcnui className="size-4" />
              Shadcn
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <BsStripe className="size-4.5" />
              Stripe
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <SiReactquery className="size-5" />
              React Query
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <Image
                src="/logos/drizzle.svg"
                width={29}
                height={29}
                alt="Drizzle"
              />
              Drizzle
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <Image
                src="/logos/authjs.svg"
                width={18}
                height={18}
                alt="Drizzle"
              />
              Auth.js
            </div>
          </div>
          <p>
            Next.js app for creating custom phone cases. Upload your own image
            and choose additional features like color, finish and case type.
            Price is automatically calculated and on checkout you are redirected
            to Stripe for payment.
          </p>
          <div className="mx-auto aspect-[16/9] w-[calc(96vw)] pb-6 pt-3 md:w-[650px] lg:w-full">
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
            <a
              target="_blank"
              href="https://case-maker.vercel.app"
              className="rounded-md bg-emerald-500 px-4 py-2 text-center font-semibold transition hover:bg-emerald-600"
            >
              See it live
            </a>
            <a
              target="_blank"
              href="https://github.com/99vik/case-maker"
              className="rounded-md border border-emerald-500 px-4 py-2 text-center font-semibold text-emerald-500 transition hover:bg-zinc-800"
            >
              View code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
