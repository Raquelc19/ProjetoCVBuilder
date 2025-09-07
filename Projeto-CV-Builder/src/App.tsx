import { useEffect, useState } from "react";
import Loading from "../src/components/UI/Loading";
import CurriculumPreview from "./pages/curriculo";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => setLoading(false);

    if (document.readyState === "complete") {
      setLoading(false);
    } else {
      window.addEventListener("load", handleLoad); //caso ainda não esteja preparado, espera carregar todos os componentes e executa a função de tornar o carregamento falso
    }

    return () => window.removeEventListener("load", handleLoad); //aqui removemos esse evento de carregamento, para fazer a limpeza dele
  }, []);

  if (loading) return <Loading />;

  return (
    <div>
      <CurriculumPreview />
    </div>
  );
}

export default App;
