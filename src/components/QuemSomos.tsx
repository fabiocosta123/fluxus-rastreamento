import Image from "next/image";

export default function QuemSomos() {
  // Dados das empresas para facilitar a manutenção
  const empresas = [
    { src: "/logoGrupoCunhaSilva.png", alt: "Grupo Cunha Silva", label: "Grupo Cunha Silva" },
    { src: "/livrariaAbraao.png", alt: "Livraria Abraão", label: "Livraria Abraão" },
    { src: "/restauranteDaju.png", alt: "Restaurante Daju", label: "Restaurante Daju" },
    { src: "/acheiLa.png", alt: "Achei Lá", label: "Achei Lá" },
  ];

  return (
    <section id="quem-somos" className="py-24 bg-slate-950">
      <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-slate-900 border border-slate-800 rounded-3xl p-8 md:p-12 shadow-2xl">
          
          <div className="text-center mb-10">
            <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
              Quem <span className="text-sky-400">Somos</span>
            </h2>
            <div className="w-20 h-1 bg-sky-500 mx-auto rounded-full"></div>
          </div>

          <div className="space-y-6 text-lg text-slate-300 leading-relaxed">
            <p>
              A <strong>Fluxus Rastreamento</strong> é uma empresa familiar que nasceu de um propósito claro: a preocupação genuína com a segurança pública diante dos crescentes desafios relacionados a roubos e furtos em nossa região. Entendemos que proteger seu patrimônio é, acima de tudo, garantir a tranquilidade da sua família.
            </p>
            <p>
              Nossa trajetória é guiada por valores sólidos, onde o respeito, a transparência e o compromisso com o cliente são a base de tudo o que fazemos. Buscamos incansavelmente a excelência em nossos serviços e atendimentos, tratando cada rastreador instalado e cada cliente atendido com a atenção que eles merecem.
            </p>
            <p>
              Como parte integrante do <strong>Grupo Cunha Silva</strong>, aliamos a solidez de um grupo experiente com a agilidade e a modernidade que o mercado exige. Estamos em constante evolução tecnológica, buscando sempre soluções modernas e eficientes para que você tenha a tecnologia mais avançada a seu favor.
            </p>
            <p className="pt-6 font-semibold text-sky-400 text-center italic">
              "Segurança, confiança e inovação: o nosso compromisso com você e com quem você ama."
            </p>
          </div>

          <div className="mt-16 border-t border-slate-800 pt-12">
            <h3 className="text-xl font-bold text-white text-center mb-10">
              Empresas do <span className="text-sky-400">Grupo Cunha Silva</span>
            </h3>

            {/* Grid com items-stretch para forçar a mesma altura em todos os cards */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-6 items-stretch">
              {empresas.map((empresa, index) => (
                <div key={index} className="flex flex-col items-center justify-between p-4 bg-slate-800/30 rounded-xl border border-slate-700/50 grayscale hover:grayscale-0 transition-all">
                  <div className="relative w-full h-24 flex items-center justify-center">
                    <Image 
                      src={empresa.src} 
                      alt={empresa.alt} 
                      width={120} 
                      height={60} 
                      className="object-contain max-h-20" 
                    />
                  </div>
                  <span className="text-xs md:text-sm text-slate-400 mt-4 font-medium text-center">
                    {empresa.label}
                  </span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}