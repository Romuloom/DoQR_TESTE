import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white shadow-sm text-black py-3 flex justify-between px-32">
      <div className="flex items-center gap-3">
        <div className="w-10 h-10 rounded-md bg-primary flex items-center justify-center">
          <span className="text-white font-bold text-sm">TD</span>
        </div>
        <h1 className="text-lg font-bold">Teste Doqr</h1>
      </div>
      <div className="flex items-center gap-3">
        <div className="w-8 h-8 rounded-full bg-purple-300"></div>
        <span>Seu Nome</span>
      </div>
    </nav>
  );
};
