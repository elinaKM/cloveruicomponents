# cloveruicomponents

> UI components library for dummy Clover brand that created as a part of the WEB programimg learning process

[![NPM](https://img.shields.io/npm/v/cloveruipack.svg)](https://www.npmjs.com/package/cloveruipack) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save cloveruicomponents
```
## Components

* ToggleButton
	Properties:
	onClick, fontSize, children, theme

* BasicButton
	Properties:
	size - normal/large,
	onClick, children, theme
	
* GameIcon
	Properties:
	size - normal/small,
	blendMode, position, src, alt, theme
	
* LabeledTextField
	Properties:
	label, type, id, placeholder, value, onChange, fontSize, theme

* Logo
	Properties:
	text, icon, iconAriaLabel, fontSize, spaceSize, theme

* Loading
	Properties:
	theme

* Marquee
	Properties:
	theme, fontSize, children

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
