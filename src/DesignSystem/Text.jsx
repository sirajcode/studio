import styled from "styled-components";

export const Text = styled.p`
    // font size
font-size:${({ size }) => {
  if (size === 1) return '10px'
      else if(size === 2) return '12px'
      else if(size === 3) return '14px'
      else if(size === 4) return '16px'
      else if(size === 5) return '24px'
      else if(size === 6) return '40px'
      else if(size === 7) return '64px'
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
text-align: ${({Align}) => {
    if (Align === 'center') return 'center'
    else if (Align === 'right') return 'right'
    return  'left'
}};
//bakground  color
background-color: ${({bg}) => {
    if (bg=== "green") return 'red'
      else if(bg === "yellow") return 'yellow'
      else if(bg ===  "blue") return 'blue'
  return 'none'
}};  
// color
color: ${({color}) => {
    if (color=== "green") return 'red'
      else if(color === "yellow") return 'yellow'
      else if(color ===  "blue") return 'blue'
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