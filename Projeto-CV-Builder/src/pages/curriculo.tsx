import { useState } from "react";
import FormSection from "../components/Layout/FormSection";
import PreviewSection from "../components/Layout/PreviewSection";
import HeaderSection from "../components/Layout/HeaderSection";
import Skills from "../components/Form/Skills";

function CurriculumPreview() {
  const [experiences, setExperiences] = useState([]);
  const [skills, setSkills] = useState([]);

  return (
    <main className="min-h-screen w-screen grid place-items-center bg-[url('background.png')] bg-cover bg-center bg-[#fcfbfb]">
      <HeaderSection />
      <div className="flex justify-center w-[100vw] max-w-[1200px] h-[80vh] gap-6 mx-auto">
        
        {/* --- Formulário --- */}
        <FormSection experiences={experiences} setExperiences={setExperiences}>
          <Skills skills={skills} setSkills={setSkills} /> {/* passa estado */}
        </FormSection>

        {/* --- Preview --- */}
        <PreviewSection experiences={experiences} skills={skills} /> {/* recebe skills */}
      </div>
    </main>
  );
}

export default CurriculumPreview;
