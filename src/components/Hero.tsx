import Image from "next/image";

export default function Hero() {
  
  const urlWhatsapp = "https://wa.me/5513996285971?text=Olá! Gostaria de um orçamento para o Fluxus Rastreamento.";

  return (
    <section className="relative pt-32 pb-20 md:pt-40 md:pb-28 overflow-hidden bg-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
        <div className="space-y-6 text-center md:text-left">
          <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-sky-500/10 text-sky-400 border border-sky-500/20">
            Tecnologia Avançada IoT
          </span>
          <h1 className="text-4xl sm:text-5xl font-extrabold tracking-tight text-white leading-tight">
            Segurança na palma da mão com <span className="text-sky-400">rastreamento em tempo real</span>
          </h1>
          <p className="text-base sm:text-lg text-slate-400 max-w-xl mx-auto md:mx-0">
            Monitore seu patrimônio, configure cercas virtuais e receba alertas de ignição instantâneos. Acesse de qualquer lugar pelo nosso aplicativo mobile ou plataforma web.
          </p>
          <div className="flex flex-col sm:flex-row justify-center md:justify-start gap-4">
            <a href={urlWhatsapp} target="_blank" rel="noopener noreferrer" className="px-8 py-4 rounded-xl font-bold text-white bg-emerald-600 hover:bg-emerald-500 transition-all shadow-lg shadow-emerald-600/20 text-center">
              Falar com Consultor no WhatsApp
            </a>
            <a href="#recursos" className="px-8 py-4 rounded-xl font-semibold text-slate-300 bg-slate-800 hover:bg-slate-700 transition-colors border border-slate-700 text-center">
              Conhecer Recursos
            </a>
          </div>
        </div>
        
        {/* Mockup visual da plataforma */}
        <div className="relative flex justify-center">
          <div className="absolute w-72 h-72 bg-sky-500/10 rounded-full blur-3xl -z-10"></div>
          <div className="w-full max-w-md bg-slate-800 border border-slate-700 p-3 rounded-2xl shadow-2xl transform hover:scale-[1.02] transition-transform duration-300">
            <div className="flex items-center gap-2 mb-3 px-2">
              <span className="w-3 h-3 rounded-full bg-red-500"></span>
              <span className="w-3 h-3 rounded-full bg-yellow-500"></span>
              <span className="w-3 h-3 rounded-full bg-emerald-500"></span>
            </div>
            {/* <div className="bg-slate-950 aspect-video rounded-lg flex flex-col items-center justify-center border border-slate-800 text-slate-500 text-sm p-4 text-center">
               <svg className="w-12 h-12 mb-3 text-slate-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                 <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7" />
               </svg>
               [Interface do Mapa / Sistema Fluxus]
            </div> */}
            <div className="relative aspect-video rounded-lg overflow-hidden border border-slate-800">
               <Image 
                 src="/mapa.png" 
                 alt="Interface do Sistema Fluxus" 
                 fill
                 className="object-cover"
               />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}