import styled from 'styled-components'
import { colors, fontWieght, fontSize, BtnSize, RoundConers, borderWidth, spaces } from './Variable'

const Button = styled.button`

//font size
font-size: ${props => props.regular ? `${fontSize.regular}`:`${fontSize.text}`};
//font weight
font-weight: ${(props) =>{
      if(props.strong) return `${fontWieght.strong}`
      else if(props.bold) return `${fontWieght.bold}`
   return `${fontWieght.normal}`
}}; 
//color
color: ${(props) => {
    if (props.red) return `${colors.red}`
      else if(props.blue) return`${colors.blue}`
      else if(props.green) return `${colors.green}`
      else if(props.yellow) return `${colors.yellow}`
      else if(props.redshade) return `${colors.redshade}`
      else if(props.blueshade) return `${colors.blueshade}`
      else if(props.yellowshade) return `${colors.yellowshade}`
      else if(props.greenshade) return `${colors.greenshade}`
      else if(props.text) return `${colors.text}`
      else if(props.lable) return `${colors.lable}`
      else if(props.disable) return `${colors.disable}`
      else if(props.darktext) return `${colors.darktext}`   
      else if(props.darklable) return `${colors.darklable}`
      else if(props.darkdisable) return `${colors.darkdisable}`
      else if(props.white) return `${colors.white}`
      else if(props.whiteshade) return `${colors.whiteshade}`
      else if(props.dark) return `${colors.dark}`
      else if(props.dark2) return `${colors.dark2}`                       
      else if(props.dark3) return `${colors.dark3}`
      else if(props.darkshade) return `${colors.darkshade}`
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
      else if(bg==='text') return `${colors.text}`                
      else if(bg==='lable') return `${colors.lable}`              
      else if(bg==='disable') return `${colors.disable}`          
      else if(bg==='darktext') return `${colors.darktext}`          
      else if(bg==='darklable') return `${colors.darklable}`      
      else if(bg==='darkdisable') return `${colors.darkdisable}`  
      else if(bg==='white') return `${colors.white}`              
      else if(bg==='whiteshade') return `${colors.whiteshade}`    
      else if(bg==='dark') return `${colors.dark}`                
      else if(bg==='dark2') return `${colors.dark2}`              
      else if(bg==='dark3') return `${colors.dark3}`              
      else if(bg==='darkshade') return `${colors.darkshade}`      
      return 'none'
}};

//border color
border-color:${({borderColor}) => {
     if (borderColor=== 'red') return `${colors.red}`
      else if(borderColor === 'blue') return`${colors.blue}`                 
      else if(borderColor === 'green') return `${colors.green}`              
      else if(borderColor === 'yellow') return `${colors.yellow}`           
      else if(borderColor === 'redshade') return `${colors.redshade}`        
      else if(borderColor === 'blueshade') return `${colors.blueshade}`      
      else if(borderColor === 'yellowshade') return `${colors.yellowshade}`  
      else if(borderColor === 'greenshade') return `${colors.greenshade}`    
      else if(borderColor === 'text') return `${colors.text}`                
      else if(borderColor === 'lable') return `${colors.lable}`              
      else if(borderColor === 'disable') return `${colors.disable}`  
      else if(borderColor==='darktext') return `${colors.darktext}`   
      else if(borderColor === 'darklable') return `${colors.darklable}`      
      else if(borderColor === 'darkdisable') return `${colors.darkdisable}`  
      else if(borderColor === 'white') return `${colors.white}`              
      else if(borderColor === 'whiteshade') return `${colors.whiteshade}`    
      else if(borderColor === 'dark') return `${colors.dark}`                
      else if(borderColor === 'dark2') return `${colors.dark2}`              
      else if(borderColor === 'dark3') return `${colors.dark3}`              
      else if(borderColor === 'darkshade') return `${colors.darkshade}`   
  return 'none'
}}; 

//border
/* border:none; */
//border radius
border-radius: ${({ Round }) => {
      if(Round === '1') return `${RoundConers.small}`
      else if(Round === '2') return `${RoundConers.medium}`
      else if(Round === '3') return `${RoundConers.large}`
      else if(Round === '4') return `${RoundConers.exlarge}`
  return 'none'
}}; 
//border size
border-width:${({ Outline }) => {
      if(Outline === '1') return `${borderWidth.small}`
      else if(Outline === '2')  return `${borderWidth.medium}`
      else if(Outline === '3') return `${borderWidth.large}`
  return 'none'
}}; 
//border style
border-style:${(props) => {
      if(props.solid) return 'solid'
      else if(props.dotted) return 'dotted'
      else if(props.dashed) return 'dashed'
      else if(props.double) return 'double'
      else if(props.groove) return 'groove'
      else if(props.ridge) return 'ridge'
      else if(props.inset) return 'inset'
      else if(props.outset) return 'outset'
  return 'none'
}}; 
// size of button
padding: ${(props) => {
      if (props.sm) return `${BtnSize.small}`
      else if(props.med) return `${BtnSize.medium}`
      else if(props.lg) return  `${BtnSize.large}`
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
export default  Button
