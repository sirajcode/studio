import styled from 'styled-components'

const Container = styled.div`
margin-left:13%;
margin-right:13%;
//small container : sm
padding-right:${props => props.sm ? 'calc((70vw - 768px) / 2)' : 'none'};
padding-left: ${props => props.sm ? 'calc((70vw - 768px) / 2)' : 'none'};

//medium container : med
padding-right:${props => props.med ? 'calc((80vw - 960px) / 2)' : 'none'};
padding-left: ${props => props.med ? 'calc((80vw - 960px) / 2)' : 'none'};

//large container : lg
padding-right:${props => props.lg ? 'calc((90vw - 1200px) / 2)' : 'none'};
padding-left: ${props => props.lg ? 'calc((90vw - 1200px) / 2)' : 'none'};
`
export default Container


