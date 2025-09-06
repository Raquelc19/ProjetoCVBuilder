import { BiSolidCircle } from "react-icons/bi";
import { MdWorkOutline } from "react-icons/md";

function ExperienceSection({experiences}) {

    return (
        <div className="experiencias p-5 text-gray-800 w-full">
            <div className="flex items-center gap-2 mb-4">
            <MdWorkOutline className="text-2xl text-gray-700" />
            <h3 className="text-xl font-semibold">Experiência Profissional</h3>
            </div>
            {experiences.length === 0 ? (
                <div className="bg-gray-100 p-4 rounded text-gray-500 italic text-center text-sm">
                    Suas experiências profissionais
                </div>
                
            ) : (
            <ul className="p-0 m-0 list-none">
                {experiences.map((experience) => (
                    <div className="mb-4">
                        <div className="flex items-center">
                            <BiSolidCircle className="text-teal-500 text-[0.5rem] mt-0.5 flex-shrink-0"/>
                            <li className="font-semibold text-lg ml-2">{experience.cargo}</li>
                        </div>
                        <div className="ml-5 mt-1 space-y-1">
                            <li className="font-medium text-base text-teal-600">{experience.empresa}</li>
                            <li className="text-sm">Início: {experience.dataInicial} | Fim: {experience.dataFinal}</li>
                            <li className="text-sm font-normal mt-2.5">{experience.descricao}</li> 
                        </div>
                    </div>
                ))}
            </ul> 
            )}
        </div>
    )
}

export default ExperienceSection