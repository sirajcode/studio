import styled from 'styled-components'
import { colors, fontWieght, fontSize, RoundConers, borderWidth, spaces } from './Variable'

// todo: section div
// - adding variable props
// - set up all variable rules

export const Section = styled.div`

// font size
font-size:${(props) => {
  if (props.regular) return `${fontSize.regular}`
  else if (props.smallHeading) return `${fontSize.small}`
  else if(props.mediumHeading) return `${fontSize.medium}`
  else if(props.largeHeading) return `${fontSize.large}`
  return `${fontSize.text}`
}};

//font wieght
font-weight: ${(props) =>{
      if(props.strong) return `${fontWieght.strong}`
      else if(props.bold) return `${fontWieght.bold}`
   return `${fontWieght.normal}`
}}; 

//font style
font-style: ${props => props.italic ? 'italic' : 'normal'};

//text alignement
text-align: ${(props) => {
    if (props.center) return 'center'
    else if (props.right) return 'right'
    return  'left'
}};
  
//borders 
// width
border-width:${({ outline }) => {
      if(outline === '1') return `${borderWidth.small}`
      else if(outline === '2')  return `${borderWidth.medium}`
      else if(outline === '3') return `${borderWidth.large}`
  return 'none'
}}; 

// radius
border-radius: ${({ round }) => {
      if(round === '1') return `${RoundConers.small}`
      else if(round === '2') return `${RoundConers.medium}`
      else if(round === '3') return `${RoundConers.large}`
      else if(round === '4') return `${RoundConers.exlarge}`
  return 'none'
}}; 

// style 
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

// color
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
      else if(borderColor ==='darktext') return `${colors.darktext}`         
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

// text color
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
//bg color
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
 
// space  top/left/right/bottom ✔
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
margin-left: ${({ start }) => {
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
margin-bottom: ${({ bottom }) => {
      if(bottom === '1') return `${spaces.smaller}`
      else if(bottom === '2')  return `${spaces.small}`
      else if(bottom === '3')  return `${spaces.medium}`
      else if(bottom === '4')  return `${spaces.large}`
      else if(bottom === '5')  return `${spaces.larger}`
      else if(bottom === '6')  return `${spaces.extraLarge}`
  return 'none'
}}; 
` 

// todo: flex div
export const Flex = styled.div`
display: flex;
justify-content: ${({ Justify }) => {
        if (Justify=== 'center') return 'center'
        else if (Justify==='around') return 'space-around'
        else if (Justify==='between') return 'space-between'
        else if (Justify==='end') return 'flex-end'
        return 'flex-start'
    }}; 
flex-wrap: ${({wrap}) =>
        (wrap === 'wrapReverse' ? 'wrap-reverse' : wrap === 'noWrap' ? 'nowrap' : 'wrap')};
align-items: ${({ alignItems }) => {
        if ( alignItems==='stretch') return 'stretch'
        else if (alignItems==='end') return 'flex-end'
        else if (alignItems==='center') return 'center'
        else if (alignItems==='baseline') return 'baseline'
        return 'flex-start'
}};
align-content: ${({ alignContent }) => {
       if (alignContent==='start') return 'flex-start'
        else if (alignContent==='end') return 'flex-end'
        else if (alignContent==='center') return 'center'
        else if (alignContent==='between') return 'space-between'
        else if (alignContent==='around') return 'content-around'
        return 'stretch'
    }};
flex-direction: ${({ flexDirection }) => {
    if (flexDirection === 'Column') return 'column' 
        else if (flexDirection === 'Row') return 'row'
        else if(flexDirection ==='RowReverse') return 'row-reverse'
        else if (flexDirection === 'ColumnReverse') return 'column-reverse'
        return 'none'
    }};
`
// todo: column div
export const Column = styled.div`
width: ${({Column}) => {
        if (Column ==='three') return '33.33%'
        else if (Column === 'four') return '25%'
        else if(Column==='two') return '50%'
        return '0'
}};
padding: ${props => (props.noPadding ? 0 : '15px')};
`
