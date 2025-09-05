import ExperienceSection from "../Preview/ExperienceSection"
import PersonalHeader from "../Preview/PersonalHeader"
import SkillsSection from "../Preview/SkillsSection"

function PreviewSection({experiences, setExperiences}) {
    return(
        <section className="w-[55%] bg-white rounded-lg shadow-md flex flex-col overflow-y-auto h-full">
          <div className="bg-[#3ca58b] text-white p-5 text-center">
            <h1 className="text-[25px] font-bold">Preview do Currículo</h1>
            <p className="text-sm mt-1">Visualização em tempo real</p>
          </div>
          <PersonalHeader />
          <SkillsSection />
          <ExperienceSection experiences={experiences} />
          <div className="h-[1px] w-full mt-4"></div>

          <footer className="text-center py-3 text-xs mt-auto text-gray-500">
            Currículo gerado pelo Gerador de Currículos IA
          </footer>
        </section>
    )
}

export default PreviewSection