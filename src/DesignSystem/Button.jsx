import styled from 'styled-components'

const Button = styled.button`
    border: none;
    border-radius: 5px;
    background-color: ${props => {
    if (props.variant === 'pri') return '#ED4B9E'
    else if (props.variant === 'sec') return '#4B4DED'
    else if (props.variant === 'ter') return '#F3D9DA'
    else if (props.variant === 'suc') return '#31D0AA'
      return '#0E0E2C'
    }};
    color: #fff;
    padding: 10px 15px;
    font-size: ${props => {
        if (props.size === 'sm')  return '12px'
        if (props.size === 'med')  return '16px'
        if (props.size === 'lg')  return '20px'
        return '16px'
    }};
    
`
export default  Button
