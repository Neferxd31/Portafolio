export interface IProfile {
  name: string;
  role: string;
  photoUrl: string;
  location: string;
}

export interface IBio {
  description: string;
  experience: string[];
}

export interface ISkill {
  name: string;
  iconUrl: string;
}

// --- NUEVA INTERFAZ PARA EDUCACIÓN ---
export interface IEducation {
  degree: string;      // Título obtenido
  institution: string; // Universidad o Institución
  period: string;      // Fechas
}
// -------------------------------------

export interface IProject {
  id: number;
  title: string;
  description: string;
  imageUrl: string;
  tags: string[];
  linkExternal?: string;
}

export interface IExtra {
  title: string;
  description: string;
  type: 'COURSE' | 'BOOK' | 'CONFERENCE';
  url?: string;
}

export interface IPortfolio {
  profile: IProfile;
  bio: IBio;
  skills: ISkill[];
  education: IEducation[];
  projects: IProject[];
  extras: IExtra[];
  // --- CAMPOS DE CONTACTO ACTUALIZADOS ---
  contactEmail: string;
  contactPhone: string;     // <--- Nuevo
  linkedinUrl: string;      // <--- Nuevo
  githubUrl: string;        // <--- Nuevo
  cvUrl: string;
}