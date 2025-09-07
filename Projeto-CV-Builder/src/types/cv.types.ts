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

export interface skill {
    name: string;
    level: string;
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

export interface PersonalInfoProps {
    Nome: string;
    setNome: React.Dispatch<React.SetStateAction<string>>
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>
    telefone: string
    setTelefone: React.Dispatch<React.SetStateAction<string>>
    linkedin: string
    setLinkedin: React.Dispatch<React.SetStateAction<string>>
    resumoProfissional: string
    setResumoProfissional: React.Dispatch<React.SetStateAction<string>>
}

export interface SkillsProps {
    skills: skill[];
    setSkills: React.Dispatch<React.SetStateAction<skill[]>>
}

export interface FormSectionProps {
    experiences: Experience[];
    setExperiences: React.Dispatch<React.SetStateAction<Experience[]>>;
    skills: skill[];
    setSkills: React.Dispatch<React.SetStateAction<skill[]>>;
    Nome: string;
    setNome: React.Dispatch<React.SetStateAction<string>>;
    email: string;
    setEmail: React.Dispatch<React.SetStateAction<string>>;
    telefone: string;
    setTelefone: React.Dispatch<React.SetStateAction<string>>;
    linkedin: string;
    setLinkedin: React.Dispatch<React.SetStateAction<string>>;
    resumoProfissional: string;
    setResumoProfissional: React.Dispatch<React.SetStateAction<string>>;
}

export interface PreviewSectionProps {
    experiences: Experience[];
    skills: skill[];
    Nome: string;
    email: string;
    telefone: string;
    linkedin: string;
    resumoProfissional: string;
    ref?: React.RefObject<HTMLDivElement>;
}

export interface ExperienceSectionProps {
    experiences: Experience[];
}

export interface PersonalHeaderProps {
    Nome: string;
    email: string;
    telefone: string;
    linkedin: string;
    resumoProfissional: string;
}

export interface SkillsSectionProps {
    skills: skill[];
}

