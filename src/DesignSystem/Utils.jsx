
import styled from 'styled-components'

const Flex = styled.div`
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
        else if (alignContent==='around') return 'contentAround'
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
export const Column = styled.div`
width: ${({Column}) => {
        if (Column ==='three') return '33.33%'
        else if (Column === 'four') return '25%'
        else if(Column==='two') return '50%'
        return '0'
}};
padding: ${props => (props.noPadding ? 0 : '15px')};
`
export default Flex


