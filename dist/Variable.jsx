// todo
// - set up brand colors for design system ✔

//colors
export const colors = {
        //brand colors 
        red: "#DD2C00",
        blue: "#0288D1",
        yellow: "#FFAB00",
        green: "#00C853",
        //soft shades
        redshade: "#FF6E40",
        blueshade: "#64B5F6",
        yellowshade: "#FFD740",
        greenshade: "#69F0AE",
        //white colors
        white: "#E0E0E0",
        whiteshade:"#BDBDBD",
        //dark colors
        dark: "#212121",
        darkshade:"#424242",
        //dark backgrounds
        bg1: "#1b1b1b",
        bg2: "#242424",
        //text colors
        text: "#212121",
        lable: "#616161",
        disable: "#9E9E9E",
        //text (dark mode)
        darktext: "#E0E0E0",
        darklable: "#9E9E9E",
        darkdisable: "#616161",
        
}

//font - sizes            14px          18px       24px        30px      36px
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
export const BtnSize = ["0.25rem 0.5625rem", "0.4375rem 1.125rem", "0.75rem 1.25rem" ,"5px 5px 0.1px 5px"];
BtnSize.small = BtnSize[0];
BtnSize.medium = BtnSize[1];
BtnSize.large = BtnSize[2];
BtnSize.circle = BtnSize[3];

 //Border widths
export const borderWidth = ["0.125rem", "0.1875rem", "0.25rem"];
borderWidth.small = borderWidth[0];
borderWidth.medium = borderWidth[1];
borderWidth.large = borderWidth[2];

// corners
export const RoundConers = [ "0.75rem", "200rem"];
RoundConers.round = RoundConers[0];
RoundConers.circle = RoundConers[1];


//spaces
export const spaces = ["0.25rem", "0.5rem", "0.75rem", "1.25rem", "1.5rem", "2rem"];
spaces.smaller = spaces[0];
spaces.small = spaces[1];
spaces.medium = spaces[2];
spaces.large = spaces[3];
spaces.larger = spaces[4];
spaces.extraLarge = spaces[5];

//grid
export const grid = ["10%", "20%", "30%", "40%", "50%", "60%", "70%", "80%", "90%"];
grid.grid1 = grid[0];
grid.grid2 = grid[1];
grid.grid3 = grid[2];
grid.grid4 = grid[3];
grid.grid5 = grid[4];
grid.grid6 = grid[5];
grid.grid7 = grid[6];
grid.grid8 = grid[7];
grid.grid9 = grid[8];

//columns
export const Wide = ["100%", "49%", "32%", "24%", "19%", "15.667%", "13.28571%"];
Wide.one = Wide[0];
Wide.two = Wide[1];
Wide.three = Wide[2];
Wide.four = Wide[3];
Wide.five = Wide[4];
Wide.six = Wide[5];
Wide.seven = Wide[6];
//break points
const breakpoints = {
  sm: '37.5rem',
  med: '56.25rem',
  lg: '75rem',
  xl: '112.5rem',
}
export const device = {
  phone: `(max-width: ${breakpoints.sm})`,
  tab: `(min-width: ${breakpoints.med})`,
  laptop: `(min-width: ${breakpoints.lg})`,
  desktop: `(min-width: ${breakpoints.xl})`,
};

//import { device } from '';

//  @media ${device.laptop} {}