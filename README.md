# cloveruicomponents

> UI components library for dummy Clover brand that created as a part of the WEB programimg learning process

[![NPM](https://img.shields.io/npm/v/cloveruipack.svg)](https://www.npmjs.com/package/cloveruipack) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save cloveruicomponents
```
## Components

CloverToggleButton

Round button that used for toggle/play/roll actions in games or applications of "Clover" brand.
Properties:
- clickHandler - "onClick" action
- sizeOfFont - font size of button's title
- themeProp - theme object that is used for collors and decoration of the button 
	(if not been provided, internal default theme is being used) 

CloverLinkedButton

Basic button (based on styled(Link)) usually used to move to the game or all other action.
Properties:
- buttonSize - posible values: "normal"/"large" (default value: "normal" if not provided)
- to - link to new location
- themeProp - theme object that is used for collors and decoration of the button 
	(if not been provided, internal default theme is being used)  



## Usage

```jsx
import React from 'react';
import styled, { css} from 'styled-components';

import {CloverToggleButton} from 'cloveruicomponents';

class Example extends Component {
  render () {
    return (
	  <CloverToggleButton clickHandler={handler} sizeOfFont="40px">Play</CloverToggleButton>
    )
  }
}
```

## License

none © [elinaKM](https://github.com/elinaKM)
