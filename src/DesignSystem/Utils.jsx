
import styled from 'styled-components'

const Flex = styled.div`
    display: flex; 
    flex-wrap: ${({wrapReverse,noWrap}) => {
        if (wrapReverse ==='wrapReverse') return 'wrap-reverse'
        else if (noWrap==='noWrap') return 'nowrap'
        return 'wrap'
    }}; 
    justify-content: ${({justifyCenter,justifyAround,justifyBetween,justifyEnd}) => {
        if (justifyCenter==='justifyCenter') return 'center'
        else if (justifyAround==='justifyAround') return 'space-around'
        else if (justifyBetween==='justifyBetween') return 'space-between'
        else if (justifyEnd==='justifyEnd') return 'flex-end'
        return 'flex-start'
    }};
    align-items: ${({alignStretch,alignEnd,alignCenter,alignBaseline}) => {
        if (alignStretch==='alignStretch') return 'stretch'
        else if (alignEnd==='alignEnd') return 'flex-end'
        else if (alignCenter==='alignCenter') return 'center'
        else if (alignBaseline==='alignBaseline') return 'baseline'
        return 'flex-start'
    }};
    align-content: ${({contentStart,contentEnd,contentCenter,contentBetween,contentAround}) => {
       if (contentStart==='contentStart') return 'flex-start'
        else if (contentEnd==='contentEnd') return 'flex-end'
        else if (contentCenter==='contentCenter') return 'center'
        else if (contentBetween==='contentBetween') return 'space-between'
        else if (contentAround==='contentAround') return 'contentAround'
        return 'stretch'
    }};
    flex-direction: ${({ column, row,rowRevese,columnReverse }) => {
    if (column === 'column') return 'column' 
    else if (row === 'row') return 'row'
    else if(rowRevese ==='row-reverse') return 'row-reverse'
    else if (columnReverse === 'column-reverse') return 'column-reverse'
    return 'none'
    }};
`
export const Column = styled.div`
    width: ${({three,four,two}) => {
        if (three ==='three') return '33.33%'
        else if (four === 'four') return '25%'
        else if(two==='two') return '50%'
        return '0'
    }};
    padding: ${props => (props.noPadding ? 0 : '15px')};
`
export default Flex


