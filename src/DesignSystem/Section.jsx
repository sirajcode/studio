import styled from 'styled-components'

const Section = styled.div`

// font size
font-size:${({ fontSize}) => {
  if (fontSize === 1) return '10px'
      else if(fontSize === 2) return '12px'
      else if(fontSize === 3) return '14px'
      else if(fontSize === 4) return '16px'
      else if(fontSize === 5) return '24px'
      else if(fontSize === 6) return '40px'
      else if(fontSize === 7) return '64px'
  return '10px'
}};

//font wieght
font-weight: ${({ weight }) => {
      if(weight ==='500' ) return '500'
      else if(weight === '600') return '600'
      else if(weight === '700') return '700'
    return '400'
}}; 

//font style
font-style: ${props => props.italic ? 'italic' : 'normal'};

//text alignement
text-align: ${({TextAlign}) => {
    if (TextAlign === 'center') return 'center'
    else if (TextAlign === 'right') return 'right'
    return  'left'
}};
  
//borders 
border:none;

//border width
border-width:${({ border }) => {
      if(border === 1) return '2px'
      else if(border === 2) return '3px'
      else if(border === 3) return '4px'
  return 'none'
}}; 

//border radius
border-radius: ${({ radii }) => {
      if(radii === 1) return '2px'
      else if(radii === 2) return '4px'
      else if(radii === 3) return '8px'
      else if(radii === 4) return '9999px'
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

//border color
border-color:${({borderColor}) => {
    if (borderColor=== 'green') return '#31D0AA'
      else if(borderColor === 'red') return '#ED4B9E'
      else if(borderColor === 'blue') return '#4B4DED'
  return 'none'
}};  

// color
color: ${({color}) => {
    if (color=== 'green') return '#31D0AA'
      else if(color === 'red') return '#ED4B9E'
      else if(color === 'blue') return '#4B4DED'
  return 'none'
}};  

//Backgorund color
background-color: ${({bg}) => {
    if (bg=== 'green') return '#31D0AA'
      else if(bg === 'red') return '#ED4B9E'
      else if(bg === 'blue') return '#4B4DED'
  return 'none'
}};  
 
//margin 
margin: ${({ margin }) => {
      if(margin === 1) return '2px'
      else if(margin === 2) return '4px'
      else if(margin === 3) return '8px'
      else if(margin === 4) return '16px'
      else if(margin === 5) return '32px'
      else if(margin === 6) return '64px'
  return 'none'
}}; 

// margin top
margin-top: ${({ marginTop }) => {
      if(marginTop === 1) return '2px'
      else if(marginTop === 2) return '4px'
      else if(marginTop === 3) return '8px'
      else if(marginTop === 4) return '16px'
      else if(marginTop === 5) return '32px'
      else if(marginTop === 6) return '64px'
  return 'none'
}}; 

//margin bottom
margin-bottom: ${({ marginBottom }) => {
      if(marginBottom === 1) return '2px'
      else if(marginBottom === 2) return '4px'
      else if(marginBottom === 3) return '8px'
      else if(marginBottom === 4) return '16px'
      else if(marginBottom === 5) return '32px'
      else if(marginBottom === 6) return '64px'
  return 'none'
}}; 

// margin left 
margin-left: ${({ marginLeft }) => {
      if(marginLeft === 1) return '2px'
      else if(marginLeft === 2) return '4px'
      else if(marginLeft === 3) return '8px'
      else if(marginLeft === 4) return '16px'
      else if(marginLeft === 5) return '32px'
      else if(marginLeft === 6) return '64px'
  return 'none'
}};  

// margin right
margin-right: ${({ marginRight }) => {
      if(marginRight === 1) return '2px'
      else if(marginRight === 2) return '4px'
      else if(marginRight === 3) return '8px'
      else if(marginRight === 4) return '16px'
      else if(marginRight === 5) return '32px'
      else if(marginRight === 6) return '64px'
  return 'none'
}};

//padding
padding: ${({ padding }) => {
      if(padding === 1) return '2px'
      else if(padding === 2) return '4px'
      else if(padding === 3) return '8px'
      else if(padding === 4) return '16px'
      else if(padding === 5) return '32px'
      else if(padding === 6) return '64px'
  return 'none'
}}; 

// padding top
margin-top: ${({ paddingTop }) => {
      if(paddingTop === 1) return '2px'
      else if(paddingTop === 2) return '4px'
      else if(paddingTop === 3) return '8px'
      else if(paddingTop === 4) return '16px'
      else if(paddingTop === 5) return '32px'
      else if(paddingTop === 6) return '64px'
  return 'none'
}}; 

//padding bottom
margin-bottom: ${({ paddingBottom }) => {
      if(paddingBottom === 1) return '2px'
      else if(paddingBottom === 2) return '4px'
      else if(paddingBottom === 3) return '8px'
      else if(paddingBottom === 4) return '16px'
      else if(paddingBottom === 5) return '32px'
      else if(paddingBottom === 6) return '64px'
  return 'none'
}}; 

// padding left 
margin-left: ${({ paddingLeft }) => {
      if(paddingLeft === 1) return '2px'
      else if(paddingLeft === 2) return '4px'
      else if(paddingLeft === 3) return '8px'
      else if(paddingLeft === 4) return '16px'
      else if(paddingLeft === 5) return '32px'
      else if(paddingLeft === 6) return '64px'
  return 'none'
}};  

// padding right
margin-right: ${({ paddingRight }) => {
      if(paddingRight === 1) return '2px'
      else if(paddingRight === 2) return '4px'
      else if(paddingRight === 3) return '8px'
      else if(paddingRight === 4) return '16px'
      else if(paddingRight === 5) return '32px'
      else if(paddingRight === 6) return '64px'
  return 'none'
}};
` 
export default  Section
