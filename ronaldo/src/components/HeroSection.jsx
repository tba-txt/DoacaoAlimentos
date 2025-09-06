import React from 'react';

function HeroSection() {
  return (
    <main className="relative text-white text-center py-20 px-4 flex flex-col items-center justify-center min-h-[calc(100vh-64px)] overflow-hidden">
      
      {/* Imagem de Fundo e Overlay */}
      <div 
        className="absolute top-0 left-0 w-full h-full bg-cover bg-center z-0"
        style={{ backgroundImage: `url(/imagem-do-fundo.jpg)` }}
      ></div>
      <div className="absolute top-0 left-0 w-full h-full bg-black opacity-50 z-10"></div>

      {/* Conteúdo da Seção */}
      <div className="relative z-20 flex flex-col items-center gap-8">
        <div className="bg-black bg-opacity-50 p-6 rounded-lg max-w-2xl">
          <h1 className="text-4xl md:text-6xl font-black uppercase tracking-wider">
            É que ser invisível <span className="text-yellow-400">dói</span>
          </h1>
          <p className="mt-4 text-base md:text-lg max-w-xl mx-auto">
            O Brasil tem cerca de 281.472 pessoas em situação de rua (IPEA, 2023). Mais que um número, são vidas invisíveis que precisam de nossa atenção.
          </p>
        </div>
        <button className="bg-white text-custom-orange font-bold py-3 px-8 rounded-full text-lg hover:bg-gray-200 transition-transform duration-300 transform hover:scale-105 shadow-lg">
          Faça sua doação
        </button>
      </div>

      <div className="absolute -bottom-1 left-0 w-full h-10 bg-custom-orange"></div>
    </main>
  );
}

export default HeroSection;
