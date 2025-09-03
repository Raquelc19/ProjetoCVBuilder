import FormSection from "../components/Layout/FormSection";
import PreviewSection from "../components/Layout/PreviewSection";
import HeaderSection from "../components/Layout/HeaderSection";

function CurriculumPreview() {
  return (
    
    <main className="min-h-screen w-screen grid place-items-center bg-[url('/background.jpg')] bg-cover bg-center">
        <HeaderSection />
      <div className="flex justify-center w-[100vw] max-w-[1200px] h-[80vh] gap-6 mx-auto">
        <FormSection />
        <PreviewSection />
      </div>
    </main>
  );
}

export default CurriculumPreview;


