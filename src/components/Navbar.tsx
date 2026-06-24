import React from 'react';

export default function Navbar() {
  // Lembre-se de substituir pela URL de login real que a Sitallcom gerou para a Fluxus
  const urlLoginPlataforma = "https://fluxus.sitallcom.com/login";

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          {/* Logotipo / Identidade Visual */}
          <div className="flex-shrink-0 flex items-center">
            <span className="text-xl font-extrabold tracking-wider text-sky-400">
              FLUXUS<span className="text-white"> RASTREAMENTO</span>
            </span>
          </div>

          {/* Links de Navegação Interna */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#recursos" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Recursos
            </a>
            <a href="#aplicativos" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Aplicativos
            </a>
            <a href="#contato" className="text-sm font-medium text-slate-300 hover:text-white transition-colors">
              Contato
            </a>
          </div>

          {/* Botão de Chamada para Ação (CTA) */}
          <div>
            <a
              href={urlLoginPlataforma}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 transition-all shadow-lg shadow-sky-600/20 tracking-wide"
            >
              Acesse o Sistema
            </a>
          </div>

        </div>
      </div>
    </nav>
  );
}