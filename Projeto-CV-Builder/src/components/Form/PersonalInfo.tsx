import { useState } from "react";
import { MdSupervisorAccount } from "react-icons/md";
import { upgradeResume } from "../../services/aiService"

function PersonalInfo() {
  const [resumoProfissional, setResumoProfissional] = useState("");
  const [loading, setLoading] = useState(false);
  const apiKey = localStorage.getItem("openai_api_key") || "";

  const melhorarTextoProfissional = async (): Promise<void> => {
    if (!resumoProfissional.trim()) {
      alert("É necessário digitar um resumo profissional primeiro.")
      return
    }

    if (!apiKey) {
      alert("É necessário informar uma chave da API primeiro.")
    }

    setLoading(true);
    try {
      const textoMelhorado = await upgradeResume(resumoProfissional, apiKey);
      setResumoProfissional(textoMelhorado);
    } catch (error: any) {
        console.error(error);
        alert("Erro ao melhorar o texto.");
    } finally {
        setLoading(false);
    }
  };

  return (
    <div className="dados-pessoais m-5 text-gray-800 flex flex-col gap-1">
          <div className="titulo-dados-pessoais flex "><MdSupervisorAccount className="text-3xl"/><h2 className="font-semibold text-xl mt-0.4">Dados Pessoais</h2></div>
            <p className="text-gray-600 text-sm mb-2">Informações básicas para contato</p>
            <hr className="text-gray-300 mb-4"/>
          <div className="area-nome flex flex-col gap-1">
            <label className="info-dados">Nome Completo:*</label>
            <input type="text " placeholder="Digite seu nome completo"></input>
          </div>
          <div className="area-email flex flex-col gap-1">
            <label className="info-dados">E-mail:*</label>
            <input type="email" placeholder="seu.email@exemplo.com"></input>
          </div>
          <div className="area-tel-lkdin flex ">
            <div className="flex flex-col mr-4 w-full gap-1">
              <label className="info-dados">Telefone:*</label>
              <input type="text" placeholder="(99)99999-9999"></input>
            </div>
            <div className="flex flex-col w-full gap-1">
              <label className="info-dados">Linkedin:*</label>
              <input type="email" placeholder="linkedin.com/in/seuperfil"></input>
            </div>
          </div> 
          <div className="resum-profissional flex flex-col gap-1">
            <div className="flex">
              <label className="info-resumo">Resumo Profissional:</label>
              <button 
              className="ml-55"
              onClick={melhorarTextoProfissional}
              //utilizamos essa propriedade para deixar o botão de carregando desabilidade enquanto está carregando
              disabled={loading}
              >
                {loading ? "Melhorando..." : "Melhorar texto"} 
              </button>
            </div>

            <textarea 
              value={resumoProfissional}
              onChange={(e) => setResumoProfissional(e.target.value)}
              placeholder="Descreva brevemente suas competências, experiências e objetivos..." 
              className="mt-2 p-2 border rounded"
            />

            <p className="resume-p text-[11px] -mt-3">Este resumo aparecerá no topo do currículo</p>
          </div>
      </div>   
  );
}

export default PersonalInfo