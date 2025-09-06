
import { BiSolidCircle } from "react-icons/bi";
import { FiTool } from "react-icons/fi";

function SkillsSection({ skills }) {
  return (
    <div className="habilidades m-5 text-gray-800 mb-">
      <div className="flex items-center gap-2 mb-4">
      <FiTool className="text-2xl text-gray-700" />
      <h3 className="text-xl font-semibold">Habilidades</h3>
      </div>

      {skills.length === 0 ? (
        <div className="bg-gray-100 p-4 rounded text-gray-500 italic text-center text-sm">
          Suas habilidades aparecerão aqui
        </div>
      ) : (
        <ul>
          {skills.map((skill, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-center">
                <BiSolidCircle className="text-teal-500 text-[0.5rem] mt-0.5 flex-shrink-0" />
                <li className="font-semibold text-lg ml-2">{skill.name}</li>
              </div>
              <div className="ml-7 font-medium text-sm text-gray-600">
                Nível: {skill.level}
              </div>
            </div>
          ))}
        </ul>
      )}
    </div>
  );
}

export default SkillsSection;
