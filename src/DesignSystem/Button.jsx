import styled from 'styled-components'

const Button = styled.button`
border:none;
border-radius: ${({ radii }) => {
      if(radii === 1) return '2px'
      else if(radii === 2) return '4px'
      else if(radii === 3) return '8px'
      else if(radii === 4) return '9999px'
  return 'none'
}}; 

border-width:${({ border }) => {
      if(border === 1) return '2px'
      else if(border === 2) return '3px'
      else if(border === 3) return '4px'
  return 'none'
}}; 

border-style:${({ borderStyle }) => {
      if(borderStyle === 'solid') return 'solid'
      else if(borderStyle === 'dotted') return 'dotted'
      else if(borderStyle === 'dashed') return 'dashed'
      else if(borderStyle === 'double') return 'double'
      else if(borderStyle === 'groove') return 'groove'
      else if(borderStyle === 'ridge') return 'ridge'
      else if(borderStyle === 'inset') return 'inset'
      else if(borderStyle === 'outset') return 'outset'
  return 'none'
}}; 

border-color:${({borderColor}) => {
    if (borderColor=== "green") return 'green'
      else if(borderColor === "yellow") return 'yellow'
      else if(borderColor ===  "blue") return 'blue'
  return 'none'
}}; 

color: ${({Color}) => {
    if (Color=== "green") return 'red'
      else if(Color === "yellow") return 'yellow'
      else if(Color ===  "blue") return 'blue'
  return 'none'
}};  

//font weight
font-weight: ${({ weight }) => {
       if(weight ==='500' ) return '500'
      else if(weight === '600') return '600'
      else if(weight === '700') return '700'
  return '400'
}};
//background color  
background-color: ${({bg}) => {
    if (bg==='green') return '#31D0AA'
      else if(bg === 'red') return '#ED4B9E'
      else if(bg ===  'blue') return '#4B4DED'
  return 'black'

}};  
//padding
padding: ${({size}) => {
    if (size === 'sm') return '4px 9px'
      else if(size=== 'med') return '7px 18px'
      else if(size=== 'lg') return '12px 20px'
  return '0'
}};
//margin
margin: ${({ space }) => {
      if(space === 1) return '2px'
      else if(space === 2) return '4px'
      else if(space === 3) return '8px'
      else if(space === 4) return '16px'
      else if(space === 5) return '32px'
      else if(space === 6) return '64px'
  return 'none'
}}; 
//margin top
margin-top: ${({ top }) => {
      if(top ===1) return '2px'
      else if(top ===2) return '4px'
      else if(top ===3) return '8px'
      else if(top === 4) return '16px'
      else if(top === 5) return '32px'
      else if(top === 6) return '64px'
  return 'none'
}}; 
//margin botttom
margin-bottom: ${({ bottom }) => {
      if(bottom === 1) return '2px'
      else if(bottom === 2) return '4px'
      else if(bottom === 3) return '8px'
      else if(bottom === 4) return '16px'
      else if(bottom === 5) return '32px'
      else if(bottom === 6) return '64px'
  return 'none'
}}; 
//margin left
margin-left: ${({ left }) => {
      if(left === 1) return '2px'
      else if(left === 2) return '4px'
      else if(left === 3) return '8px'
      else if(left === 4) return '16px'
      else if(left === 5) return '32px'
      else if(left === 6) return '64px'
  return 'none'
}}; 
  //margin right
margin-right: ${({ right }) => {
      if(right === 1) return '2px'
      else if(right === 2) return '4px'
      else if(right === 3) return '8px'
      else if(right === 4) return '16px'
      else if(right === 5) return '32px'
      else if(right === 6) return '64px'
  return 'none'
}};
    cursor: pointer;
    display: inline-block;
` 
export default  Button
