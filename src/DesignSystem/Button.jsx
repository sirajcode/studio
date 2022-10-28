import styled from 'styled-components'

const Button = styled.button`

//text 

//font size
font-size: 16px;

//font weight
font-weight: ${({ bold }) => {
       if(weight ==='500' ) return '500'
      else if(weight === '600') return '600'
      else if(weight === '700') return '700'
  return '400'
}};

//color
color: ${({color}) => {
    if (color=== 'green') return '#31D0AA'
      else if(color === 'red') return '#ED4B9E'
      else if(color === 'blue') return '#4B4DED'
  return 'none'
}};  

//background color  
background-color: ${({bg}) => {
    if (bg==='green') return '#31D0AA'
      else if(bg === 'red') return '#ED4B9E'
      else if(bg ===  'blue') return '#4B4DED'
  return 'black'
}}; 

//border color
border-color:${({borderColor}) => {
    if (borderColor=== 'green') return '#31D0AA'
      else if(borderColor === 'red') return '#ED4B9E'
      else if(borderColor === 'blue') return '#4B4DED'
  return 'none'
}}; 

//border
border:none;

//border radius
border-radius: ${({ radii }) => {
      if(radii === '1') return '2px'
      else if(radii === '2') return '4px'
      else if(radii === '3') return '8px'
      else if(radii === '4') return '9999px'
  return 'none'
}}; 

//border size
border-width:${({ borderWidth }) => {
      if(borderSize === '1') return '2px'
      else if(borderSize === '2') return '3px'
      else if(borderSize === '3') return '4px'
  return 'none'
}}; 

//border style
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
 
//padding size of button
padding: ${({size}) => {
    if (size === 'sm') return '4px 9px'
      else if(size=== 'med') return '7px 18px'
      else if(size=== 'lg') return '12px 20px'
  return '0'
}};

//margin and spacing arround
margin: ${({ margin }) => {
      if(margin === '1') return '2px'
      else if(margin === '2') return '4px'
      else if(margin === '3') return '8px'
      else if(margin === '4') return '16px'
      else if(margin === '5') return '32px'
      else if(margin === '6') return '64px'
  return 'none'
}}; 

//margin top
margin-top: ${({ marginTop }) => {
      if(marginTop ==='1') return '2px'
      else if(marginTop ==='2') return '4px'
      else if(marginTop ==='3') return '8px'
      else if(marginTop ==='4') return '16px'
      else if(marginTop ==='5') return '32px'
      else if(marginTop ==='6') return '64px'
  return 'none'
}}; 

//margin botttom
margin-bottom: ${({ marginBottom }) => {
      if(marginBottom === '1') return '2px'
      else if(marginBottom ==='2') return '4px'
      else if(marginBottom ==='3') return '8px'
      else if(marginBottom ==='4') return '16px'
      else if(marginBottom ==='5') return '32px'
      else if(marginBottom ==='6') return '64px'
  return 'none'
}}; 

//margin left
margin-left: ${({ marginLeft }) => {
      if(marginLeft === '1') return '2px'
      else if(marginLeft === '2') return '4px'
      else if(marginLeft === '3') return '8px'
      else if(marginLeft === '4') return '16px'
      else if(marginLeft === '5') return '32px'
      else if(marginLeft === '6') return '64px'
  return 'none'
}}; 

  //margin right
margin-right: ${({ marginRight }) => {
      if(marginRight === '1') return '2px'
      else if(marginRight === '2') return '4px'
      else if(marginRight === '3') return '8px'
      else if(marginRight === '4') return '16px'
      else if(marginRight === '5') return '32px'
      else if(marginRight === '6') return '64px'
  return 'none'
}};

    cursor: pointer;
    display: inline-block;
` 
export default  Button
