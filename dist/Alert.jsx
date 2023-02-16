import styled from "styled-components";
import { colors } from "./Variable";

const Alert = styled.span`
font-size: 90%;
 margin-top: 10px;
 margin-bottom: 10px;
 border-top: 0px;
 border-bottom: 0px;
 border-right: 0px;
 border-left: 4px;
 padding-left: 10px;
 border-style: solid;
 display: block;
 border-color: ${p=>{
  if (p.succes) return `${colors.greenshade}`
  else if (p.warning) return `${colors.yellowshade}`
  else if(p.danger) return `${colors.redshade}`
  return `${colors.whiteshade}`
}};
`
export default Alert