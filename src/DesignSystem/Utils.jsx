
import styled from 'styled-components'

const Flex = styled.div`
    display: flex; 
    flex-wrap: ${({wrapReverse,noWrap}) => {
        if (wrapReverse ==='wrapReverse') return 'wrap-reverse'
        else if (noWrap==='noWrap') return 'nowrap'
        return 'wrap'
    }};
    justify-content: ${({justifyCenter,justifyAround,justifyBetween,justifyEnd}) => {
        if (justifyCenter==='justifyCenter') return 'center'
        else if (justifyAround==='justifyAround') return 'space-around'
        else if (justifyBetween==='justifyBetween') return 'space-between'
        else if (justifyEnd==='justifyEnd') return 'flex-end'
        return 'flex-start'
    }};
    align-items: ${({alignStretch,alignEnd,alignCenter,alignBaseline}) => {
        if (alignStretch==='alignStretch') return 'stretch'
        else if (alignEnd==='alignEnd') return 'flex-end'
        else if (alignCenter==='alignCenter') return 'center'
        else if (alignBaseline==='alignBaseline') return 'baseline'
        return 'flex-start'
    }};
    align-content: ${({contentStart,contentEnd,contentCenter,contentBetween,contentAround}) => {
       if (contentStart==='contentStart') return 'flex-start'
        else if (contentEnd==='contentEnd') return 'flex-end'
        else if (contentCenter==='contentCenter') return 'center'
        else if (contentBetween==='contentBetween') return 'space-between'
        else if (contentAround==='contentAround') return 'contentAround'
        return 'stretch'
    }};
    flex-direction: ${({ column, row,rowRevese,columnReverse }) => {
    if (column === 'column') return 'column' 
    else if (row === 'row') return 'row'
    else if(rowRevese ==='row-reverse') return 'row-reverse'
    else if (columnReverse === 'column-reverse') return 'row-reverse'
    return 'none'
    }};
`
export const Column = styled.div`
    width: ${({three,four,two}) => {
        if (three ==='three') return '33.33%'
        else if (four === 'four') return '25%'
        else if(two==='two') return '50%'
        return '0'
    }};
    padding: ${props => (props.noPadding ? 0 : '15px')};
`

export default Flex





// colors 

// const colors = {
// primary: "#ED4B9E",
// secondary: "#4B4DED",
// tertiary: "#F3D9DA",
// dark: "#0E0E2C",
// success: "#31D0AA",
// text: "#4A4A68",
// subtleText: "#8C8CA1",
// accent: "#ECF1F4",
// light: "#FAFCFE",
// white: "#FFFFFF",
// };

// const {
//     primary,
//     secondary,
//     tertiary,
//     dark,
//     success,
//     text,
//     subtleText,
//     accent,
//     light,
//     white,
// } = color;

// export default colors

// font sizes

// const fontSizes = ["10px", "12px", "14px", "16px", "24px", "40px", "64px"];
// const [ExtraSmall, Smaller, Small, Medium, Large, Larger, ExtraLarger] = fontSizes; 


// const abcd = ["10px", "12px", "14px", "16px", "24px", "40px", "64px"];
// fontSizes.extraSmall = fontSizes[0];
// fontSizes.smaller = fontSizes[1];
// fontSizes.small = fontSizes[2];
// fontSizes.medium = fontSizes[3];
// fontSizes.large = fontSizes[4];
// fontSizes.larger = fontSizes[5];
// fontSizes.extraLarge = fontSizes[6];

// break points 

// const breakpoints = ["600px", "900px", "1200px", "1800px"];
// const [sm, md, lg, xl] = breakpoints;

// breakpoints.sm = breakpoints[0];
// breakpoints.md = breakpoints[1];
// breakpoints.lg = breakpoints[2];
// breakpoints.xl = breakpoints[3];

// spaces 

// const spaces = ["4px", "8px", "16px", "32px", "48px", "56px"];
// const [xsm_space, sm_space ,md_space, lg_space, xlg_space, xxlg_space] = spaces;

// spaces.smaller = spaces[0];
// spaces.small = spaces[1];
// spaces.medium = spaces[2];
// spaces.large = spaces[3];
// spaces.larger = spaces[4];
// spaces.extraLarge = spaces[5];

