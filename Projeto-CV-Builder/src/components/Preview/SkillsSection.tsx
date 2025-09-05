import { BiSolidCircle } from "react-icons/bi";

function SkillsSection({ skills }) {
  return (
    <div className="habilidades m-5 text-gray-800 mb-15">
      <h3 className="text-base font-semibold mb-2">🛠️ Habilidades</h3>

      {skills.length === 0 ? (
        <div className="bg-gray-100 p-4 rounded text-gray-500 italic text-center text-sm">
          Suas habilidades aparecerão aqui
        </div>
      ) : (
        <ul>
          {skills.map((skill, index) => (
            <div key={index} className="mb-2">
              <div className="flex items-center">
                <BiSolidCircle className="mt-1 text-teal-500" />
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
