import styled, { css } from "styled-components";
import { colors, fontWieght, fontSize, BtnSize } from './Variable'
import {textColor,Radius,Space,Top,Start,Bottom,End} from './Common'
import { Link } from "react-router-dom";


export const Button = styled.button`  
border:none;
font-size: ${fontSize.text};
font-weight: ${fontWieght.strong};
cursor: pointer;
outline: none;
display: inline-block;
//border radius
border-radius: ${Radius};
padding: ${p => {
    if (p.sm) return `${BtnSize.small}`
    else if (p.med) return `${BtnSize.medium}`
    else if (p.lg) return `${BtnSize.large}`
    else if (p.oval) return `${BtnSize.circle}`
    return `none`
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
else if(p.default){
      return css`
         border: 1px solid rgba(100, 100, 100, 0.5);
         background: rgba(150, 150, 150, 0.1); 
          color:${colors.darktext};
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
     else if(p.default && p.outline){
      return css`
      border: 2px solid ${colors.white};
      color:${colors.white};
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
  :hover{
  opacity: .6;
  transition: ease-in 300ms;
  transition: ease-out 300ms;
}

`
export const StyledLink = styled(Link)`
  text-decoration: none;
  color: ${textColor};
  font-size: inherit;
  cursor: pointer;
  :hover{
  opacity: .6;
  transition: ease-in 300ms;
  transition: ease-out 300ms;
}
//margins
  margin:${Space};
  margin-top:${Top};
  margin-bottom:${Bottom};
  margin-left:${Start};
  margin-right:${End};
`