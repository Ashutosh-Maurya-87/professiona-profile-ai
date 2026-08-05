"use client";

import {
    createContext,
    useContext,
    useEffect,
    useState,
    ReactNode,
} from "react";

export type Theme = "light" | "dark";

interface ThemeContextType {
    theme: Theme;
    setTheme: (theme: Theme) => void;
    toggleTheme: () => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(
    undefined
);

interface ThemeProviderProps {
    children: ReactNode;
}

export default function ThemeProvider({
    children,
}: ThemeProviderProps) {
    const [theme, setThemeState] = useState<Theme>("dark");

    useEffect(() => {
        const storedTheme = localStorage.getItem(
            "portfolio-theme"
        ) as Theme | null;

        if (storedTheme) {
            setThemeState(storedTheme);
        }
    }, []);

    useEffect(() => {
        document.documentElement.dataset.theme = theme;

        localStorage.setItem(
            "portfolio-theme",
            theme
        );
    }, [theme]);

    const setTheme = (theme: Theme) => {
        setThemeState(theme);
    };

    const toggleTheme = () => {
        setThemeState((prev) =>
            prev === "dark" ? "light" : "dark"
        );
    };

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                toggleTheme,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}

export function useTheme() {
    const context = useContext(ThemeContext);

    if (!context) {
        throw new Error(
            "useTheme must be used inside ThemeProvider"
        );
    }

    return context;
}