import React from 'react';
import ExperienceSection from "../Preview/ExperienceSection"
import PersonalHeader from "../Preview/PersonalHeader"
import SkillsSection from "../Preview/SkillsSection"
import type { PreviewSectionProps } from '../../types/cv.types';

const  PreviewSection = React.forwardRef(({ experiences }: PreviewSectionProps, ref) => {
    return(
        <section   className="w-[55%] bg-white rounded-lg shadow-md flex flex-col overflow-y-auto h-full " >
          <div className="bg-[#3ca58b] text-white p-5 text-center">
            <h1 className="text-[25px] font-bold">Preview do Currículo</h1>
            <p className="text-sm mt-1">Visualização em tempo real</p>
          </div>
          <div ref={ref} id="preview-area" className='print:w-full h-full print:scale-100 print:shadow-none '>
            <PersonalHeader />
            <SkillsSection />
            <ExperienceSection experiences={experiences} />
          </div>
          <div className="h-[1px] w-full mt-4"></div>
          <footer className="text-center py-3 text-xs mt-auto text-gray-500">
            Currículo gerado pelo Gerador de Currículos IA
          </footer>
        </section>
    )
});

PreviewSection.displayName = 'PreviewSection';

export default PreviewSection