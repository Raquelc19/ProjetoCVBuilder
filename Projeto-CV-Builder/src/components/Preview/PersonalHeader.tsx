function PersonalHeader({Nome, email, telefone, linkedin, resumoProfissional}) {
    return(
        <div className="dados-pessoais p-5 text-black space-y-2">
            <h1 className="text-[25px] font-semibold italic">{Nome}</h1>
            <div className="flex">
                <p className="text-sm text-gray-700 italic">{email} &nbsp;&nbsp; </p> <p className="text-sm text-gray-700 italic">{telefone}</p>
            </div>

            {/* (email@gmail.com &nbsp; &nbsp);  */}
            <p className="text-sm text-gray-700 italic">{linkedin}</p>
            <p className="text-sm italic text-gray-500">{resumoProfissional}</p>
     </div> 
    )
}

export default PersonalHeader