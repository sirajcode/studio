import {css} from 'styled-components'
import {vars} from './var'



const backGround = p => {
const BgName = p.backgroundColor;
for (const per in vars) {
  if(BgName === per){
      return vars[per];
  }
}
}

const Color = p => {
const ColorName = p.color;
for (const pro in vars) {
  if(ColorName === pro){
    return vars[pro]; 
  }
}
}

export const color = css`
    background-color:${p => p.backgroundColor};
    background-color:${backGround};
    color:${p => p.color};
    color: ${Color};
`





