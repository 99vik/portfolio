import { Source_Code_Pro } from 'next/font/google';

const sourceCodePro = Source_Code_Pro({ subsets: ['latin'], weight: '400' });

export default function Hero() {
  return (
    <section
      className={`${sourceCodePro.className} h-screen tracking-tight leading-tight py-6 text-xl`}
    >
      <p>
        <span className="text-green-500">VIKTOR@DESKTOP </span>
        <span className="text-purple-700">MINGW64 </span>
        <span className="text-yellow-500">~/portfolio </span>
        <span className="text-blue-500">(main)</span>
      </p>
      <p>$ py</p>
      <p>&gt;&gt;&gt; Hi!</p>
      <p>&gt;&gt;&gt; I&apos;m Viktor</p>
      <p>&gt;&gt;&gt; </p>
    </section>
  );
}
