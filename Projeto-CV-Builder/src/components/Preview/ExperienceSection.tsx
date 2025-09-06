import { BiSolidCircle } from "react-icons/bi";
import type { ExperienceSectionProps } from "../../types/cv.types";

function ExperienceSection({experiences}: ExperienceSectionProps) {

    return (
        <div className="experiencias p-5 text-gray-800 w-full">
            <h3 className="text-base font-semibold mb-2">💼Experiência Profissional</h3>
            {experiences.length === 0 ? (
                <div className="bg-gray-100 p-4 rounded text-gray-500 italic text-center text-sm">
                    Suas experiências profissionais
                </div>
                
            ) : (
            <ul className="p-4 rounded text-sm text-black">
                {experiences.map((experience) => (
                    <div>
                        <div className="flex">
                            <BiSolidCircle className="mt-2 text-teal-500"/>
                            <li className="font-semibold text-lg ml-3">{experience.cargo}</li>
                        </div>
                        <div className="ml-7">
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