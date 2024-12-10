import React from "react";

export const Navbar: React.FC = () => {
  return (
    <nav className="bg-white text-black py-3 flex justify-between items-center px-32 w-screen">
      <div className="flex items-center gap-2">
        <div className="w-10 h-10 rounded-md bg-purple-500 flex items-center justify-center">
          <span className="text-white font-bold text-sm">TD</span>
        </div>
        <h1 className="text-lg font-bold">Teste Doqr</h1>
      </div>
      <div className="flex items-center gap-2">
        <div className="w-8 h-8 rounded-full bg-purple-300"></div>
        <span>Seu Nome</span>
      </div>
    </nav>
  );
};
