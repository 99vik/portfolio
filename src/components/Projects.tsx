import { RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import ImageSlider from "./ImageSlider";
import {
  SiPayloadcms,
  SiPrisma,
  SiPytorch,
  SiReactquery,
  SiRuby,
  SiRubyonrails,
  SiShadcnui,
  SiTrpc,
  SiVite,
} from "react-icons/si";
import { BiLogoFlask, BiLogoPython, BiLogoTypescript } from "react-icons/bi";
import { BsStripe } from "react-icons/bs";
import Image from "next/image";
import { FaGithub, FaReact } from "react-icons/fa";
import { IoLogoJavascript } from "react-icons/io";
import { SquareArrowOutUpRight } from "lucide-react";

export default function Projects() {
  return (
    <section className="flex justify-center overflow-x-hidden bg-zinc-900 py-20 leading-7 tracking-wide">
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
        <div className="my-5 h-px w-full bg-zinc-600 md:my-8" />

        <div className="space-y-2 px-3">
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
            Application for creating customized phone cases. Upload your own
            image, position it on the case and choose additional features like
            color, finish and case type. Preview the final case design and
            it&apos;s price, then proceed to checkout with Stripe.
          </p>
          <div className="mx-auto aspect-[16/9] w-[calc(98vw-10px)] pb-6 pt-3 md:w-[650px] lg:w-full">
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
              className="flex items-center justify-center gap-1.5 rounded-md bg-emerald-500 px-4 py-2 text-center font-semibold transition hover:bg-emerald-600"
            >
              <SquareArrowOutUpRight size={16} strokeWidth={3} />
              See it live
            </a>
            <a
              target="_blank"
              href="https://github.com/99vik/case-maker"
              className="flex items-center justify-center gap-1.5 rounded-md border border-emerald-500 px-4 py-2 text-center font-semibold text-emerald-500 transition hover:bg-zinc-800"
            >
              <FaGithub size={20} />
              View code
            </a>
          </div>
        </div>
        <div className="my-5 h-px w-full bg-zinc-600 md:my-8" />
        <div className="space-y-2 px-3">
          <p className="text-center text-2xl font-semibold text-emerald-500">
            LAPIS
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
              <SiPayloadcms className="size-5" />
              Payload CMS
            </div>
          </div>
          <p>
            Official website of the Laboratory for Manufacturing and Assembly
            Systems Planning, part of the Faculty of Mechanical Engineering and
            Naval Architecture at the University of Zagreb. This website is
            frontend focused, with Payload CMS hosted separately on an Express
            server as the backend for writing news posts. All pages are
            statically generated. When a post is created, edited, or deleted,
            the CMS sends an API request to the Next.js server, which then
            revalidates certain paths to generate new static files.
          </p>
          <div className="mx-auto aspect-[16/9] w-[calc(98vw-10px)] pb-6 pt-3 md:w-[650px] lg:w-full">
            <ImageSlider
              images={[
                "/lapis/image1.png",
                "/lapis/image2.png",
                "/lapis/image3.png",
                "/lapis/image4.png",
              ]}
            />
          </div>
          <div className="mt-20 grid gap-6">
            <a
              target="_blank"
              href="https://pro11.fsb.hr/"
              className="flex items-center justify-center gap-1.5 rounded-md bg-emerald-500 px-4 py-2 text-center font-semibold transition hover:bg-emerald-600"
            >
              <SquareArrowOutUpRight size={16} strokeWidth={3} />
              See it live
            </a>
          </div>
        </div>
        <div className="my-5 h-px w-full bg-zinc-600 md:my-8" />
        <div className="space-y-2 px-3">
          <p className="text-center text-2xl font-semibold text-emerald-500">
            AutoML Classifier
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
              <SiReactquery className="size-5" />
              React Query
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <BiLogoPython className="size-5" />
              Python
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <BiLogoFlask className="size-5" />
              Flask
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <SiPytorch className="size-5" />
              PyTorch
            </div>
          </div>
          <p>
            This project combines a Next.js frontend with a Flask-Python backend
            to create an intuitive platform for building and managing machine
            learning classification models. With this application, users can
            upload CSV datasets, select hyperparameters, and train
            classification models. The app also allows users to save trained
            models and make predictions with custom input data. AutoML
            Classifier simplifies the process of creating and predicting with
            classification models, it is designed to be run locally.
          </p>
          <div className="mx-auto aspect-[16/9] w-[calc(98vw-10px)] pb-6 pt-3 md:w-[650px] lg:w-full">
            <ImageSlider
              images={[
                "/automlclassifier/img2.png",
                "/automlclassifier/img1.png",
                "/automlclassifier/img3.png",
                "/automlclassifier/img4.png",
                "/automlclassifier/img5.png",
                "/automlclassifier/img6.png",
                "/automlclassifier/img7.png",
                "/automlclassifier/img8.png",
              ]}
            />
          </div>
          <div className="mt-20 grid grid-cols-1 gap-6">
            <a
              target="_blank"
              href="https://github.com/99vik/auto-ml-classifier"
              className="flex items-center justify-center gap-1.5 rounded-md border border-emerald-500 px-4 py-2 text-center font-semibold text-emerald-500 transition hover:bg-zinc-800"
            >
              <FaGithub size={20} />
              View code
            </a>
          </div>
        </div>
        <div className="my-5 h-px w-full bg-zinc-600 md:my-8" />

        <div className="space-y-2 px-3">
          <p className="text-center text-2xl font-semibold text-emerald-500">
            PDF chatter
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
              <SiPrisma className="size-5" />
              Prisma
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <SiTrpc className="size-5" />
              tRPC
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              KindeAuth
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <Image
                src="/logos/langchain.svg"
                width={30}
                height={20}
                alt="Drizzle"
              />
              Langchain
            </div>
          </div>
          <p>
            Application where you upload a PDF file and talk to AI about the
            file&apos;s content. Upon upload, files are vectorized and stored on
            Pinecone, every message is doing a similarity search against the
            vector database namespace, where the most similar vectors (pages)
            are retrieved. Retrieved pages serve as a context, together with few
            previous messages and specific instructions template to answer the
            user&apos;s question through OpenAI&apos;s GPT-3.5-turbo model.
          </p>
          <div className="mx-auto aspect-[16/9] w-[calc(98vw-10px)] pb-6 pt-3 md:w-[650px] lg:w-full">
            <ImageSlider
              images={[
                "/pdf-chatter/image1.png",
                "/pdf-chatter/image2.png",
                "/pdf-chatter/image3.png",
              ]}
            />
          </div>
          <div className="mt-20 grid grid-cols-2 gap-6">
            <a
              target="_blank"
              href="https://pdf-chatter-ivory.vercel.app/"
              className="flex items-center justify-center gap-1.5 rounded-md bg-emerald-500 px-4 py-2 text-center font-semibold transition hover:bg-emerald-600"
            >
              <SquareArrowOutUpRight size={16} strokeWidth={3} />
              See it live
            </a>
            <a
              target="_blank"
              href="https://github.com/99vik/pdf-chatter"
              className="flex items-center justify-center gap-1.5 rounded-md border border-emerald-500 px-4 py-2 text-center font-semibold text-emerald-500 transition hover:bg-zinc-800"
            >
              <FaGithub size={20} />
              View code
            </a>
          </div>
        </div>
        <div className="my-5 h-px w-full bg-zinc-600 md:my-8" />

        <div className="space-y-2 px-3">
          <p className="text-center text-2xl font-semibold text-emerald-500">
            MessageApp
          </p>
          <div className="flex flex-wrap justify-center gap-3 pb-2">
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <SiRubyonrails className="size-6" />
              Rails
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <SiRuby className="size-4" />
              Ruby
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <SiVite className="size-5" />
              Vite
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <FaReact className="size-5" />
              React
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <IoLogoJavascript className="size-5" />
              JavaScript
            </div>
            <div className="flex w-fit items-center gap-1 rounded-full border border-zinc-800 bg-zinc-950 px-2 text-emerald-500">
              <RiTailwindCssFill className="size-6" />
              Tailwind CSS
            </div>
          </div>
          <p>
            Basic chatting application built with React frontend and Ruby on
            Rails backend, utilizing the Action Cable WebSockets protocol for
            live chat updates. It has basic features like customizing your
            photo, searching and adding friends, creating private or public
            groups.
          </p>
          <div className="mx-auto aspect-[16/9] w-[calc(98vw-10px)] pb-6 pt-3 md:w-[650px] lg:w-full">
            <ImageSlider
              images={[
                "/messageapp/image1.png",
                "/messageapp/image2.png",
                "/messageapp/image3.png",
                "/messageapp/image4.png",
              ]}
            />
          </div>
          <div className="mt-20 grid grid-cols-2 gap-6">
            <a
              target="_blank"
              href="https://cheery-peony-2b91b4.netlify.app/"
              className="flex items-center justify-center gap-1.5 rounded-md bg-emerald-500 px-4 py-2 text-center font-semibold transition hover:bg-emerald-600"
            >
              <SquareArrowOutUpRight size={16} strokeWidth={3} />
              See it live
            </a>
            <a
              target="_blank"
              href="https://github.com/99vik/messaging-app"
              className="flex items-center justify-center gap-1.5 rounded-md border border-emerald-500 px-4 py-2 text-center font-semibold text-emerald-500 transition hover:bg-zinc-800"
            >
              <FaGithub size={20} />
              View code
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
