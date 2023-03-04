import { css } from 'styled-components';

const flexbox = css`
    display: flex;
    flex-direction: ${p => p.flexDirection};
    align-items: ${p => p.alignItems};
    justify-content:${p => p.justifyContent} ;
    align-content: ${p => p.alignContent};
    flex-wrap: ${p => p.flexWrap};
    flex-basis: ${p => p.flexBasis};
    flex: ${p => p.flex};
`
const grid = css`
    display: Grid;
    grid-gap: ${p => p.gridGap};
    grid-column-gap: ${p => p.gridColumnGap};
    grid-row-gap:${p => p.gridRowGap} ;
    grid-column: ${p => p.gridColumn};
    grid-row: ${p => p.gridRow};
    place-items: ${p => p.placeItems};
`

const layout = css`
    width:${p=>p.width};
    height:${p => p.height};
    min-width: ${p => p.minWidth};
    min-height: ${p => p.minHeight};
    max-width: ${p => p.maxWidth};
    max-height: ${p => p.maxHeight};
    overflow:  ${p => p.overflow};
    overflow-x:  ${p => p.overflowX};
    overflow-y:  ${p => p.overflowY};
`

 const background =css`
     background-image: ${p => p.backgroundImage};
     background-size: ${p => p.backgroundSize};
     background-position: ${p => p.backgroundPosition};
     background-repeat: ${p => p.backgroundRepeat};
 `

  const shadow =css`
     box-shadow: ${p => p.boxShadow};
     text-shadow:  ${p => p.textShadow};
 `

export { flexbox, layout, grid, background, shadow }

