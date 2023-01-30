import styled,{css} from 'styled-components'

const Container = styled.div`
margin: 0px auto;
${p => {
    if (p.dashboard) {
        return css`
            padding-left:calc(55px + 3%);
            padding-right: 3%;
        `
    }
     else if (p.sm) {
        return css`
            padding-left:20%;
            padding-right: 20%;
        `
    }
     else if (p.med) {
        return css`
            padding-left:15%;
            padding-right: 15%;
        `
    }
     else if (p.lg) {
        return css`
            padding-left:10%;
            padding-right: 10%;
        `
    }
}}
`
export default Container


