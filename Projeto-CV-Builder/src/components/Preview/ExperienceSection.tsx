import { BiSolidCircle } from "react-icons/bi";

function ExperienceSection({experiences}) {

    return (
        <div className="experiencias m-5 text-gray-800 mb-15">
            <h3 className="text-base font-semibold mb-2">💼Experiência Profissional</h3>
            {experiences.length === 0 ? (
                <div className=" text-black w-full ">
                
                <div className="bg-gray-100 p-4 rounded text-gray-500 italic text-center text-sm">
                    Suas experiências profissionais
                </div>
                </div>
            ) : (
            <ul className="">
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