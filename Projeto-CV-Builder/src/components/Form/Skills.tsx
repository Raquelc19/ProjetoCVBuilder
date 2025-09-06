import { useState } from "react";
import { FiTool } from "react-icons/fi";
import type { SkillsProps } from "../../types/cv.types";

function Skills({skills, setSkills}: SkillsProps) {
  const [skillName, setSkillName] = useState("");
  const [skillLevel, setSkillLevel] = useState("Básico");

  const addSkill = () => {
    if (!skillName) return;
    setSkills([...skills, { name: skillName, level: skillLevel }]);
    setSkillName("");
    setSkillLevel("Básico");
  };

  const removeSkill = (index: number) => {
    const updatedSkills = skills.filter((_, i) => i !== index);
    setSkills(updatedSkills);
  };

  return (
    <div className="habilidades m-5 text-gray-800 flex flex-col gap-1">
      <div className="titulo-habilidades flex items-center gap-2">
        <FiTool className="text-2xl" />
        <h2 className="font-semibold text-xl">Habilidades</h2>
      </div>
      <p className="text-gray-600 text-sm mb-2">Adicione suas principais competências técnicas</p>
      <hr className="text-gray-300 mb-4" />

      {/* Input de nova skill */}
      <div className="flex items-center gap-2 mb-3">
        <input
          className="w-3/5 text-sm border rounded px-2 py-1"
          type="text"
          placeholder="Nome da Habilidade (ex.: React, JS)"
          value={skillName}
          onChange={(e) => setSkillName(e.target.value)}
        />
        <select
          className="mt-1 mb-3 ml-3 mr-3 pt-1.5 pb-2 pl-3 border-2 border-[#869CF5ff] rounded-md"
          value={skillLevel}
          onChange={(e) => setSkillLevel(e.target.value)}
        >
          <option>Básico</option>
          <option>Intermediário</option>
          <option>Avançado</option>
        </select>
        <button
          className="add-btn text-white font-bold bg-blue-500 px-3 py-1 rounded"
          onClick={addSkill}
        >
          +
        </button>
      </div>

      {/* Lista de skills adicionadas */}
      {skills.length === 0 ? (
        <div className="text-center">
          <div className="flex justify-center mt-6">
            <FiTool className="text-6xl text-gray-300 items-center justify-items-center" />
          </div>
          <p className="text-gray-600 text-base">Nenhuma habilidade adicionada ainda</p>
          <p className="text-gray-600 text-sm mb-2">Adicione suas principais competências técnicas</p>
        </div>
      ) : (
        <ul className="space-y-2">
          {skills.map((skill, index) => (
            <li
              key={index}
              className="flex justify-between items-center bg-gray-100 p-2 rounded"
            >
              <span>
                <strong>{skill.name}</strong> - {skill.level}
              </span>
              <button
                className="text-red-500 font-bold"
                onClick={() => removeSkill(index)}
              >
                X
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default Skills;
