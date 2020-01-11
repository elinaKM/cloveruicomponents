import React from 'react';
import GameIcon from '../src/GameIcon';
import {theme as defaultTheme} from '../src/Style/theme';
import slotMachineImg from '../src/images/slot-machine.jpg'
import bigSlotMachineImg from '../src/images/big-slot-machine.jpg'
import peachImg from '../src/images/peach.jpg'
import frozenImg from '../src/images/frozen.webp'
import PeachTheme from '../src/Style/PeachTheme';
import FreezTheme from '../src/Style/FreezTheme';

export default {
  title: 'GameIcon',
  component: GameIcon,
};

export const CloverSlotMachineSmallIcon = () =>
  <GameIcon size="small" blendMode="multip" position="center 5px" src={slotMachineImg} alt="slot machine image" theme={defaultTheme}/>
;

export const CloverSlotMachineNormalIcon = () =>
  <GameIcon src={bigSlotMachineImg} alt="big slot machine image" theme={defaultTheme}/>
;

export const PeachSmallIcon = () =>
  <GameIcon size="small" src={peachImg} alt="peach image" theme={PeachTheme}/>
;

export const FreezIcon = () =>
  <GameIcon src={frozenImg} alt="frozen image" theme={FreezTheme}/>
;