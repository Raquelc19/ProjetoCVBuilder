import Experience from "../Form/Experience"
import PersonalInfo from "../Form/PersonalInfo"
import Skills from "../Form/Skills"


function FormSection() {
    return(
        <section className="w-[55%] bg-white rounded-lg shadow-md flex flex-col overflow-y-auto">
          <div className="bg-[#869CF5ff] text-white p-5 text-center">
            <h1 className="text-[25px] font-bold">Informações do Currículo</h1>
            <p className="text-sm mt-1">Preencha os dados e veja o preview em tempo real</p>
          </div>
          <PersonalInfo />
          <Skills />
          <Experience />
        </section>
    )
}

export default FormSection