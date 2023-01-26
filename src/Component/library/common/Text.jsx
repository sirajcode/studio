import styled ,{ css } from "styled-components";
import {colors, fontSize, fontWieght }from "../Variable";
//todo
// props are changed accordingly
// code properties is pretty messed up

const Text = styled.p`

// font size

font-size:${(props) => {
  if (props.regular) return `${fontSize.regular}`
  else if (props.smallHeading) return `${fontSize.small}`
  else if(props.mediumHeading) return `${fontSize.medium}`
  else if(props.largeHeading) return `${fontSize.large}`
  return `${fontSize.text}`
}};

//font wieght
font-weight: ${(props) =>{
      if(props.strong) return `${fontWieght.strong}`
      else if(props.bold) return `${fontWieght.bold}`
   return `${fontWieght.normal}`
}}; 
//font style
font-style: ${props => props.italic ? 'italic' : 'normal'};
//text alignement
text-align: ${(props) => {
    if (props.center) return 'center'
    else if (props.right) return 'right'
    return  'left'
}};
//font  color
color: ${(props) => {
    if (props.primary) return `${colors.primary}`
      else if(props.secondary) return`${colors.secondary}`
      else if(props.tertiary) return `${colors.tertiary}`
      else if(props.dark) return `${colors.dark}`
      else if(props.success) return `${colors.success}`
      else if(props.text) return `${colors.text}`
      else if(props.subtleText) return `${colors.subtleText}`
      else if(props.accent) return `${colors.accent}`
      else if(props.light) return `${colors.light}`
      else if(props.white) return `${colors.white}`
  return 'none'
}};  
//bakground  color
background-color: ${({bg}) => {
    if (bg=== 'primary') return `${colors.primary}`
      else if(bg === 'secondary') return `${colors.secondary}`
      else if(bg === 'tertiary') return `${colors.tertiary}`
      else if(bg === 'dark') return `${colors.dark}`
      else if(bg === 'success') return `${colors.success}`
      else if(bg === 'text') return `${colors.text}`
      else if(bg === 'subtleText') return `${colors.subtleText}`
      else if(bg === 'accent') return `${colors.accent}`
      else if(bg === 'light') return `${colors.light}`
      else if(bg === 'white') return `${colors.white}`
  return 'none'
}};
//line throgh
text-decoration-line: ${props => props.deleted ? 'line-through' : 'none'};
 ${(props) => {
  if (props.code) {
    return css`
        margin: 0 0.2em;
        padding-inline: 0.4em;
        font-size: 85%;
        border: 1px solid rgba(100, 100, 100, 0.2);
        border-radius: 0.3em;
        background: rgba(150, 150, 150, 0.1);
        display: inline;
        `;
     }
  else if(props.keyboard) {
      return css`
          margin: 0 0.2em;
          padding-inline: 0.4em;
          font-size: 85%;
          border: 1px solid rgba(100, 100, 100, 0.2);
          border-bottom-width: 3px;
          border-radius: 0.3em;
          background: rgba(150, 150, 150, 0.1);
          display: inline;
    `;
      }
    }
  }
`
export default Text
