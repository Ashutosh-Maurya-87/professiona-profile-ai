/**
 * Personal Information
 */
export interface PersonalInfo {
    name: string;
    role: string;
    available: boolean;
    location: string;
    email: string;
    phone: string;
    github: string;
    linkedin: string;
    portfolio: string;
    resume: string;
}

/**
 * Hero Section
 */
export interface HeroInfo {
    title: string;
    subtitle: string;
    description: string;
    availableText: string;
}

/**
 * About Section
 */
export interface AboutInfo {
    title: string;
    description: string;
}

/**
 * Statistics
 */
export interface StatItem {
    title: string;
    value: string;
}

/**
 * Recruiter Information
 */
export interface RecruiterInfo {
    yearsExperience: number;
    totalProjects: number;
    currentRole: string;
    specialization: string[];
    openToWork: boolean;
}

/**
 * About Data
 */
export interface AboutData {
    personal: PersonalInfo;
    hero: HeroInfo;
    about: AboutInfo;
    stats: StatItem[];
    highlights: string[];
    recruiterInfo: RecruiterInfo;
}

/**
 * Skill Category
 */
export interface SkillCategory {
    title: string;
    description: string;
    skills: string[];
}

/**
 * Project
 */
export interface Project {
    id: number;
    title: string;
    slug: string;
    featured: boolean;
    company: string;
    role: string;
    duration: string;
    description: string;
    problem: string;
    solution: string;
    impact: string[];
    technologies: string[];
    features: string[];
    github?: string;
    live?: string;
    image?: string;
}

/**
 * Experience
 */
export interface Experience {
    id: number;
    company: string;
    designation: string;
    employmentType: string;
    duration: string;
    location: string;
    current: boolean;
    summary: string;
    achievements: string[];
    technologies: string[];
}

/**
 * Education
 */
export interface Education {
    id: number;
    degree: string;
    institute: string;
    duration: string;
    percentage?: string;
    location: string;
    description: string;
}

/**
 * Certification
 */
export interface Certification {
    id: number;
    title: string;
    organization: string;
    year: string;
    credentialUrl?: string;
    skills: string[];
}

/**
 * Contact
 */
export interface ContactInfo {
    email: string;
    phone: string;
    whatsapp: string;
    location: string;
    availability: string;
    timezone: string;
}

/**
 * Social Link
 */
export interface SocialLink {
    id: number;
    title: string;
    username: string;
    url: string;
    icon: string;
}

/**
 * Resume
 */
export interface Resume {
    title: string;
    file: string;
    downloadName: string;
}

/**
 * FAQ
 */
export interface FAQ {
    question: string;
    answer: string;
}

/**
 * Site Configuration
 */
export interface SiteConfig {
    title: string;
    shortTitle: string;
    description: string;
    url: string;
    author: string;
    keywords: string[];
    logo: string;
    favicon: string;
    ogImage: string;
}

/**
 * Complete Portfolio
 */
export interface Portfolio {
    about: AboutData;
    skills: SkillCategory[];
    projects: Project[];
    experiences: Experience[];
    education: Education[];
    certifications: Certification[];
    contact: ContactInfo;
    faqs: FAQ[];
}