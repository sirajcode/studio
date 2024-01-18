<h2 align="center">Studio props system</h2>

<p align="center">
  React styled components enchanced with props
  <br>
  <!-- <a href=""><strong>explore studio props »</strong></a>
  <br>
  <a href="">issue</a>
  ·
  <a href="">feature request</a>
  ·
  <a href="">props</a> -->
</p>

**v 0.1.7** 

### Technologies

Project is created with:
- React 18.0.17
- styled components 5.3.6
- css 3

### Setup

To run studio-props-system, install it locally using npm:

```bash
  npm install studio-props-system
```
### Usage

```javascript
import styled from 'styled-components';
import {color, typography } from 'studio-props-system';

const Text = styled.p`
${color}
${typography}
`;

function App() {
  return <Text fontSize='smHeading' color='Gray500'>studio props system</Text>
}
```

### Features

- light weight.
- simpler (easy-to-use).
- covered css/styled properties.
- work with `styled-components` only.

### Author

**M. Siraj**

[Linkedin] | [Twitter]

[twitter]: https://twitter.com/engsiraj_
[linkedin]: https://linkedin.com/in/engsiraj
