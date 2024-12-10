import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-black text-white px-6 py-3 flex justify-between items-center">
      <h1 className="text-lg font-bold">Teste Doqr</h1>
      <div className="flex items-center gap-2">
        <span>Seu Nome</span>
        <div className="w-8 h-8 rounded-full bg-purple-500"></div>
      </div>
    </nav>
  );
};
