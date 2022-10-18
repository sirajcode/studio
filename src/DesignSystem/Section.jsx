import styled from 'styled-components'

const Section = styled.div`
border:none;
font-weight: ${({ weight }) => {
       if(weight ==='500' ) return '500'
      else if(weight === '600') return '600'
      else if(weight === '700') return '700'
  return '400'
}};  
border-radius: ${({ radii }) => {
      if(radii === 2) return '2px'
      else if(radii === 4) return '4px'
      else if(radii === 8) return '8px'
      else if(radii === 16) return '16px'
  return 'none'
}};  
background-color: ${({bg}) => {
    if (bg=== "green") return 'red'
      else if(bg === "yellow") return 'yellow'
      else if(bg ===  "blue") return 'blue'
  return 'black'
}};  
padding: ${({size}) => {
    if (size === 'sm') return '4px 9px'
      else if(size=== 'med') return '7px 18px'
      else if(size=== 'lg') return '12px 20px'
  return '0'
}};
margin: ${({ space }) => {
      if(space === 2) return '2px'
      else if(space === 4) return '4px'
      else if(space === 8) return '8px'
      else if(space === 16) return '16px'
      else if(space === 32) return '32px'
      else if(space === 64) return '64px'
  return 'none'
}}; 
margin-top: ${({ top }) => {
      if(top === 2) return '2px'
      else if(top === 4) return '4px'
      else if(top === 8) return '8px'
      else if(top === 16) return '16px'
      else if(top === 32) return '32px'
      else if(top === 64) return '64px'
  return 'none'
}}; 
margin-bottom: ${({ bottom }) => {
      if(bottom === 2) return '2px'
      else if(bottom === 4) return '4px'
      else if(bottom === 8) return '8px'
      else if(bottom === 16) return '16px'
      else if(bottom === 32) return '32px'
      else if(bottom === 64) return '64px'
  return 'none'
}}; 
margin-left: ${({ left }) => {
      if(left === 2) return '2px'
      else if(left === 4) return '4px'
      else if(left === 8) return '8px'
      else if(left === 16) return '16px'
      else if(left === 32) return '32px'
      else if(left === 64) return '64px'
  return 'none'
}};  
margin-right: ${({ right }) => {
      if(right === 2) return '2px'
      else if(right === 4) return '4px'
      else if(right === 8) return '8px'
      else if(right === 16) return '16px'
      else if(right === 32) return '32px'
      else if(right === 64) return '64px'
  return 'none'
}};
  
` 
export default  Section
