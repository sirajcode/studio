import styled, { css } from "styled-components";
import { colors, fontWieght, fontSize, BtnSize, RoundConers, borderWidth, spaces } from '../Variable'


const Button = styled.button`

//font size
font-size: ${p => p.regular ? `${fontSize.regular}`:`${fontSize.text}`};
//font weight
font-weight: ${p => p.bold ? `${fontWieght.bold}` :`${fontWieght.strong}`}; 
//color
color: ${(p) => {
    if (p.red) return `${colors.red}`
      else if(p.blue) return`${colors.blue}`
      else if(p.green) return `${colors.green}`
      else if(p.yellow) return `${colors.yellow}`
      else if(p.redshade) return `${colors.redshade}`
      else if(p.blueshade) return `${colors.blueshade}`
      else if(p.yellowshade) return `${colors.yellowshade}`
      else if(p.greenshade) return `${colors.greenshade}`
      else if(p.text) return `${colors.text}`
      else if(p.lable) return `${colors.lable}`
      else if(p.disable) return `${colors.disable}`
      else if(p.darktext) return `${colors.darktext}`   
      else if(p.darklable) return `${colors.darklable}`
      else if(p.darkdisable) return `${colors.darkdisable}`
      else if(p.white) return `${colors.white}`
      else if(p.whiteshade) return `${colors.whiteshade}`
      else if(p.dark) return `${colors.dark}`
      else if(p.dark2) return `${colors.dark2}`                       
      else if(p.dark3) return `${colors.dark3}`
      else if(p.darkshade) return `${colors.darkshade}`
  return 'none'
}};   

//background color  
background-color: ${({bg}) => {
    if (bg=== 'red') return `${colors.red}`
      else if(bg==='blue') return`${colors.blue}`                 
      else if(bg==='green') return `${colors.green}`              
      else if(bg==='yellow') return `${colors.yellow}`           
      else if(bg==='redshade') return `${colors.redshade}`        
      else if(bg==='blueshade') return `${colors.blueshade}`      
      else if(bg==='yellowshade') return `${colors.yellowshade}`  
      else if(bg==='greenshade') return `${colors.greenshade}`              
      else if(bg==='white') return `${colors.white}`              
      else if(bg==='whiteshade') return `${colors.whiteshade}`    
      else if(bg==='dark') return `${colors.dark}`                              
      else if(bg==='darkshade') return `${colors.darkshade}`      
      return 'none'
}};

//border color
border-color:${p => {
     if (p.borderred) return `${colors.red}`
      else if(p.borderblue) return`${colors.blue}`
      else if(p.bordergreen) return `${colors.green}`
      else if(p.borderyellow) return `${colors.yellow}`
      else if(p.borderredshade) return `${colors.redshade}`
      else if(p.borderblueshade) return `${colors.blueshade}`
      else if(p.borderyellowshade) return `${colors.yellowshade}`
      else if(p.bordergreenshade) return `${colors.greenshade}`
      else if(p.borderwhite) return `${colors.white}`
      else if(p.borderwhiteshade) return `${colors.whiteshade}`
      else if(p.borderdark) return `${colors.dark}`
      else if(p.borderdarkshade) return `${colors.darkshade}`
  return 'none'
}}; 

//outline
//border radius
border-radius: ${({ round }) => {
      if(round === '1') return `${RoundConers.small}`
      else if(round === '2') return `${RoundConers.medium}`
      else if(round === '3') return `${RoundConers.large}`
      else if(round === '4') return `${RoundConers.exlarge}`
  return 'none'
}}; 
//border size
border-width:${({ outline }) => {
      if(outline === '1') return `${borderWidth.small}`
      else if(outline === '2')  return `${borderWidth.medium}`
      else if(outline === '3') return `${borderWidth.large}`
  return 'none'
}}; 
// style
border-style:${(p) => {
      if(p.solid) return 'solid'
      else if(p.dotted) return 'dotted'
      else if(p.dashed) return 'dashed'
      else if(p.double) return 'double'
      else if(p.groove) return 'groove'
      else if(p.ridge) return 'ridge'
      else if(p.inset) return 'inset'
      else if(p.outset) return 'outset'
  return 'none'
}}; 
// size of button
padding: ${(p) => {
      if (p.sm) return `${BtnSize.small}`
      else if(p.med) return `${BtnSize.medium}`
      else if(p.lg) return  `${BtnSize.large}`
}};
    cursor: pointer;
    display: inline-block;

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
