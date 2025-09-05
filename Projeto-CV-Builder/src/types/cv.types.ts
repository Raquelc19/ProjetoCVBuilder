//esse tipo foi criado separado do formdata pois o formdata é o objeto em si, que representa cada experiência
//já esse experience, ele precisa de um id, para organiza-lo no array de experiences
export interface Experience {
    id: number;
    empresa: string;
    cargo: string;
    dataInicial: string;
    dataFinal: string;
    descricao: string;
}

export interface ExperienceFormData {
    empresa: string;
    cargo: string;
    dataInicial: string;
    dataFinal: string;
    descricao: string;
}

//nesse ponto, nomeamos como props para indicar o que o componente recebe de props
export interface HeaderSectionProps {
    exportPdf: () => void;
}

//recebe ao fim o nome return, pois se refere a tipagem do retorno dessa função
export interface usePdfExportReturn {
    exportarPdf: () => void;
    contentDocument: React.RefObject<HTMLDivElement>;
}

export interface ExperienceProps {
    experiences: Experience[];
    setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>
}

export interface FormSectionProps {
    experiences: Experience[];
    setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>
}

export interface PreviewSectionProps {
    experiences: Experience[];
    ref?: React.RefObject<HTMLDivElement>;
}