import { css } from 'styled-components';
import { type } from './var';

const codecss = `
        margin: 0 0.2em;
        padding-inline: 0.4em;
        font-size: 85%;
        border: 1px solid rgba(100, 100, 100, 0.2);
        border-radius: 0.3em;
        background: rgba(150, 150, 150, 0.1);
        display: inline;
`
const keyboardcss = `
          margin: 0 0.2em;
          padding-inline: 0.4em;
          font-size: 85%;
          border: 1px solid rgba(100, 100, 100, 0.2);
          border-bottom-width: 3px;
          border-radius: 0.3em;
          background: rgba(150, 150, 150, 0.1);
          display: inline;
`
const FontSize = p => {
const text = p.fontSize;
for (const pro in type) {
  if(text === pro){
    return type[pro]; 
  }
}
}

export const typography = css`
    font-size: ${FontSize};
    font-size: ${p => p.fontSize};
    font-weight:${p => p.fontWeight};
    font-style:${p => p.fontStyle};
    ${p =>p.code ? `${codecss}` : 'none'}
    ${p=>p.keyboard ? `${keyboardcss}` : 'none'}
 `