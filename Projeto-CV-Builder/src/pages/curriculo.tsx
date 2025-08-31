import { MdSupervisorAccount, MdWorkOutline } from "react-icons/md";
import { FiTool } from "react-icons/fi";

function CurriculumPreview() {
  return (
    
    <main className="min-h-screen w-screen grid place-items-center bg-white">
      <div className="flex justify-center w-[100vw] max-w-[1200px] h-[80vh] gap-6 mx-auto">

        <section className="w-[55%] bg-white rounded-lg shadow-md flex flex-col overflow-y-auto">
          <div className="bg-purple-900 text-white p-5 text-center">
            <h1 className="text-[25px] font-bold">Informações do Currículo</h1>
            <p className="text-sm mt-1">Preencha os dados e veja o preview em tempo real</p>
          </div>
          <div className="dados-pessoais m-5 text-gray-800">
            <div className="titulo-dados-pessoais flex"><MdSupervisorAccount className="text-3xl"/><h2 className="font-semibold text-xl mt-0.4">Dados Pessoais</h2></div>
              <p className="text-gray-600 text-sm mb-2">Informações básicas para contato</p>
              <hr className="text-gray-300 mb-4"/>
            <div className="area-nome flex flex-col">
              <label className="info-dados">Nome Completo:*</label>
              <input type="text " placeholder="Digite seu nome completo"></input>
            </div>
            <div className="area-email flex flex-col">
              <label className="info-dados">E-mail:*</label>
              <input type="email" placeholder="seu.email@exemplo.com"></input>
            </div>
            <div className="area-tel-lkdin flex">
              <div className="flex flex-col mr-4 w-full">
                <label className="info-dados">Telefone:*</label>
                <input type="text" placeholder="(99)99999-9999"></input>
              </div>
              <div className="flex flex-col w-full">
                <label className="info-dados">Linkedin:*</label>
                <input type="email" placeholder="linkedin.com/in/seuperfil"></input>
              </div>
            </div>
            <div className="resum-profissional flex flex-col">
              <label className="info-resumo">Resumo Profissional:</label>
              <textarea placeholder="Descreva brevemente suas competências, experiências e objetivos..."></textarea>
              <p>Este resumo aparecerá no topo do currículo</p>
            </div>
          </div>
          <div className="habilidades m-5 text-gray-800">
            <div className="titulo-habilidades flex"><FiTool className="text-2xl"/><h2 className="font-semibold text-xl mt-0.4">Habilidades</h2></div>
              <p className="text-gray-600 text-sm mb-2">Adicione suas principais competências</p>
              <hr className="text-gray-300 mb-4"/>
            <div className="area-nome flex flex-col"></div> 
            <div>
              <input className="w-3/5 text-sm" type="text" placeholder="Nome da Habilidades (ex.: React, JS"></input>
              <select className="mt-1 mb-3 ml-3 mr-3 pt-1.5 pb-2 pl-3 border-2 border-gray-300 rounded-md">
                <option>Básico</option>
                <option>Intermediário</option>
                <option>Avanço</option>
              </select>
              <button className="add-btn text-white font-bold">+</button>
            </div>
            <div className="text-center">
              <div className="flex justify-center mt-6">
                <FiTool className="text-6xl text-gray-300 items-center justify-items-center"/>
              </div>
              <p className="text-gray-600 text-base">Nenhuma habilidade adicionada ainda</p>
              <p className="text-gray-600 text-sm mb-2">Adicione suas principais competências técnicas</p>
            </div>
          </div>
          <div className="experiencias m-5 text-gray-800 mb-15">
            <div className="titulo-experiencias flex"><MdWorkOutline className="text-2xl"/><h2 className="font-semibold text-xl mt-0.4">Experiência Profissional</h2></div>
              <p className="text-gray-600 text-sm mb-2">Adicione suas principais competências</p>
              <hr className="text-gray-300 mb-4"/>
            <div className="area-nome flex flex-col"></div> 
            <input className="w-full h-1/5 border-dashed text-center" type="text" placeholder="+ Adicionar Experiência"></input>
            <div className="text-center">
              <div className="flex justify-center mt-6">
                <MdWorkOutline className="text-6xl text-gray-300 items-center justify-items-center"/>
              </div>
              <p className="text-gray-600 text-base">Nenhuma habilidade adicionada ainda</p>
              <p className="text-gray-600 text-sm mb-2">Adicione suas principais competências técnicas</p>
            </div>
          </div>
        </section>

        <section className="w-[55%] bg-white rounded-lg shadow-md flex flex-col overflow-y-auto h-full">
          <div className="bg-purple-900 text-white p-5 text-center">
            <h1 className="text-[25px] font-bold">Preview do Currículo</h1>
            <p className="text-sm mt-1">Visualização em tempo real</p>
          </div>

          <div className="p-5 text-black space-y-2">
            <h1 className="text-[25px] font-semibold">Nome Completo</h1>
            <p className="text-sm text-gray-700">email@gmail.com &nbsp; &nbsp; (86) 99999-9999</p>
            <p className="text-sm italic text-gray-500">Resumo Profissional</p>
          </div>

          <div className="p-5 text-black">
            <h3 className="text-base font-semibold mb-2">🛠️Habilidades</h3>
            <div className="bg-gray-100 p-4 rounded text-gray-500 italic text-center text-sm">
              Suas habilidades
            </div>
          </div>

          <div className="p-5 text-black">
            <h3 className="text-base font-semibold mb-2">💼Experiência Profissional</h3>
            <div className="bg-gray-100 p-4 rounded text-gray-500 italic text-center text-sm">
              Suas experiências profissionais
            </div>
          </div>

          <div className="bg-purple-900 h-[1px] w-full mt-4"></div>

          <footer className="text-center py-3 text-xs mt-auto text-gray-500">
            Currículo gerado pelo Gerador de Currículos IA
          </footer>
        </section>
      </div>
    </main>
  );
}

export default CurriculumPreview;


