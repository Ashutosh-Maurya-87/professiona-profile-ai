import { Variants } from "framer-motion";

export const fadeIn: Variants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,

        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const fadeUp: Variants = {
    hidden: {
        opacity: 0,
        y: 40,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const fadeDown: Variants = {
    hidden: {
        opacity: 0,
        y: -40,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.6,
            ease: "easeOut",
        },
    },
};

export const fadeLeft: Variants = {
    hidden: {
        opacity: 0,
        x: 60,
    },

    visible: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.6,
        },
    },
};

export const fadeRight: Variants = {
    hidden: {
        opacity: 0,
        x: -60,
    },

    visible: {
        opacity: 1,
        x: 0,

        transition: {
            duration: 0.6,
        },
    },
};

export const scaleIn: Variants = {
    hidden: {
        opacity: 0,
        scale: 0.9,
    },

    visible: {
        opacity: 1,
        scale: 1,

        transition: {
            duration: 0.5,
        },
    },
};

export const staggerContainer: Variants = {
    hidden: {},

    visible: {
        transition: {
            staggerChildren: 0.12,
        },
    },
};

export const heroAnimation: Variants = {
    hidden: {
        opacity: 0,
        y: 50,
    },

    visible: {
        opacity: 1,
        y: 0,

        transition: {
            duration: 0.8,
            ease: "easeOut",
        },
    },
};

export const floatingAnimation = {
    animate: {
        y: [0, -10, 0],

        transition: {
            repeat: Infinity,
            duration: 3,
            ease: "easeInOut",
        },
    },
};

export const rotateAnimation = {
    animate: {
        rotate: 360,

        transition: {
            repeat: Infinity,
            ease: "linear",
            duration: 20,
        },
    },
};

export const buttonHover = {
    whileHover: {
        scale: 1.04,
    },

    whileTap: {
        scale: 0.98,
    },
};

export const cardHover = {
    whileHover: {
        y: -6,

        transition: {
            duration: 0.2,
        },
    },
};

export const pageTransition: Variants = {
    hidden: {
        opacity: 0,
    },

    visible: {
        opacity: 1,

        transition: {
            duration: 0.5,
        },
    },

    exit: {
        opacity: 0,

        transition: {
            duration: 0.3,
        },
    },
};