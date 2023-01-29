import styled, { css } from "styled-components";
import { colors, fontWieght, fontSize, BtnSize, RoundConers, borderWidth, spaces } from '../Variable'


const Button = styled.button`
border:none;
font-size: ${fontSize.text};
font-weight: ${fontWieght.strong};
border: 1px solid rgba(100, 100, 100, 0.5);
background: rgba(150, 150, 150, 0.1);
cursor: pointer;
display: inline-block;
border-radius: ${p => {
    if (p.round) return `${RoundConers.round}`
    else if (p.circle) return `${RoundConers.circle}`
    return 'none'
}}; 
padding: ${p => {
    if (p.sm) return `${BtnSize.small}`
    else if (p.med) return `${BtnSize.medium}`
    else if (p.lg) return `${BtnSize.large}`
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
      color:${colors.darkshade}; 
      border: none;   
    `;
  }
    }
  }
${p => {
  if (p.primary && p.outline) {
    return css`
      border: 2px solid   ${colors.blue};
      color:   ${colors.blue};
      background: transparent;
        `;
  }

  else if(p.danger && p.outline){
      return css`
      border: 2px solid   ${colors.red};
      color:   ${colors.red};
      background: transparent;
    `;
  }
   else if(p.succes && p.outline) {
      return css`
      border: 2px solid  ${colors.green};
      color:  ${colors.green};
      background: transparent;
    `;
  }
  
  else if(p.dark && p.outline) {
    return css`
      border: 2px solid ${colors.darkshade};
      color: ${colors.darkshade};
      background: transparent;
    `;
     }
    }
  }

// ! button space  top/left/right/bottom ✔

margin: ${({ space }) => {
      if(space === '1') return `${spaces.smaller}`
      else if(space === '2')  return `${spaces.small}`
      else if(space === '3')  return `${spaces.medium}`
      else if(space === '4')  return `${spaces.large}`
      else if(space === '5')  return `${spaces.larger}`
      else if(space === '6')  return `${spaces.extraLarge}`
  return 'none'
}}; 
margin-top: ${({ top }) => {
      if(top === '1') return `${spaces.smaller}`
      else if(top === '2')  return `${spaces.small}`
      else if(top === '3')  return `${spaces.medium}`
      else if(top === '4')  return `${spaces.large}`
      else if(top === '5')  return `${spaces.larger}`
      else if(top === '6')  return `${spaces.extraLarge}`
  return 'none'
}}; 
margin-bottom: ${({ start }) => {
      if(start === '1') return `${spaces.smaller}`
      else if(start === '2')  return `${spaces.small}`
      else if(start === '3')  return `${spaces.medium}`
      else if(start === '4')  return `${spaces.large}`
      else if(start === '5')  return `${spaces.larger}`
      else if(start === '6')  return `${spaces.extraLarge}`
  return 'none'
}}; 
margin-right: ${({ end }) => {
      if(end === '1') return `${spaces.smaller}`
      else if(end === '2')  return `${spaces.small}`
      else if(end === '3')  return `${spaces.medium}`
      else if(end === '4')  return `${spaces.large}`
      else if(end === '5')  return `${spaces.larger}`
      else if(end === '6')  return `${spaces.extraLarge}`
  return 'none'
}}; 
margin-left: ${({ bottom }) => {
      if(bottom === '1') return `${spaces.smaller}`
      else if(bottom === '2')  return `${spaces.small}`
      else if(bottom === '3')  return `${spaces.medium}`
      else if(bottom === '4')  return `${spaces.large}`
      else if(bottom === '5')  return `${spaces.larger}`
      else if(bottom === '6')  return `${spaces.extraLarge}`
  return 'none'
 }}; 
`

export default Button
