import { createTheme } from "@mui/material/styles";
import { lime } from "@mui/material/colors";
import { SiX } from "react-icons/si";


const myCustomColors = {
    primary: "#112D4E",
    secondary: "#DBE2EF",     //#fe7d0c ORANGE
    white: "#F9F7F7",        //  #FFFFFF       BLANC
    one: "#D3D3D3",
    two: "#FFFFFF",
    three: "#7ABA78",
    four: "#0A6847",
    five: "#E1E5EE",
    SiX: "#0080ff",
};

export const theme = createTheme({
    typography: {
        fontFamily: 'Raleway, sans-serif',
      },
    palette: {
        primary: {
            main: myCustomColors.two,
        },
        secondary: {
            main: myCustomColors.secondary,
        },

        white: {
            main: myCustomColors.white,
        },
        lime: {
            main: lime[500],
        },

        one: {
            main: myCustomColors.one,
        },
        two: {
            main: myCustomColors.two,
        },
        three: {
            main: myCustomColors.three,
        },
        four: {
            main: myCustomColors.SiX,
        },

        five: {
            main: myCustomColors.five,
        },

    },
});