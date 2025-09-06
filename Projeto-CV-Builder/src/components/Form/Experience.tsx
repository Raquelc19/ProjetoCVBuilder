import { MdWorkOutline } from "react-icons/md";
import { useState } from 'react';
import { FaRegTrashAlt } from "react-icons/fa";
import { type Experience as ExperienceType, type ExperienceProps, type ExperienceFormData } from "../../types/cv.types";

function Experience({experiences, setExperiences}: ExperienceProps) {
    const [showForm, setShowForm] = useState<boolean>(false);
    const [dataForm, setDataForm] = useState<ExperienceFormData>({
        empresa: "",
        cargo: "",
        dataInicial: "",
        dataFinal: "",
        descricao: ""
    });

    //o event recebe essa tipagem pode variar entre dois elementos pois ele funciona tanto em inputs como em textarea
    const handleChangeData = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setDataForm({...dataForm, [e.target.name]: e.target.value});
    }

    const handleAddExperiences = () => {
        if (dataForm.empresa && dataForm.cargo && dataForm.dataInicial && dataForm.dataFinal) {
            setExperiences([...experiences, { ...dataForm, id: Date.now() }]);
            setDataForm({empresa: "", cargo: "", dataInicial: "", dataFinal: "", descricao: ""});
            setShowForm(false);
            
        }
    }

    const handleDeleteExperience = (idExperience: number) => {
        setExperiences(experiences.filter(experience => experience.id !== idExperience))
    }

    return(
        <div className="experiencias m-5 text-gray-800 mb-15 flex flex-col gap-1">
            <div className="titulo-experiencias flex items-center gap-2"><MdWorkOutline className="text-2xl"/><h2 className="font-semibold text-xl mt-0.4">Experiência Profissional</h2></div>
                <p className="text-gray-600 text-sm mb-2">Adicione suas principais competências</p>
                <hr className="text-gray-300 mb-4"/>
            <div className="area-nome flex flex-col"></div> 

            {!showForm && (
                <button onClick={() => setShowForm(true)} className="add-experiencia">+ Adicionar Experiência</button>
            )}


            {showForm && (
                <div className="flex flex-col gap-4">
                    <div className="area-experiencia-emp-cargo flex">
                        <div className="flex flex-col mr-4 w-full gap-2">
                            <label className="info-dados">Empresa:*</label>
                            <input onChange={handleChangeData} type="text" name="empresa" value={dataForm.empresa} placeholder="Nome da Empresa"></input>
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label className="info-dados">Cargo:*</label>
                            <input onChange={handleChangeData} type="text" name="cargo" value={dataForm.cargo} placeholder="Seu cargo na empresa"></input>
                        </div>
                    </div>
                    <div className="area-experiencia-data flex">
                        <div className="flex flex-col mr-4 w-full gap-2">
                            <label className="info-dados">Data de Início</label>
                            <input onChange={handleChangeData} type="date" name="dataInicial" value={dataForm.dataInicial} placeholder="Nome da Empresa"></input>
                        </div>
                        <div className="flex flex-col w-full gap-2">
                            <label className="info-dados">Data de Fim</label>
                            <input onChange={handleChangeData} type="date" name="dataFinal" value={dataForm.dataFinal} placeholder="Seu cargo na empresa"></input>
                        </div>
                    </div>
                    <div className="descricao-atvs flex flex-col gap-1">
                        <label className="info-resumo">Descrição das Atividades</label>
                        <textarea onChange={handleChangeData} name="descricao" value={dataForm.descricao} placeholder="Descreva suas principais atividades, responsabilidades e conquistas..."></textarea>
                    </div>
                    <div className="flex gap-2 ">
                    <button onClick={() => handleAddExperiences()} className="adicionar-btn">Adicionar</button>
                    <button onClick={() => setShowForm(false)}>Cancelar</button>  
                    </div>
                </div>  
            )}

            <ul>
                {experiences.map((exp: ExperienceType) => (
                    <div key={exp.id}>
                        <li>
                            <ul className="mt-4 mb-3 pt-1.5 pb-2 pl-3 border-2 border-gray-300 rounded-md">
                                <div className="flex">
                                    <div className="">
                                        <li className="font-semibold text-lg">{exp.cargo}</li>
                                        <li className="font-medium text-base text-gray-500">{exp.empresa}</li>
                                        <li className="text-sm">Início: {exp.dataInicial} | Fim: {exp.dataFinal}</li>
                                        <li className="text-sm font-normal mt-2.5">{exp.descricao}</li> 
                                    </div>
                                    <div className="flex w-1/2 justify-end items-center">
                                        <button onClick={() => handleDeleteExperience(exp.id)} className="del-btn transform motion-safe:hover:scale-110">< FaRegTrashAlt /></button>
                                    </div>
                                </div>
                            </ul>
                        </li>
                    </div>
                ))}
            </ul>
            <div className="text-center">
                <div className="flex justify-center mt-6">
                <MdWorkOutline className="text-6xl text-gray-300 items-center justify-items-center mt-4"/>
                </div>
                <p className="text-gray-600 text-base">Nenhuma habilidade adicionada ainda</p>
                <p className="text-gray-600 text-sm mb-2">Adicione suas principais competências técnicas</p>
            </div>
        </div>
    )
}

export default Experience