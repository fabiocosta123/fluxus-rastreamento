import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Beneficios from '@/components/Beneficios';

export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 flex flex-col">
      <Navbar />
      <Hero />
      <Beneficios />
    </main>
  );
}