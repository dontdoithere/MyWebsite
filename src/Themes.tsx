// color design tokens export
export const colorTokens = {
    grey: {
        0: "#FFFFFF",
        10: "#F6F6F6",
        50: "#F0F0F0",
        100: "#E0E0E0",
        200: "#C2C2C2",
        300: "#A3A3A3",
        400: "#858585",
        500: "#666666",
        600: "#4D4D4D",
        700: "#333333",
        800: "#1A1A1A",
        900: "#0A0A0A",
        1000: "#000000",
    },
    primary: {
        50: "#e3e7ff",
        100: "#bac0ff",
        200: "#8f98ff",
        300: "#646fff",
        400: "#3a47ff",
        500: "#4759fd",
        600: "#1b23c5",
        700: "#10187f",
        800: "#0a1051",
        900: "#03021f",
    },
};

// palette structure for mui theme
interface Palette {
    dark: string,
    main: string,
    light: string
}

interface Neutral {
    dark: string,
    main: string,
    mediumMain: string,
    medium: string,
    light: string
}

interface Background {
    default: string,
    alt: string
}

interface PaletteOptions {
    primary?: Palette;
    neutral?: Neutral;
    background?: Background;
    mode?: 'dark' | 'light';
}


interface Mode {
    primary: Palette,
    neutral: Neutral,
    background: Background
}

// typography structure for mui theme
interface TypographyElement {
    fontFamily: string,
    fontSize: number
}

interface Typography {
    fontFamily: string,
    fontSize: number,
    h1: TypographyElement,
    h2: TypographyElement,
    h3: TypographyElement,
    h4: TypographyElement,
    h5: TypographyElement,
    h6: TypographyElement,
}

// mui theme settings

export const themeSettings = (mode: 'dark' | 'light'): PaletteOptions => {
    return {
        mode: mode,
        ...(mode === "dark" ? {
            // palette values for dark mode
            primary: {
                dark: colorTokens.primary[200],
                main: colorTokens.primary[500],
                light: colorTokens.primary[800],
            },
            neutral: {
                dark: colorTokens.grey[100],
                main: colorTokens.grey[200],
                mediumMain: colorTokens.grey[300],
                medium: colorTokens.grey[400],
                light: colorTokens.grey[700],
            },
            background: {
                default: colorTokens.grey[900],
                alt: colorTokens.grey[800],
            }
        } : {
            // palette values for light mode
            primary: {
                dark: colorTokens.primary[700],
                main: colorTokens.primary[500],
                light: colorTokens.primary[50],
            },
            neutral: {
                dark: colorTokens.grey[700],
                main: colorTokens.grey[500],
                mediumMain: colorTokens.grey[400],
                medium: colorTokens.grey[300],
                light: colorTokens.grey[50],
            },
            background: {
                default: colorTokens.grey[10],
                alt: colorTokens.grey[0],
            }
        }),
    };
};