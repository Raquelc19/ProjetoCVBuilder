import { MdSupervisorAccount } from "react-icons/md";

function PersonalInfo() {
    return(
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
    );
}

export default PersonalInfo