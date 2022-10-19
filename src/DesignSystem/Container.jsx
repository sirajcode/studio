import styled from 'styled-components'

const Container = styled.div`

//small container : sm
padding-right: ${props => {
if (props.width === 'sm') return 'calc((100vw - 768px) / 2)'
}};
padding-left: ${props => {
if (props.width==='sm') return 'calc((100vw - 768px) / 2)'
}};

//large Container : med  
padding-right: ${props => {
if (props.width==='med') return 'calc((100vw - 960px) / 2)'
}};
padding-left: ${props => {
if (props.width==='med') return 'calc((100vw - 960px) / 2)'
}};

//full length container : lg 
padding-right: ${props => {
if (props.width==='lg') return 'calc((100vw - 1200px) / 2)'
}};
padding-left: ${props => {
if (props.width==='lg') return 'calc((100vw - 1200px) / 2)'
}};
    
`
export default Container


