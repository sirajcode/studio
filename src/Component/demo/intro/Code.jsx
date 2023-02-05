import React, { useEffect } from "react";
import styled from "styled-components";
import Prism from "prismjs";
import "prismjs/themes/code.css";


const StyledSyntaxHighlighter = styled.pre`
  border: 0 !important;
  box-shadow: none !important;
  overflow: break !important;
  border-radius: 0.75rem !important;
  background-color:#1b1b1b !important;
  margin: 0 !important;
  width: auto !important;
  height: auto !important;
  & > code {
    text-shadow: none !important;
    color:white !important;
  }
`;

const  Code = ({ code, language }) => {
  useEffect(() => {
    Prism.highlightAll();
  }, []);
  return (
    <>
      <StyledSyntaxHighlighter>
        <code className={`language-${language}`}>{code}</code>
      </StyledSyntaxHighlighter>
    </>
  );
}
export default Code




//import Code from


// const code2 = `<!DOCTYPE html>
// <html lang="en">
//   <head>
//     <meta charset="UTF-8" />
//     <link rel="icon" type="image/svg+xml" href="/logo.png" />
//     <meta name="viewport" content="width=device-width,
//     initial-scale=1.0" />
//     <title>Design Source</title>
//   </head>
//   <body>
//     <div id="root"></div>
//     <script type="module" src="/src/main.jsx"></script>
//   </body>
// </html>`;

//<Code code={code1} language="js" />