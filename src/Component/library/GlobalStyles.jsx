import { createGlobalStyle } from "styled-components";

const GlobalStyle = createGlobalStyle`
/* ! Resting all default css */
*,*:before,*:after{ box-sizing: border-box; }
/* ! margins */
body, h1, h2, h3, h4, h5, figure, picture, p, div, a{ margin: 0; padding: 0; }
/* ! setting up body */
body{ line-height: 1.5; font-size:14px; min-height: 100vh;font-family: 'Open Sans';}
/* ! pictures and images */
img, picture{ max-width: 100%; display: block; }
/* ! buttons, inputs fields, selections */
input, button, select, a{ font: inherit; }
@media(prefers-reduced-motion:reduced) {
    *,*:before,*:after {
        animation-duration: 0.1ms!important;
        animation-iteration-count: 1!important;
        transition-duration: 0.01ms!important;
        scroll-behavior:auto!important;
    }
}
/* width */
::-webkit-scrollbar {
  width: 8px;

}
/* Track */
::-webkit-scrollbar-track {
    background:#242424;}
/* Handle */
::-webkit-scrollbar-thumb {
 background: #1b1b1b;
}
`

export default GlobalStyle