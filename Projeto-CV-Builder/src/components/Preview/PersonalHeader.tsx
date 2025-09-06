import { MdOutlineMailOutline } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";
import { CiLinkedin } from "react-icons/ci";

function PersonalHeader({Nome, email, telefone, linkedin, resumoProfissional}) {
    return(
        <div className="dados-pessoais p-5 text-black space-y-2">
            <h1 className="text-[25px] font-semibold italic">{(Nome.trim().length) > 0? Nome:"Nome Completo"}</h1>
            <div className="flex items-center gap-1">
                <MdOutlineMailOutline className="text-base" />
                <p className="text-sm text-gray-700 italic">{(email.trim().length) > 0? email:"email@gmail.com"}</p> 
                <BsTelephone className="text-base ml-4" />
                <p className="text-sm text-gray-700 italic">{telefone.trim().length? telefone:"(99)99999-9999"}</p>
                <CiLinkedin className="text-base ml-4" />
                <p className="text-sm text-gray-700 italic ">{(linkedin.trim().length) > 0? linkedin:"linkedin.com/in/seuperfil"}</p>
            </div>

            {/* (email@gmail.com &nbsp; &nbsp);  */}
            <div className="flex items-center gap-1 mb-4">
            </div>

            {resumoProfissional.trim().length === 0 && (
            <p className="text-gray-700 italic">Seu resumo profissional</p>
            )}
                <p className="text-sm italic text-black">{resumoProfissional}</p>
            <hr className="border-t-2 border-gray-400 mt-5"/>
     </div> 
    )
}

export default PersonalHeader