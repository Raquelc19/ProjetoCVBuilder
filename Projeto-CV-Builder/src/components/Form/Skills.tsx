import { FiTool } from "react-icons/fi";

function Skills() {
    return(
        <div className="habilidades m-5 text-gray-800 flex flex-col gap-1">
            <div className="titulo-habilidades flex"><FiTool className="text-2xl"/><h2 className="font-semibold text-xl mt-0.4">Habilidades</h2></div>
              <p className="text-gray-600 text-sm mb-2">Adicione suas principais competências</p>
              <hr className="text-gray-300 mb-4"/>
            <div className="area-nome flex flex-col"></div> 
            <div>
              <input className="w-3/5 text-sm" type="text" placeholder="Nome da Habilidades (ex.: React, JS"></input>
              <select className="mt-1 mb-3 ml-3 mr-3 pt-1.5 pb-2 pl-3 border-2 border-[#869CF5ff] rounded-md">
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
    )
}

export default Skills