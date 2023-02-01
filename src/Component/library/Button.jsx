import styled, { css } from "styled-components";
import { colors, fontWieght, fontSize, BtnSize } from './Variable'
import {Radius,Space,Top,Start,Bottom,End} from './Common'


const Button = styled.button`
border:none;
font-size: ${fontSize.text};
font-weight: ${fontWieght.strong};
border: 1px solid rgba(100, 100, 100, 0.5);
background: rgba(150, 150, 150, 0.1);
cursor: pointer;
display: inline-block;
//border radius
border-radius: ${Radius};
padding: ${p => {
    if (p.sm) return `${BtnSize.small}`
    else if (p.med) return `${BtnSize.medium}`
    else if (p.lg) return `${BtnSize.large}`
    else if (p.oval) return `${BtnSize.circle}`
    return `${BtnSize.medium}`
  }}; 

${p => {
  if (p.primary) {
    return css`
         background-color: ${colors.blue};
         color:${colors.white};
         border: none;
        `;
  }
  else if(p.danger){
      return css`
         background-color: ${colors.red};
         color:${colors.white};
         border: none;
    `;
  }
   else if(p.succes) {
      return css`
        background-color: ${colors.green};
        color:${colors.white};
        border: none;
    `;
  }
   else if(p.dark) {
      return css`
      background-color: ${colors.darkshade};
      color:${colors.whiteshade}; 
      border: none;   
    `;
  }
    }
  }
${p => {
  if (p.primary && p.outline) {
    return css`
      border: 2px solid ${colors.blue};
      color:${colors.blue};
      background: transparent;
        `;
  }

  else if(p.danger && p.outline){
      return css`
      border: 2px solid ${colors.red};
      color:${colors.red};
      background:transparent;
    `;
  }
   else if(p.succes && p.outline) {
      return css`
      border: 2px solid ${colors.green};
      color:${colors.green};
      background:transparent;
    `;
  }
  
  else if(p.dark && p.outline) {
    return css`
      border:2px solid ${colors.darkshade};
      color:${colors.darkshade};
      background: transparent;
    `;
     }
    }
  }
//margins
  margin:${Space};
  margin-top:${Top};
  margin-bottom:${Bottom};
  margin-left:${Start};
  margin-right:${End};

`

export default Button
