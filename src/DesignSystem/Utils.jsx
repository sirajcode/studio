
import styled from 'styled-components'

const Flex = styled.div`
display: flex;
justify-content: ${({ Justify }) => {
        if (Justify=== 'Center') return 'center'
        else if (Justify==='Around') return 'space-around'
        else if (Justify==='Between') return 'space-between'
        else if (Justify==='End') return 'flex-end'
        return 'flex-start'
    }}; 
flex-wrap: ${({wrap}) =>
        (wrap === 'wrapReverse' ? 'wrap-reverse' : wrap === 'noWrap' ? 'nowrap' : 'wrap')};
     align-items: ${({ alignItems }) => {
        if ( alignItems==='Stretch') return 'stretch'
        else if (alignItems==='End') return 'flex-end'
        else if (alignItems==='Center') return 'center'
        else if (alignItems==='Baseline') return 'baseline'
        return 'flex-start'
}};
    align-content: ${({ alignContent }) => {
       if (alignContent==='Start') return 'flex-start'
        else if (alignContent==='End') return 'flex-end'
        else if (alignContent==='Center') return 'center'
        else if (alignContent==='Between') return 'space-between'
        else if (alignContent==='Around') return 'contentAround'
        return 'stretch'
    }};
flex-direction: ${({ FLexDirection }) => {
    if (FLexDirection === 'Column') return 'column' 
    else if (FLexDirection === 'Row') return 'row'
    else if(FLexDirection ==='RowReverse') return 'row-reverse'
    else if (FLexDirection === 'ColumnReverse') return 'column-reverse'
    return 'none'
    }};
`
export const Column = styled.div`
    width: ${({nos}) => {
        if (nos ==='three') return '33.33%'
        else if (nos === 'four') return '25%'
        else if(nos==='two') return '50%'
        return '0'
    }};
    padding: ${props => (props.noPadding ? 0 : '15px')};
`
export default Flex


