
import Image from 'next/image';

const listaProdutos = [
  {
    nome: "Rastreador E3+ Personal",
    subtitulo: "Pequeno, com muita tecnologia. Proteção para pessoas e pets.",
    imagem: "/e3Personal.png",
    badge: "",
    especificacoes: [
      "Rastreador multiaplicações",
      "Monitoramento por voz",
      "Atualização via OTA",
      "Botão de pânico",
      "Monitoramento para família, pets e objetos",
      "Compacto: Cabe até no seu bolso"
    ]
  },
  {
    nome: "Rastreador BWS NB-IoT",
    subtitulo: "Rastreador NB2 resiliente a JAMMER e 3 modos de bloqueio.",
    imagem: "/bwsIoT.png",
    badge: "Lançamento",
    especificacoes: [
      "Conectividade NB2 - NB-IoT (Narrowband IoT)",
      "Baixo consumo de bateria",
      "Resiliente a Jammers",
      "Proteção IP67 contra água e poeira",
      "Atualização por ângulo",
      "Horímetro e Hodômetro",
      "Consumo Deep Sleep: <0,3mAh",
      "Homologações: ANATEL"
    ]
  },
  {
    nome: "Rastreador BWS 4G/2G",
    subtitulo: "Rastreador com CAT-1 com fallback 2G e detecção de JAMMER.",
    imagem: "/bws4g.png",
    badge: "",
    especificacoes: [
      "Protocolo compatível com E3+4G",
      "CAT-1 com fallback 2G",
      "Detecção de Jammer",
      "Driver Behavior (Comportamento de direção)",
      "Proteção IP67 contra água e poeira",
      "Agilidade na atualização (via OTA)",
      "Precisão de hodômetro com sensor de curva",
      "Consumo Deep Sleep: <0,8 mAh"
    ]
  }
];

export default function Produtos() {
  return (
    <section id="produtos" className="py-24 bg-slate-950 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Cabeçalho da Seção */}
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
            Nossos <span className="text-sky-400">Produtos e Rastreadores</span>
          </h2>
          <p className="text-slate-400 text-lg">
            Equipamentos de alta precisão homologados pela Anatel, projetados para qualquer tipo de veículo, frota ou uso pessoal.
          </p>
        </div>

        {/* Grade de Produtos */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {listaProdutos.map((produto, index) => (
            <div key={index} className="bg-slate-900 border border-slate-800 rounded-2xl overflow-hidden flex flex-col transition-transform hover:-translate-y-1 hover:shadow-2xl hover:shadow-sky-900/20">
              
              {/* Imagem do Produto */}
              <div className="relative h-64 w-full bg-slate-800 flex items-center justify-center overflow-hidden">
                {produto.badge && (
                  <div className="absolute top-4 right-4 z-10 bg-emerald-500 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wide">
                    {produto.badge}
                  </div>
                )}
                <Image 
                  src={produto.imagem} 
                  alt={produto.nome} 
                  fill
                  className="object-cover"
                />
              </div>

              {/* Informações do Produto */}
              <div className="p-6 flex flex-col flex-grow">
                <h3 className="text-xl font-bold text-white mb-2">{produto.nome}</h3>
                <p className="text-slate-400 text-sm mb-6">{produto.subtitulo}</p>
                
                {/* Lista de Especificações */}
                <ul className="space-y-3 mb-6 flex-grow">
                  {produto.especificacoes.map((item, i) => (
                    <li key={i} className="flex items-start text-sm text-slate-300">
                      <svg className="w-5 h-5 text-sky-500 mr-2 flex-shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                      <span>{item}</span>
                    </li>
                  ))}
                </ul>

                {/* Botão de Orçamento para o produto específico */}
                <a 
                  href={`https://wa.me/5513996285971?text=Olá, tenho interesse no ${produto.nome}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="mt-auto w-full block text-center bg-slate-800 hover:bg-slate-700 text-sky-400 font-semibold py-3 rounded-xl transition-colors border border-slate-700 hover:border-sky-500/50"
                >
                  Solicitar Orçamento
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}