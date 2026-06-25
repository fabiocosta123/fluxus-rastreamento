import React from 'react';
import Image from 'next/image';

export default function Footer() {
  return (
    <footer className="bg-[#1a1a1a] text-slate-300 py-12 border-t border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Parte superior do Footer */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-start mb-12">
          
          {/* Logo Fluxus */}
          <div className="flex flex-col items-center md:items-start">
            <div className="relative w-48 h-20 mb-4">
              <Image src="/logoFluxus.png" alt="Logo Grupo Cunha Silva" fill className="object-contain" />
            </div>
            {/* Espaço para redes sociais, adicionar depois */}
          </div>

          {/* Email */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-orange-500 mb-1">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M20 4H4c-1.1 0-1.99.9-1.99 2L2 18c0 1.1.9 2 2 2h16c1.1 0 2-.9 2-2V6c0-1.1-.9-2-2-2zm0 4l-8 5-8-5V6l8 5 8-5v2z"/></svg>
            </div>
            <a href="mailto:fluxusrastreamento@gmail.com" className="hover:text-sky-400 transition-colors">
              fluxusrastreamento@gmail.com
            </a>
          </div>

          {/* Endereço */}
          <div className="flex flex-col items-center md:items-start gap-2">
            <div className="text-orange-500 mb-1">
              <svg className="w-8 h-8" fill="currentColor" viewBox="0 0 24 24"><path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/></svg>
            </div>
            <p className="text-center md:text-left max-w-[250px]">
              Rua Meraldo Previdi, 671 - Centro - Registro-SP
            </p>
          </div>
        </div>

        

        {/* Copyright */}
        <div className="text-sm text-slate-500 pt-8 border-t border-slate-800 text-center">
          Copyright © {new Date().getFullYear()} Fluxus Rastreamento. Desenvolvido por Fluxus Tecnology.
        </div>
      </div>
    </footer>
  );
}