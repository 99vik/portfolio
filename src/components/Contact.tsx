import { CiMail } from "react-icons/ci";
import { FaGithub } from "react-icons/fa";

export default function Contact() {
  return (
    <section className="flex justify-center bg-zinc-900 pb-16 pt-2 leading-7 tracking-wide">
      <div className="flex w-full max-w-4xl flex-col">
        <div className="mb-6 flex w-full items-center justify-center gap-6">
          <div className="h-px w-20 flex-1 bg-emerald-500" />
          <h2 className="text-2xl font-bold text-emerald-500">Contact</h2>
          <div className="h-px w-20 flex-1 bg-emerald-500" />
        </div>
        <div className="space-y-1">
          <p className="text-center text-sm text-zinc-400">
            Write me an e-mail at:
          </p>
          <div className="flex items-center justify-center gap-1">
            <CiMail className="size-6 text-emerald-500" />
            <p className="text-lg font-semibold text-emerald-500 md:text-2xl">
              viktor.miric0@gmail.com
            </p>
          </div>
        </div>
        <div className="mt-10 flex justify-center">
          <a href="https://github.com/99vik" target="_blank">
            <FaGithub className="size-14 text-emerald-500 hover:text-emerald-400" />
          </a>
        </div>
      </div>
    </section>
  );
}
