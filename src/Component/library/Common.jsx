import {css} from 'styled-components'
import { RoundConers, spaces, colors, fontSize, fontWieght,grid} from './Variable'

// font size
export const textSize = css`${p => {
  if (p.regular) return `${fontSize.regular}`
  else if (p.smallHeading) return `${fontSize.small}`
  else if(p.mediumHeading) return `${fontSize.medium}`
  else if(p.largeHeading) return `${fontSize.large}`
    return `${fontSize.text}` 
}};`
// font weight
export const Weight =css `${p =>{
      if(p.strong) return `${fontWieght.strong}`
      else if(p.bold) return `${fontWieght.bold}`
   return `${fontWieght.normal}`
}};`
//style
export const Style = css`${props => props.italic ? 'italic' : 'normal'};`
//Align
export const Align = css`${p => {
    if (p.center) return 'center'
    else if (p.right) return 'right'
    return  'left'
}};
`
//font  color
export const textColor = css`${p => {
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
}};`

//backgorund
export const backGround  = css`${({bg}) => {
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
}};`
//border radius
export const Radius = css` ${p => {
    if (p.round) return `${RoundConers.round}`
    else if (p.circle) return `${RoundConers.circle}`
    return 'none'
}};`
//width
export const Width=css`${({width}) => {
    if(width==='1') return '10%'
    else if(width==='2') return `${grid.grid1}`
    else if(width==='3') return `${grid.grid2}`
    else if(width==='4') return `${grid.grid3}`
    else if(width==='5') return `${grid.grid4}`
    else if(width==='6') return `${grid.grid5}`
    else if(width==='7') return `${grid.grid6}`
    else if(width==='8') return `${grid.grid7}`
    else if(width==='9') return `${grid.grid8}`
}}`
 //margin
 export const Space =css `${({ Space }) => {
      if(Space === '1') return `${spaces.smaller}`
      else if(Space === '2')  return `${spaces.small}`
      else if(Space === '3')  return `${spaces.medium}`
      else if(Space === '4')  return `${spaces.large}`
      else if(Space === '5')  return `${spaces.larger}`
      else if(Space === '6')  return `${spaces.extraLarge}`
  return 'none'
}}; `
//top
export const Top =css `${({ Top }) => {
      if(Top === '1') return `${spaces.smaller}`
      else if(Top === '2')  return `${spaces.small}`
      else if(Top === '3')  return `${spaces.medium}`
      else if(Top === '4')  return `${spaces.large}`
      else if(Top === '5')  return `${spaces.larger}`
      else if(Top === '6')  return `${spaces.extraLarge}`
  return 'none'
}}; `
//left
export const Start = css`${({ Start }) => {
      if(Start === '1') return `${spaces.smaller}`
      else if(Start === '2')  return `${spaces.small}`
      else if(Start === '3')  return `${spaces.medium}`
      else if(Start === '4')  return `${spaces.large}`
      else if(Start === '5')  return `${spaces.larger}`
      else if(Start === '6')  return `${spaces.extraLarge}`
  return 'none'
}}; `
//bottom
export const Bottom =css`${({ Bottom }) => {
      if(Bottom === '1') return `${spaces.smaller}`
      else if(Bottom === '2')  return `${spaces.small}`
      else if(Bottom === '3')  return `${spaces.medium}`
      else if(Bottom === '4')  return `${spaces.large}`
      else if(Bottom === '5')  return `${spaces.larger}`
      else if(Bottom === '6')  return `${spaces.extraLarge}`
  return 'none'
 }}; `
//right
export const End =css`${({ End }) => {
      if(End === '1') return `${spaces.smaller}`
      else if(End === '2')  return `${spaces.small}`
      else if(End === '3')  return `${spaces.medium}`
      else if(End === '4')  return `${spaces.large}`
      else if(End === '5')  return `${spaces.larger}`
      else if(End === '6')  return `${spaces.extraLarge}`
  return 'none'
}}; 
`
//Padded
 export const Padding =css `${({ Padded }) => {
      if(Padded === '1') return `${spaces.smaller}`
      else if(Padded === '2')  return `${spaces.small}`
      else if(Padded === '3')  return `${spaces.medium}`
      else if(Padded === '4')  return `${spaces.large}`
      else if(Padded === '5')  return `${spaces.larger}`
      else if(Padded === '6')  return `${spaces.extraLarge}`
  return 'none'
}}; `
//top
export const PaddingTop =css `${({ PaddedTop }) => {
      if(PaddedTop === '1') return `${spaces.smaller}`
      else if(PaddedTop === '2')  return `${spaces.small}`
      else if(PaddedTop === '3')  return `${spaces.medium}`
      else if(PaddedTop === '4')  return `${spaces.large}`
      else if(PaddedTop === '5')  return `${spaces.larger}`
      else if(PaddedTop === '6')  return `${spaces.extraLarge}`
  return 'none'
}}; `
//left
export const PaddingStart = css`${({ PaddedStart }) => {
      if(PaddedStart === '1') return `${spaces.smaller}`
      else if(PaddedStart === '2')  return `${spaces.small}`
      else if(PaddedStart === '3')  return `${spaces.medium}`
      else if(PaddedStart === '4')  return `${spaces.large}`
      else if(PaddedStart === '5')  return `${spaces.larger}`
      else if(PaddedStart === '6')  return `${spaces.extraLarge}`
  return 'none'
}}; `
//bottom
export const PaddingBottom =css`${({ PaddedBottom }) => {
      if(PaddedBottom === '1') return `${spaces.smaller}`
      else if(PaddedBottom === '2')  return `${spaces.small}`
      else if(PaddedBottom === '3')  return `${spaces.medium}`
      else if(PaddedBottom === '4')  return `${spaces.large}`
      else if(PaddedBottom === '5')  return `${spaces.larger}`
      else if(PaddedBottom === '6')  return `${spaces.extraLarge}`
  return 'none'
 }}; `
//right
export const PaddingEnd =css`${({ PaddedEnd }) => {
      if(PaddedEnd === '1') return `${spaces.smaller}`
      else if(PaddedEnd === '2')  return `${spaces.small}`
      else if(PaddedEnd === '3')  return `${spaces.medium}`
      else if(PaddedEnd === '4')  return `${spaces.large}`
      else if(PaddedEnd === '5')  return `${spaces.larger}`
      else if(PaddedEnd === '6')  return `${spaces.extraLarge}`
  return 'none'
}}; 
` 


