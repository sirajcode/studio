import styled from 'styled-components'

const Container = styled.div`
margin-left:5%;
margin-right:5%;
//small container : sm
padding-right: ${({width}) =>{if (width === 'sm') return 'calc((100vw - 768px) / 2)'}};
padding-left: ${({width}) =>{if (width==='sm') return 'calc((100vw - 768px) / 2)'
}};

//large Container : med  
padding-right: ${({width}) =>{if (width==='med') return 'calc((100vw - 960px) / 2)'
}};
padding-left: ${({width}) =>{if (width==='med') return 'calc((100vw - 960px) / 2)'
}};

//full length container : lg 
padding-right: ${({width}) =>{if (width==='lg') return 'calc((100vw - 1200px) / 2)'
}};
padding-left: ${({width}) =>{
if (width==='lg') return 'calc((100vw - 1200px) / 2)'}};
    
`
export default Container


