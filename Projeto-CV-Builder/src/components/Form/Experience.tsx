import { MdWorkOutline } from "react-icons/md";

function Experience() {
    return(
        <div className="experiencias m-5 text-gray-800 mb-15 flex flex-col gap-1">
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
    )
}

export default Experience