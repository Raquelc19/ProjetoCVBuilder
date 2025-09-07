import { useState } from "react";
import type { HeaderSectionProps } from "../../types/cv.types";
import { TbFileExport } from "react-icons/tb";

function HeaderSection({exportPdf}: HeaderSectionProps) {
   const[key, setKey] = useState(localStorage.getItem("openai_api_key" ) || "");
  // const { exportarPdf } = usePdfExport();

  const salvar = () => {
        //aqui o objetivo é criar o openai e passar essa key para openai para que seja salva ao recarregar
        localStorage.setItem("openai_api_key", key);
        alert("Chave salva!");
        setKey("");
    }

  const verificarTecla = (e: any) => {
      if (e.key === 'Enter') {
          salvar();
      }
  }

  return (
    <>
      <section className="w-full flex justify-between items-center px-10 pt-1 mt-3">
        <div className="flex flex-col gap-1">
          <div className="flex items-center gap-2">
            <img
              src="assets/Logo-site.png"
              alt="Ícone do site"
              className=" h-20 object-contain"
            />
            <div className="flex-col">
              <h1 className="text-xl font-bold text-[#5c75db]">BrainCV.ia</h1>
              <p className="text-sm text-[#5c75db] ">Gerador de currículos inteligentes</p>
            </div>
          </div>
          
        </div>

        <div className="flex items-center gap-6"> 
          <input
            type="password"
            placeholder="Cole sua API Key"
            className="px-4 py-2 border border-gray-300 rounded-full outline-none transition-all 
                       focus:border-purple-600 focus:shadow-md hover:border-purple-600 placeholder-gray-500 text-black"
            value={key}
            onChange={(e) => setKey(e.target.value)}
            onKeyDown={(e) => verificarTecla(e)}
          />
          <button
            className="btn-exportar px-5 py-2 rounded-full border border-purple-600 bg-[#6F7DF3ff] text-white 
                       hover:bg-purple-700 hover: transition-all flex items-center gap-2"
            onClick={exportPdf}
          >
            <TbFileExport className="text-lg" />
            Exportar PDF
          </button>
        </div>
      </section>

      <div className="w-full h-0.5 bg-[#5c75db] "></div>
    </>
  );
}

export default HeaderSection;