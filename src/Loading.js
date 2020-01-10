import React from 'react'
import styled from 'styled-components'
import {theme as defaultTheme} from './Style/theme'

const DEFAULT_NUMBER_OF_BARS = 4;

const loading = keyframes`
  0% {
    transform: scale(1);
  }
  20% {
    transform: scale(1, 2.2);
  }
  40% {
    transform: scale(1);
  }
`;

const LoadingBar = styled.div`
  display: inline-block;
  height: "18px";
  width: "4px";
  border-radius: 4px;
  background-color: ${props => props.theme.palette.primary};
  margin: 0 5px;
  animation: ${loading} 1s ease-in-out infinite;

  &:nth-child(1) {
    animation-delay: 0;
  }
  &:nth-child(2) {
    animation-delay: 0.09s;
  }
  &:nth-child(3) {
    animation-delay: 0.18s;
  }
  &:nth-child(4) {
    animation-delay: 0.27s;
  }
`;

function Loading({theme}) {
  let bars = Array.from(Array(DEFAULT_NUMBER_OF_BARS).keys());
  bars = bars.map((i) => 
    <LoadingBar 
      key={i}
      theme={theme ? theme : defaultTheme}/>
  );
  return (
    <div>
      {bars}
    </div>
  );
}

export default Loading;
