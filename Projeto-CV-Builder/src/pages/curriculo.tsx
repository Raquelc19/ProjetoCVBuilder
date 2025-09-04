import { useState } from "react";
import FormSection from "../components/Layout/FormSection";
import PreviewSection from "../components/Layout/PreviewSection";
import APIKeyInput from "../components/Layout/APIKeyInput";

function CurriculumPreview() {
  const [experiences, setExperiences] = useState([]);

  return (
    <main className="min-h-screen w-screen grid place-items-center bg-white">
      <APIKeyInput />
      <div className="flex justify-center w-[100vw] max-w-[1200px] h-[80vh] gap-6 mx-auto">
        <FormSection experiences={experiences} setExperiences={setExperiences} />
        <PreviewSection experiences={experiences} setExperiences={setExperiences}/>
      </div>
    </main>
  );
}

export default CurriculumPreview;


