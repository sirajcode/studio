import styled ,{ css } from "styled-components";
import {colors, fontSize, fontWieght }from "../Variable";

const Text = styled.p`

// font size
font-size:${p => {
  if (p.regular) return `${fontSize.regular}`
  else if (p.smallHeading) return `${fontSize.small}`
  else if(p.mediumHeading) return `${fontSize.medium}`
  else if(p.largeHeading) return `${fontSize.large}`
  return `${fontSize.text}`
}};

//font wieght
font-weight: ${p =>{
      if(p.strong) return `${fontWieght.strong}`
      else if(p.bold) return `${fontWieght.bold}`
   return `${fontWieght.normal}`
}}; 
//font style
font-style: ${p => p.italic ? 'italic' : 'normal'};
//text alignement
text-align: ${p => {
    if (p.center) return 'center'
    else if (p.right) return 'right'
    return  'left'
}};
//font  color
color: ${p => {
    if (p.primary) return `${colors.blue}`
      else if(p.succes) return`${colors.green}`
      else if(p.danger) return `${colors.red}`
      else if(p.warning) return `${colors.yellow}`
      else if(p.text) return `${colors.text}`
      else if(p.label) return `${colors.lable}`
      else if(p.disable) return `${colors.disable}`
      else if(p.darktext) return `${colors.darktext}`
      else if(p.darklabel) return `${colors.darklable}`
      else if(p.darkdisable) return `${colors.darkdisable}`
  return 'none'
}};  
//bakground  color
background-color: ${({bg}) => {
    if (bg=== 'primary') return `${colors.blue}`
      else if(bg === 'danger') return `${colors.red}`
      else if(bg === 'succes') return `${colors.green}`
      else if(bg === 'warning') return `${colors.yellow}`
      else if(bg === 'dangershade') return `${colors.redshade}`
      else if(bg === 'primaryshade') return `${colors.blueshade}`
      else if(bg === 'warningshade') return `${colors.yellowshade}`
      else if(bg === 'white') return `${colors.white}`
      else if(bg === 'whiteshade') return `${colors.whiteshade}`
      else if(bg === 'dark') return `${colors.dark}`
      else if(bg === 'darkshade') return `${colors.darkshade}`
  return 'none'
}};
//line throgh
text-decoration-line: ${p => p.deleted ? 'line-through' : 'none'};
 ${(p) => {
  if (p.code) {
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
  else if(p.keyboard) {
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
