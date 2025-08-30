import { MdSupervisorAccount } from "react-icons/md";

function CurriculumPreview() {
  return (
    
    <main className="min-h-screen w-screen grid place-items-center bg-white">
      <div className="flex justify-center w-[100vw] max-w-[1200px] h-[80vh] gap-6 mx-auto">

        <section className="w-[45%] bg-white rounded-lg shadow-md flex flex-col overflow-y-auto">
          <div className="bg-purple-900 text-white p-5 text-center">
            <h1 className="text-[25px] font-bold">Informações do Currículo</h1>
            <p className="text-sm mt-1">Preencha os dados e veja o preview em tempo real</p>
          </div>
          <div className="dados-pessoais m-5 text-gray-800">
            <div className="titulo-dados-pessoais flex"><MdSupervisorAccount className="text-3xl"/><h2>Dados Pessoais</h2></div>
            <p className="">Informações básicas para contato</p>
            <hr/>
            <div className="area-nome">
              <label className="info-dados">Nome Completo:*</label>
              <input type="text" placeholder="Digite seu nome completo"></input>
            </div>
            <div className="area-nome">
              <label className="info-dados">E-mail:*</label>
              <input type="email" placeholder="seu.email@exemplo.com"></input>
            </div>
            <div className="area-tel-lkdin flex">
              <label className="info-dados">Telefone:*</label>
              <input type="text" placeholder="(99)99999-9999"></input>
              <label className="info-dados">Linkedin:*</label>
              <input type="email" placeholder="linkedin.com/in/seuperfil"></input>
            </div>
            <div className="resum-profissional">
              <textarea placeholder="Descreva brevemente suas competências, experiências e objetivos..."></textarea>
              <p>Este resumo aparecerá no topo do currículo</p>
            </div>
          </div>
        </section>

        <section className="w-[45%] bg-white rounded-lg shadow-md flex flex-col overflow-y-auto h-full">
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


