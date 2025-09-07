import React, { useState } from "react";
import usePdfExport from "../hook/usePdfExport";
import FormSection from "../components/Layout/FormSection";
import PreviewSection from "../components/Layout/PreviewSection";
import HeaderSection from "../components/Layout/HeaderSection";
import Skills from "../components/Form/Skills";

function CurriculumPreview() {
  const [experiences, setExperiences] = useState([]);
  const { exportarPdf, contentDocument } = usePdfExport();
  const [skills, setSkills] = useState([]);
  const [Nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");
  const [resumoProfissional, setResumoProfissional] = useState<string>("");

  return (
    <main className="w-full px-0">
      <HeaderSection exportPdf={exportarPdf} />

      <div className="flex flex-col lg:flex-row justify-center w-full max-w-[1200px] h-auto lg:h-[75vh] gap-6 mx-auto mt-5">
        {/* --- Formulário --- */}
        <FormSection
          experiences={experiences}
          setExperiences={setExperiences}
          skills={skills}
          setSkills={setSkills}
          Nome={Nome}
          setNome={setNome}
          email={email}
          setEmail={setEmail}
          telefone={telefone}
          setTelefone={setTelefone}
          linkedin={linkedin}
          setLinkedin={setLinkedin}
          resumoProfissional={resumoProfissional}
          setResumoProfissional={setResumoProfissional}
        >
          <Skills skills={skills} setSkills={setSkills} />
        </FormSection>

        {/* --- Preview --- */}
        <PreviewSection
          experiences={experiences}
          skills={skills}
          Nome={Nome}
          email={email}
          telefone={telefone}
          linkedin={linkedin}
          resumoProfissional={resumoProfissional}
          ref={contentDocument}
        />
      </div>

      <footer className="w-full text-center text-gray-500 py-4 ">
        <p>© 2025 Devriders. Todos os direitos reservados.</p>
      </footer>
    </main>
  );
}

export default CurriculumPreview;
