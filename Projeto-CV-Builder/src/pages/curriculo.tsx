import React from 'react';
import { useState } from "react";
import usePdfExport from '../hook/usePdfExport';
import FormSection from "../components/Layout/FormSection";
import PreviewSection from "../components/Layout/PreviewSection";
import HeaderSection from "../components/Layout/HeaderSection";
import Skills from "../components/Form/Skills";

function CurriculumPreview() {
  const [experiences, setExperiences] = useState([]);
  //nesse ponto, está sendo extraídos os dois parâmetros do usePdfExport
  const { exportarPdf, contentDocument } = usePdfExport();
  const [skills, setSkills] = useState([]);
  const [Nome, setNome] = useState<string>("");
  const [email, setEmail] = useState<string>("");
  const [telefone, setTelefone] = useState<string>("");
  const [linkedin, setLinkedin] = useState<string>("");
  const [resumoProfissional, setResumoProfissional] = useState<string>("");

  return (
    <main className="min-h-screen w-screen grid place-items-center bg-[url('background.png')] bg-cover bg-center bg-[#fcfbfb] ">
        <HeaderSection exportPdf={exportarPdf}/>
      <div className="flex justify-center w-[100vw] max-w-[1200px] h-[80vh] gap-6 mx-auto">
        {/* --- Formulário --- */}
        <FormSection experiences={experiences} setExperiences={setExperiences} skills={skills} setSkills ={setSkills} 
            Nome= {Nome} setNome= {setNome}
            email= {email} setEmail={setEmail}
            telefone= {telefone} setTelefone={setTelefone}
            linkedin= {linkedin} setLinkedin={setLinkedin}
            resumoProfissional= {resumoProfissional} setResumoProfissional={setResumoProfissional}>
          <Skills skills={skills} setSkills ={setSkills} />
        /</FormSection>
        {/* --- Preview --- */}
        <PreviewSection  experiences={experiences} skills={skills} Nome={Nome} email={email} telefone= {telefone} linkedin= {linkedin} resumoProfissional={resumoProfissional} ref={contentDocument}/>
      </div>
    </main>
  );
}


export default CurriculumPreview;