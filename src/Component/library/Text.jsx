import styled ,{ css } from "styled-components";
import {textSize,textColor,backGround,Weight,Style,Align, Space,Top, Bottom,Start,End} from "./Common";

const Text = styled.p`
font-size: ${textSize};
font-weight: ${Weight}; 
font-style: ${Style};
color:${textColor};
background-color:${backGround};
text-align:${Align};
text-decoration-line: ${p => p.deleted ? 'line-through' : 'none'};
//margins
margin:${Space};
margin-top:${Top};
margin-bottom:${Bottom};
margin-left:${Start};
margin-right:${End};
//other props
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
