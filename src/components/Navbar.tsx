"use client";

import Image from "next/image";
import { useState } from "react";

export default function Navbar() {
  // Lembre-se de substituir pela URL de login real que a Sitallcom gerou para a Fluxus
  const urlLoginPlataforma = "https://sitrax.sitallcom.com/";
  
  // Estado para controlar se o menu mobile está aberto ou fechado
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  // Função para fechar o menu automaticamente ao clicar em um link
  const closeMenu = () => setIsMenuOpen(false);

  return (
    <nav className="fixed top-0 left-0 right-0 z-50 bg-slate-900/80 backdrop-blur-md border-b border-slate-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20">
          
          <div className="flex-shrink-0 flex items-center">
            {/* O container 'relative' controla o tamanho máximo da logo */}
            <div className="relative w-60 h-36"> 
              <Image 
                src="/logoFluxus.png" 
                alt="Logo Fluxus Rastreamento" 
                fill
                priority
                className="object-contain object-left"
              />
            </div>
          </div>

          {/* Links de Navegação Interna - ESCONDIDO NO MOBILE (hidden md:flex) */}
          <div className="hidden md:flex items-center space-x-8">
            <a href="#produtos" className="text-base font-medium text-slate-300 hover:text-white transition-colors">
              Produtos
            </a>
            <a href="#beneficios" className="text-base font-medium text-slate-300 hover:text-white transition-colors">
              Benefícios
            </a>

            <a href="#quem-somos" className="text-base font-medium text-slate-300 hover:text-white transition-colors">
              Quem Somos
            </a>
            <a href="#contato" className="text-base font-medium text-slate-300 hover:text-white transition-colors">
              Contato
            </a>
          </div>

          {/* Botão Acesse o Sistema - ESCONDIDO NO MOBILE (hidden md:block) */}
          <div className="hidden md:block">
            <a
              href={urlLoginPlataforma}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center px-5 py-2.5 border border-transparent text-sm font-semibold rounded-lg text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 transition-all shadow-lg shadow-sky-600/20 tracking-wide"
            >
              Acesse o Sistema
            </a>
          </div>

          {/* BOTÃO DO MENU HAMBÚRGUER - APARECE APENAS NO MOBILE (md:hidden) */}
          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsMenuOpen(!isMenuOpen)}
              className="text-slate-300 hover:text-white focus:outline-none p-2"
              aria-label="Menu"
            >
              {isMenuOpen ? (
                // Ícone de "X" quando o menu está aberto
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                </svg>
              ) : (
                // Ícone de Hambúrguer quando o menu está fechado
                <svg className="h-8 w-8" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
                </svg>
              )}
            </button>
          </div>

        </div>
      </div>

      {/* DROPDOWN DO MENU MOBILE */}
      {isMenuOpen && (
        <div className="md:hidden bg-slate-900 border-b border-slate-800 shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            <a 
              href="#produtos" 
              onClick={closeMenu}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Produtos
            </a>
            <a 
              href="#beneficios" 
              onClick={closeMenu}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Benefícios
            </a>

            <a 
              href="#quem-somos" 
              onClick={closeMenu}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Quem Somos
            </a>
            <a 
              href="#contato" 
              onClick={closeMenu}
              className="block px-3 py-3 rounded-md text-base font-medium text-slate-300 hover:text-white hover:bg-slate-800 transition-colors"
            >
              Contato
            </a>

            
            {/* Botão de Sistema dentro do Menu Mobile */}
            <div className="pt-4 mt-2 border-t border-slate-800">
              <a
                href={urlLoginPlataforma}
                target="_blank"
                rel="noopener noreferrer"
                onClick={closeMenu}
                className="flex items-center justify-center w-full px-5 py-3 border border-transparent text-base font-semibold rounded-lg text-white bg-sky-600 hover:bg-sky-500 active:bg-sky-700 transition-all shadow-lg shadow-sky-600/20"
              >
                Acesse o Sistema
              </a>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
}