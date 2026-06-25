import Navbar from '../components/Navbar';
import Hero from '../components/Hero';
import Beneficios from '@/components/Beneficios';
import Produtos from "@/components/Produtos";
import Contato from "@/components/Contato";
import WhatsAppButton from '@/components/WhatsAppButton';
import QuemSomos from '@/components/QuemSomos';


export default function Home() {
  return (
    <main className="min-h-screen bg-slate-900 flex flex-col">
      <Navbar />
      <Hero />
      <Beneficios />
      <Produtos />
      <QuemSomos />
      <Contato />

      <WhatsAppButton />
    </main>
  );
}