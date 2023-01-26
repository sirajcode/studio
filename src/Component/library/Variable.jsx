// todo
// - set up brand colors for design system ✔

//colors
export const colors = {
        //brand colors 
        red: "#de5050",
        blue: "#494cf0",
        yellow: "#ffb03a",
        green: "#37bc64",
        //soft shades
        redshade: "rgba(222, 80, 80, 0.5)",
        blueshade: "rgba(73, 76, 240, 0.5)",
        yellowshade: "rgba(255, 176, 58, 0.5)",
        greenshade: "rgba(55, 188, 99, 0.5)",
        //text colors
        text: "#565360",
        lable: "#908e9b",
        disable: "#e1dfe9",
        //text (dark mode)
        darktext: "rgba(255, 255, 255,0.96)",
        darklable: "rgba(255, 255, 255,0.67)",
        darkdisable: "rgba(255, 255, 255,0.45)",
        //white colors
        white: "#FAFCFE",
        whiteshade:"#f2f5f5",
        //dark colors
        dark: "#100f10",
        dark2: "#1b1b1b",
        dark3: "#242424",
        darkshade:"#363636",
}

//font - sizes   
export const fontSize = ["0.875rem", "1.125rem", "1.5rem", "1.875rem", "2.25rem"];
fontSize.text = fontSize[0];
fontSize.regular = fontSize[1];
fontSize.small = fontSize[2];
fontSize.medium = fontSize[3];
fontSize.large = fontSize[4];

//font - wieght 
export const fontWieght = ["400","500","600"];
fontWieght.normal = fontWieght[0];
fontWieght.strong = fontWieght[1];
fontWieght.bold = fontWieght[2];

//button sizes 
export const BtnSize = ["0.25rem 0.5625rem", "0.4375rem 1.125rem", "0.75rem 1.25rem"];
BtnSize.small = BtnSize[0];
BtnSize.medium = BtnSize[1];
BtnSize.large = BtnSize[2];

 //Border widths
export const borderWidth = ["0.125rem", "0.1875rem", "0.25rem"];
borderWidth.small = borderWidth[0];
borderWidth.medium = borderWidth[1];
borderWidth.large = borderWidth[2];

// corners
export const RoundConers = ["0.3rem", "0.5rem", "0.7rem", "200rem"];
RoundConers.small = RoundConers[0];
RoundConers.medium = RoundConers[1];
RoundConers.large = RoundConers[2];
RoundConers.exlarge = RoundConers[3];

//spaces
export const spaces = ["0.25rem", "0.5rem", "0.75rem", "1.25rem", "1.5rem", "2rem"];
spaces.smaller = spaces[0];
spaces.small = spaces[1];
spaces.medium = spaces[2];
spaces.large = spaces[3];
spaces.larger = spaces[4];
spaces.extraLarge = spaces[5];

// not tracked

//break points
const breakpoints = ["37.5rem", "56.25rem", "75rem", "112.5rem"];
breakpoints.sm = breakpoints[0];
breakpoints.md = breakpoints[1];
breakpoints.lg = breakpoints[2];
breakpoints.xl = breakpoints[3];


