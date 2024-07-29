import About from '@/components/About';
import Hero from '@/components/Hero';

export default function Home() {
  return (
    <main className="">
      <Hero />
      <About />
      <div className="bg-blue-500 h-screen">
        <p>down</p>
      </div>
    </main>
  );
}
