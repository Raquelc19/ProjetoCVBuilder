import type { PersonalHeaderProps } from "../../types/cv.types"

function PersonalHeader({Nome, email, telefone, linkedin, resumoProfissional}: PersonalHeaderProps) {
    return(
        <div className="dados-pessoais p-5 text-black space-y-2">
            <h1 className="text-[25px] font-semibold italic">{(Nome.trim().length) > 0? Nome:"Nome Completo"}</h1>
            <div className="flex">
                <p className="text-sm text-gray-700 italic">{(email.trim().length) > 0? email:"email@gmail.com"} &nbsp;&nbsp; </p> <p className="text-sm text-gray-700 italic">{telefone.trim().length? telefone:"(99)99999-9999"}</p>
            </div>

            {/* (email@gmail.com &nbsp; &nbsp);  */}
            <p className="text-sm text-gray-700 italic">{(linkedin.trim().length) > 0? linkedin:"linkedin.com/in/seuperfil"}</p>
            <p className="text-sm italic text-gray-500">{resumoProfissional}</p>
     </div> 
    )
}

export default PersonalHeader