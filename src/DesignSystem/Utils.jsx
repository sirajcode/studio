
import styled from 'styled-components'

const Flex = styled.div`
    display: flex; 
    flex-wrap: ${({wrap}) =>
        (wrap === 'wrapReverse' ? 'wrap-reverse' : wrap === 'noWrap' ? 'nowrap' : 'wrap')}; 
    justify-content: ${({justify}) => {
        if (justify==='Center') return 'center'
        else if (justify==='SpaceAround') return 'space-around'
        else if (justify==='SpaceBetween') return 'space-between'
        else if (justify==='FlexEnd') return 'flex-end'
        return 'flex-start'
    }};
    align-items: ${({alignItems}) => {
        if ( alignItems==='alignStretch') return 'stretch'
        else if (alignItems==='alignEnd') return 'flex-end'
        else if (alignItems==='alignCenter') return 'center'
        else if (alignItems==='alignBaseline') return 'baseline'
        return 'flex-start'
    }};
    align-content: ${({alignContent}) => {
       if (alignContent==='contentStart') return 'flex-start'
        else if (alignContent==='contentEnd') return 'flex-end'
        else if (alignContent==='contentCenter') return 'center'
        else if (alignContent==='contentBetween') return 'space-between'
        else if (alignContent==='contentAround') return 'contentAround'
        return 'stretch'
    }};
    flex-direction: ${({FLexDirection}) => {
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


