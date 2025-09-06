import type { FormSectionProps } from "../../types/cv.types"
import Experience from "../Form/Experience"
import PersonalInfo from "../Form/PersonalInfo"
import Skills from "../Form/Skills"


function FormSection({experiences, setExperiences, skills, setSkills}) {
    return(
        <section className="w-[55%] bg-white rounded-lg shadow-md flex flex-col overflow-y-auto">
          <div className="bg-[#5c75db] text-white p-5 text-center">
            <h1 className="text-[25px] font-bold">Informações do Currículo</h1>
            <p className="text-sm mt-1">Preencha os dados e veja o preview em tempo real</p>
          </div>
          <PersonalInfo />
          <Skills skills={skills} setSkills={setSkills} />
          <Experience experiences={experiences} setExperiences={setExperiences}/>
        </section>
    )
}

export default FormSection