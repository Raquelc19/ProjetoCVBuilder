import { MdSupervisorAccount } from "react-icons/md";
import { useState } from "react";
import FormSection from "../components/Layout/FormSection";
import PreviewSection from "../components/Layout/PreviewSection";

function CurriculumPreview() {

const [skills, setSkills] = useState<{ name: string; level: string }[]>([]);
const [skillName, setSkillName] = useState(""); 
const [skillLevel, setSkillLevel] = useState("Básico"); 
const addSkill = () => {
  if (skillName.trim() === "") return;
  setSkills([...skills, { name: skillName, level: skillLevel }]);
  setSkillName("");
  setSkillLevel("Básico");
};
const removeSkill = (index: number) => {
  setSkills(skills.filter((_, i) => i !== index)); // remove pelo índice
};

  return (
    
    <main className="min-h-screen w-screen grid place-items-center bg-white">
      <div className="flex justify-center w-[100vw] max-w-[1200px] h-[80vh] gap-6 mx-auto">

        <section className="w-[45%] bg-white rounded-lg shadow-md flex flex-col overflow-y-auto">
          <div className="bg-purple-900 text-white p-5 text-center">
            <h1 className="text-[25px] font-bold">Informações do Currículo</h1>
            <p className="text-sm mt-1">Preencha os dados e veja o preview em tempo real</p>
          </div>
          <div className="dados-pessoais m-5 text-gray-800">
            <div className="titulo-dados-pessoais flex"><MdSupervisorAccount className="text-3xl"/><h2>Dados Pessoais</h2></div>
            <p className="">Informações básicas para contato</p>
            <hr/>
            <div className="area-nome">
              <label className="info-dados">Nome Completo:*</label>
              <input type="text" placeholder="Digite seu nome completo"></input>
            </div>
            <div className="area-nome">
              <label className="info-dados">E-mail:*</label>
              <input type="email" placeholder="seu.email@exemplo.com"></input>
            </div>
            <div className="area-tel-lkdin flex">
              <label className="info-dados">Telefone:*</label>
              <input type="text" placeholder="(99)99999-9999"></input>
              <label className="info-dados">Linkedin:*</label>
              <input type="email" placeholder="linkedin.com/in/seuperfil"></input>
            </div>
            <div className="resum-profissional">
              <textarea placeholder="Descreva brevemente suas competências, experiências e objetivos..."></textarea>
              <p>Este resumo aparecerá no topo do currículo</p>
            </div>
          </div>
          <div className="p-5 text-black">
  <h3 className="text-base font-semibold mb-2">🛠️ Habilidades</h3>
  <p className="text-sm text-gray-600 mb-2">Adicione suas principais competências técnicas</p>

  {/* Input para nome da habilidade */}
  <div className="flex gap-2 mb-3">
    <input
      type="text"
      placeholder="Nome da habilidade"
      className="border rounded px-2 py-1 flex-1"
      value={skillName}
      onChange={(e) => setSkillName(e.target.value)}
    />

    {/* Seletor de nível */}
    <select
      className="border rounded px-2 py-1"
      value={skillLevel}
      onChange={(e) => setSkillLevel(e.target.value)}
    >
      <option>Básico</option>
      <option>Intermediário</option>
      <option>Avançado</option>
    </select>

    {/* Adicionar */}
    <button
      className="bg-purple-900 text-white px-3 rounded"
      onClick={addSkill}
    >
      +
    </button>
  </div>

  {/* Habilidades */}
  <ul className="space-y-2">
    {skills.map((skill, index) => (
      <li key={index} className="flex justify-between items-center bg-gray-100 p-2 rounded">
        <span>
          <strong>{skill.name}</strong> - {skill.level}
        </span>
        {/* Botão de remover */}
        <button
          className="text-red-500 font-bold"
          onClick={() => removeSkill(index)}
        >
          X
        </button>
      </li>
    ))}
  </ul>
</div>

        </section>

        <section className="w-[45%] bg-white rounded-lg shadow-md flex flex-col overflow-y-auto h-full">
          <div className="bg-purple-900 text-white p-5 text-center">
            <h1 className="text-[25px] font-bold">Preview do Currículo</h1>
            <p className="text-sm mt-1">Visualização em tempo real</p>
          </div>

          <div className="p-5 text-black space-y-2">
            <h1 className="text-[25px] font-semibold">Nome Completo</h1>
            <p className="text-sm text-gray-700">email@gmail.com &nbsp; &nbsp; (86) 99999-9999</p>
            <p className="text-sm italic text-gray-500">Resumo Profissional</p>
          </div>

          <div className="p-5 text-black">
            <h3 className="text-base font-semibold mb-2">🛠️Habilidades</h3>
            {skills.length === 0 ? (
              <div className="bg-gray-100 p-4 rounded text-gray-500 italic text-center text-sm">
              Suas habilidades
            </div>
          ) : (
          <ul className="list-disc pl-5">
            {skills.map((skill, index) => (
              <li key={index} className="text-sm">
                {skill.name} - <span className="italic">{skill.level}</span>
        </li>
      ))}
    </ul>
  )}
  </div>

          <div className="p-5 text-black">
            <h3 className="text-base font-semibold mb-2">💼Experiência Profissional</h3>
            <div className="bg-gray-100 p-4 rounded text-gray-500 italic text-center text-sm">
              Suas experiências profissionais
            </div>
          </div>

          <div className="bg-purple-900 h-[1px] w-full mt-4"></div>

          <footer className="text-center py-3 text-xs mt-auto text-gray-500">
            Currículo gerado pelo Gerador de Currículos IA
          </footer>
        </section>
        <FormSection />
        <PreviewSection />
      </div>
    </main>
  );
}

export default CurriculumPreview;


