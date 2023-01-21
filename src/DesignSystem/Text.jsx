import styled from "styled-components";

//todo
// props are changed accordingly
// code properties is pretty messed up

 const Text = styled.p`

// font size
font-size:${(props) => {
  if (props.largeHeading) return '36px'
      else if(props.mediumHeading) return '30px'
      else if(props.smallHeading) return '24px'
      else if(props.regular) return '18px'
  return '14px'
}};
//font wieght
font-weight: ${(props) =>{
      if(props.bold) return '500'
      else if(props.bolder) return '600'
    return '400'
}}; 
//font style
font-style: ${props => props.italic ? 'italic' : 'normal'};
//text alignement
text-align: ${(props) => {
    if (props.center) return 'center'
    else if (props.right) return 'right'
    return  'left'
}};
//font  color
color: ${(props) => {
    if (props.green) return '#31D0AA'
      else if(props.red) return '#ED4B9E'
      else if(props.blue) return '#4B4DED'
  return 'none'
}};  
//bakground  color
background-color: ${({bg}) => {
    if (bg=== 'green') return '#31D0AA'
      else if(bg === 'red') return '#ED4B9E'
      else if(bg ===  'blue') return '#4B4DED'
  return 'none'
}};
`

const LabelText = styled.span`
  ${(props) => {
    switch (props) {
      case "code":
        return css`
          background-color: black;
          color: white;
          ${Input}:checked + && {
            color: blue;
          }
        `;
      default:
        return css`
          background-color: white;
          color: black;
          ${Input}:checked + && {
            color: red;
          }
        `;
    }
  }}
`;
export default LabelText