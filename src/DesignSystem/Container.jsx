import styled from 'styled-components'

const Container = styled.div`
margin-left:5%;
margin-right:5%;
//small container : sm
padding-right:${props => props.sm ? 'calc((100vw - 768px) / 2)' : 'none'};
padding-left: ${props => props.sm ? 'calc((100vw - 768px) / 2)' : 'none'};

//medium container : med
padding-right:${props => props.med ? 'calc((100vw - 960px) / 2)' : 'none'};
padding-left: ${props => props.med ? 'calc((100vw - 960px) / 2)' : 'none'};

//large container : lg
padding-right:${props => props.lg ? 'calc((100vw - 1200px) / 2)' : 'none'};
padding-left: ${props => props.lg ? 'calc((100vw - 1200px) / 2)' : 'none'};
`
export default Container


