import React from 'react';

const recursos = [
  {
    titulo: "Rastreamento em Tempo Real",
    descricao: "Acompanhe a localização exata do seu veículo 24 horas por dia, com atualizações precisas via tecnologia 4G e IoT.",
    icone: (
      <svg className="w-6 h-6 text-sky-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
      </svg>
    )
  },
  {
    titulo: "Cerca Virtual",
    descricao: "Crie perímetros de segurança e seja notificado imediatamente se o veículo sair da área delimitada.",
    icone: (
      <svg className="w-6 h-6 text-emerald-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
      </svg>
    )
  },
  {
    titulo: "Alerta de Ignição",
    descricao: "Receba avisos instantâneos no celular sempre que o motor do veículo for ligado ou desligado.",
    icone: (
      <svg className="w-6 h-6 text-amber-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
      </svg>
    )
  },
  {
    titulo: "Histórico e Telemetria",
    descricao: "Acesse o histórico completo de trajetos e velocidades. Sistema compatível com ampla gama de rastreadores, incluindo modelos 2G como o YF08.",
    icone: (
      <svg className="w-6 h-6 text-purple-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 17V7m0 10a2 2 0 01-2 2H5a2 2 0 01-2-2V7a2 2 0 012-2h2a2 2 0 012 2m0 10a2 2 0 002 2h2a2 2 0 002-2M9 7a2 2 0 012-2h2a2 2 0 012 2m0 10V7m0 10a2 2 0 002 2h2a2 2 0 002-2V7a2 2 0 00-2-2h-2a2 2 0 00-2 2" />
      </svg>
    )
  }
];

export default function Beneficios() {
  return (
    <section id="recursos" className="py-20 bg-slate-900 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl font-bold text-white mb-4">
            Tudo o que você precisa para <span className="text-sky-400">proteger seu patrimônio</span>
          </h2>
          <p className="text-slate-400 text-lg">
            O sistema Fluxus Rastreamento oferece controle total do seu veículo ou frota na palma da mão, com estabilidade garantida.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {recursos.map((item, index) => (
            <div key={index} className="bg-slate-800/50 border border-slate-700/50 p-6 rounded-2xl hover:bg-slate-800 transition-colors">
              <div className="w-12 h-12 bg-slate-900 rounded-xl flex items-center justify-center mb-6 border border-slate-700">
                {item.icone}
              </div>
              <h3 className="text-xl font-semibold text-white mb-3">{item.titulo}</h3>
              <p className="text-slate-400 leading-relaxed">{item.descricao}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}