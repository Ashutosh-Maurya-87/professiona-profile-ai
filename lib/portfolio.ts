import about from "@/data/about";
import skills, { allSkills } from "@/data/skills";
import projects, { featuredProjects } from "@/data/projects";
import experiences, { currentCompany } from "@/data/experience";
import education, {
    certifications,
    languages,
    careerObjective,
} from "@/data/education";
import contact, {
    socialLinks,
    resume,
} from "@/data/contact";
import { faqs } from "@/data/faq";

class PortfolioService {
    // ==========================
    // ABOUT
    // ==========================

    getAbout() {
        return about;
    }

    // ==========================
    // SKILLS
    // ==========================

    getSkills() {
        return skills;
    }

    getAllSkills() {
        return allSkills;
    }

    getSkillCategory(category: string) {
        return skills.find(
            (item) =>
                item.title.toLowerCase() ===
                category.toLowerCase()
        );
    }

    // ==========================
    // PROJECTS
    // ==========================

    getProjects() {
        return projects;
    }

    getFeaturedProjects() {
        return featuredProjects;
    }

    getProjectBySlug(slug: string) {
        return projects.find(
            (project) => project.slug === slug
        );
    }

    getProjectByTitle(title: string) {
        return projects.find(
            (project) =>
                project.title.toLowerCase() ===
                title.toLowerCase()
        );
    }

    searchProjects(keyword: string) {
        const search = keyword.toLowerCase();

        return projects.filter((project) => {
            return (
                project.title.toLowerCase().includes(search) ||

                project.description
                    .toLowerCase()
                    .includes(search) ||

                project.technologies.some((tech) =>
                    tech.toLowerCase().includes(search)
                )
            );
        });
    }

    // ==========================
    // EXPERIENCE
    // ==========================

    getExperiences() {
        return experiences;
    }

    getCurrentCompany() {
        return currentCompany;
    }

    // ==========================
    // EDUCATION
    // ==========================

    getEducation() {
        return education;
    }

    getCertifications() {
        return certifications;
    }

    getLanguages() {
        return languages;
    }

    getCareerObjective() {
        return careerObjective;
    }

    // ==========================
    // CONTACT
    // ==========================

    getContact() {
        return contact;
    }

    getSocialLinks() {
        return socialLinks;
    }

    getResume() {
        return resume;
    }

    // ==========================
    // FAQ
    // ==========================

    getFAQs() {
        return faqs;
    }

    // ==========================
    // SEARCH
    // ==========================

    search(keyword: string) {
        return {
            projects: this.searchProjects(keyword),

            skills: allSkills.filter((skill) =>
                skill.toLowerCase().includes(
                    keyword.toLowerCase()
                )
            ),
        };
    }

    // ==========================
    // SUMMARY
    // ==========================

    getPortfolioSummary() {
        return {
            name: about.personal.name,

            role: about.personal.role,

            experience:
                about.recruiterInfo.yearsExperience,

            currentCompany:
                currentCompany?.company ?? "",

            totalProjects: projects.length,

            featuredProjects:
                featuredProjects.length,

            totalSkills: allSkills.length,

            certifications:
                certifications.length,

            education:
                education.length,
        };
    }

    // ==========================
    // COMPLETE PORTFOLIO
    // ==========================

    getPortfolio() {
        return {
            about,

            skills,

            projects,

            experiences,

            education,

            certifications,

            contact,

            socialLinks,

            resume,

            faqs,
        };
    }
}

export const portfolioService =
    new PortfolioService();

export default portfolioService;