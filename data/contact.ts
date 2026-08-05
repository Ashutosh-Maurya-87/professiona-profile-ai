export interface SocialLink {
    id: number;
    title: string;
    username: string;
    url: string;
    icon: string;
}

export interface ContactInfo {
    email: string;
    phone: string;
    whatsapp: string;
    location: string;
    availability: string;
    timezone: string;
}

export const contact: ContactInfo = {
    email: "ashumaurya486@gmail.com",

    phone: "+91-6387527257",

    whatsapp: "916387527257",

    location: "Ayodhya, Uttar Pradesh, India",

    availability: "Open to Work",

    timezone: "IST (UTC +5:30)",
};

export const socialLinks: SocialLink[] = [
    {
        id: 1,

        title: "GitHub",

        username: "Ashutosh-Maurya-87",

        url: "https://github.com/Ashutosh-Maurya-87",

        icon: "github",
    },

    {
        id: 2,

        title: "LinkedIn",

        username: "ashutosh-maurya-react",

        url: "https://linkedin.com/in/ashutosh-maurya-react",

        icon: "linkedin",
    },

    {
        id: 3,

        title: "Email",

        username: "ashumaurya486@gmail.com",

        url: "mailto:ashumaurya486@gmail.com",

        icon: "mail",
    },

    {
        id: 4,

        title: "Phone",

        username: "+91 6387527257",

        url: "tel:+916387527257",

        icon: "phone",
    },

    {
        id: 5,

        title: "WhatsApp",

        username: "+91 6387527257",

        url: "https://wa.me/916387527257",

        icon: "message-circle",
    },
];

export const resume = {
    title: "Ashutosh Maurya Resume",

    file: "/resume/Ashutosh-Maurya-Resume.pdf",

    downloadName: "Ashutosh-Maurya-Resume.pdf",
};

export const contactActions = [
    {
        title: "Download Resume",

        action: "resume",
    },

    {
        title: "Send Email",

        action: "email",
    },

    {
        title: "Open LinkedIn",

        action: "linkedin",
    },

    {
        title: "Open GitHub",

        action: "github",
    },

    {
        title: "Call",

        action: "phone",
    },
];

export default contact;