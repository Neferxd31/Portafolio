import { Injectable, signal } from '@angular/core';
import { IPortfolio } from '../models/portfolio.interface';

@Injectable({
  providedIn: 'root'
})
export class PortfolioService {

  private portfolioData = signal<IPortfolio>({
    profile: {
      name: "Nefer Sneyder Rojas",
      role: "Ingeniero de Sistemas en Formación | Desarrollador Web Junior",
      photoUrl: "assets/images/profile.jpg",
      location: "San José de Cúcuta, Colombia"
    },
    bio: {
      description: "Soy estudiante de Ingeniería de Sistemas con una sólida formación en tecnologías de desarrollo web y metodologías ágiles como Scrum. Me caracterizo por ser un profesional curioso, de rápido aprendizaje y con excelentes habilidades comunicativas. Mi experiencia como tutor académico ha fortalecido mi capacidad para trabajar en equipo, liderar procesos de enseñanza y comunicar ideas técnicas con claridad.",
      experience: [
        "Desarrollador Web Junior (Freelance): Marzo 2024 - Presente",
        "Tutor Académico Autónomo: Junio 2022 - Presente",
        "Auxiliar Administrativo (UFPS): Marzo 2025 - Dic 2025",
        "Soporte Técnico (Restaurante Nanking): Junio 2025 - Julio 2025"
      ]
    },
    skills: [
      { name: "HTML5", iconUrl: "devicon-html5-plain colored" },
      { name: "CSS3", iconUrl: "devicon-css3-plain colored" },
      { name: "JavaScript", iconUrl: "devicon-javascript-plain colored" },
      { name: "Angular", iconUrl: "devicon-angularjs-plain colored" },
      { name: "Bootstrap", iconUrl: "devicon-bootstrap-plain colored" },
      { name: "Tailwind", iconUrl: "devicon-tailwindcss-original colored" },
      { name: "Java", iconUrl: "devicon-java-plain colored" },
      { name: "Spring Boot", iconUrl: "devicon-spring-original colored" },
      { name: "Python", iconUrl: "devicon-python-plain colored" },
      { name: "PostgreSQL", iconUrl: "devicon-postgresql-plain colored" },
      { name: "Docker", iconUrl: "devicon-docker-plain colored" },
      { name: "Git", iconUrl: "devicon-git-plain colored" },
      { name: "Linux", iconUrl: "devicon-linux-plain colored" }
    ],
    // --- NUEVA SECCIÓN DE EDUCACIÓN (Tus 4 formaciones) ---
    education: [
      {
        degree: "Ingeniería de Sistemas",
        institution: "Universidad Francisco de Paula Santander",
        period: "2022 - 2027 (En curso)"
      },
      {
        degree: "Tecnólogo en Análisis y Desarrollo de Software",
        institution: "Servicio Nacional de Aprendizaje (SENA)",
        period: "Dic 2025 - Mar 2028 (En curso)"
      },
      {
        degree: "Técnico Laboral en Inglés",
        institution: "Stanford English Academy",
        period: "Feb 2022 - Nov 2025"
      },
      {
        degree: "Técnico en Sistemas y Mantenimiento de Cómputo",
        institution: "Servicio Nacional de Aprendizaje (SENA)",
        period: "Feb 2020 - Nov 2021"
      }
    ],
    // ------------------------------------------------------
    projects: [
      {
        id: 1,
        title: "Study with Nefer",
        description: "Plataforma web para centralizar servicios de asesorías académicas. Facilita el contacto y la agenda de clases para estudiantes y padres.",
        imageUrl: "assets/images/project1.jpg",
        tags: ["HTML5", "CSS3", "JS", "Netlify"],
        linkExternal: "https://studywithnefer.netlify.app/"
      },
      {
        id: 2,
        title: "Quick Delivery",
        description: "App de logística y entregas rápidas. Desarrollo backend robusto con Java Spring Boot y gestión ágil con Scrum.",
        imageUrl: "assets/images/project2.jpg",
        tags: ["Java", "Spring Boot", "Scrum"],
        linkExternal: "https://github.com/Neferxd31/Quick-Delivery"
      },
      {
        id: 3,
        title: "Tymon asesorias",
        description: "Landing page para servicios legales y de transporte. Interfaz moderna y despliegue ágil para captación de clientes.",
        imageUrl: "assets/images/project3.jpg",
        tags: ["HTML5", "CSS3", "JS", "Netlify"],
        linkExternal: "https://tymon.netlify.app/"
      }
    ],
    extras: [
      {
        title: "Curso de Automatizaciones con n8n",
        description: "Platzi (Dic 2025).",
        type: "COURSE"
      },
      {
        title: "Dispositivos de Red y Configuración Inicial",
        description: "Cisco Networking Academy (Nov 2025).",
        type: "COURSE"
      },
      {
        title: "IPv6 Básico - 3ra Edición",
        description: "LACNIC (Oct 2025).",
        type: "COURSE"
      },
      {
        title: "Introducción a Cisco Packet Tracer",
        description: "Cisco Networking Academy (Sept 2025).",
        type: "COURSE"
      },
      {
        title: "Bootcamp Programación",
        description: "MinTIC (Dic 2024).",
        type: "COURSE"
      },
      {
        title: "Estructura del Lenguaje de Programación C++ (Nivel I)",
        description: "Servicio Nacional de Aprendizaje - SENA (Mar 2024).",
        type: "COURSE"
      },
      {
        title: "English Course for Startups",
        description: "Platzi (Feb 2024).",
        type: "COURSE"
      },
      {
        title: "Emprendimiento para Jóvenes",
        description: "Platzi (Ene 2024).",
        type: "COURSE"
      },
      {
        title: "Strategies to Learn English Online",
        description: "Platzi (Ene 2023).",
        type: "COURSE"
      }
    ],
    contactEmail: "nefersneyder31@gmail.com",
    contactPhone: "+57 314 854 8544",
    linkedinUrl: "https://www.linkedin.com/in/nefer-sneyder-rojas-porras-a7ba17280/",
    githubUrl: "https://github.com/Neferxd31",
    cvUrl: "assets/docs/cv-nefer.pdf"

  });

  readonly data = this.portfolioData.asReadonly();
}