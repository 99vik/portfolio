import { Source_Code_Pro } from "next/font/google";
import TypewritingEffect from "./TypewritingEffect";
import GoDownAnimation from "./GoDownAnimation";

const sourceCodePro = Source_Code_Pro({ subsets: ["latin"], weight: "400" });

export default function Hero() {
  return (
    <section
      className={`${sourceCodePro.className} relative h-screen py-6 text-base leading-tight tracking-tighter sm:text-lg md:text-xl md:tracking-tight`}
    >
      <p>
        <span className="text-green-500">VIKTOR@DESKTOP </span>
        <span className="text-purple-600">MINGW64 </span>
        <span className="text-yellow-400">
          ~<span className="hidden md:inline-block">/Desktop</span>/portfolio{" "}
        </span>
        <span className="text-blue-500">(main)</span>
      </p>
      <p>$ py</p>
      <p>&gt;&gt;&gt; Hi!</p>
      <p>&gt;&gt;&gt; I&apos;m Viktor</p>
      <div className="flex gap-3">
        <p>&gt;&gt;&gt;</p>
        <TypewritingEffect />
      </div>
      <GoDownAnimation />
    </section>
  );
}
