import styled from 'styled-components'
import {Space,Top,Start,Bottom,End,Weight,textSize,Style,Align,Radius, textColor, backGround, Padding,PaddingStart,PaddingBottom,PaddingTop, PaddingEnd, Width} from './Common'

/* 
 todo: 
 - re-desiging section box ✔
 - adding new component as card  ✔
 - adding some end user desinging to box and cards ❌
 - refine flexbox card ✔
 - refine columns card ✔
*/

export const Section = styled.div`
font-size:${textSize};
font-weight: ${Weight};
font-style: ${Style};
text-align: ${Align};
border-radius: ${Radius}; 
color: ${textColor};   
background-color: ${backGround}; 
${p => p.border ? 'border: 1px solid rgba(100, 100, 100, 0.1);' : 'none'};
//margins
margin:${Space};
margin-top:${Top};
margin-bottom:${Bottom};
margin-left:${Start};
margin-right:${End};
//paddings
padding: ${Padding}; 
padding-top: ${PaddingTop}; 
padding-left: ${PaddingStart}; 
margin-right: ${PaddingEnd}; 
padding-bottom: ${PaddingBottom}; 
//width
width:${Width};
` 

// todo: flex card
// its works well really ok
const FlexStyles = styled.div`
  display: flex;
  flex-direction: ${p => p.flexDirection};
  align-items: ${p => p.alignItems};
  justify-content: ${p => p.justifyContent};
  width:${p=>p.width};
  height:${p=>p.height};
`
export const Flex = ({ 
    children,
    flexDirection,
    alignItems,
    justifyContent,
    width,
    height,
}) => {
    return (
        <FlexStyles
            flexDirection={flexDirection}
            alignItems={alignItems}
            justifyContent={justifyContent}
            width={width}
            height={height}
        >{children}</FlexStyles>
    );
};

// todo: column
export const Column = styled.div`
width: ${p => {
        if (p.three) return '33.33%'
        else if (p.four) return '25%'
        else if(p.two) return '50%'
        return '0'
}};

// space  top/left/right/bottom ✔
//margins
margin:${Space};
margin-top:${Top};
margin-bottom:${Bottom};
margin-left:${Start};
margin-right:${End};
//paddings
padding: ${Padding}; 
padding-top: ${PaddingTop}; 
padding-left: ${PaddingStart}; 
margin-right: ${PaddingEnd}; 
padding-bottom: ${PaddingBottom}; 
`
export const Grid = styled.div`
width:${Width};
`


// export const Card = styled.div`
// font-size:${textSize};
// font-weight: ${Weight};
// font-style: ${Style};
// text-align: ${Align};
// border-radius: ${Radius}; 
// color: ${textColor};   
// background-color: ${backGround}; 
// ${p => p.border ? 'border: 1px solid rgba(100, 100, 100, 0.1);' : 'none'};
// //margin
// margin:${Space};
// margin-top:${Top};
// margin-bottom:${Bottom};
// margin-left:${Start};
// margin-right:${End};
// //paddings
// padding: ${Padding}; 
// padding-top: ${PaddingTop}; 
// padding-left: ${PaddingStart}; 
// margin-right: ${PaddingEnd}; 
// padding-bottom: ${PaddingBottom}; 
// //width
// width:${Width};
// `;