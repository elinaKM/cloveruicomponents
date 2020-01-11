import React from 'react'
import styled from 'styled-components'
import {theme as defaultTheme} from './Style/theme'

const StyledDiv = styled.div`
    height: ${props => props.height}; 
    overflow: hidden;
    position: relative;
    display: inline-block;
`;

const StyledText = styled.h1`
    color: ${props => props.theme.palette.primary};
    font-size: ${props => props.fontSize};

    margin: 0;
    transform:translateX(100%);
    animation: marquee 15s linear infinite;

    @keyframes marquee{
        0% { transform: translateX(100%) }
        100% {transform: translateX(-100%) }
    }
`;

function Marquee({theme, fontSize, children}){
    return(
        <StyledDiv height={fontSize}>
            <StyledText theme={theme ? theme : defaultTheme} fontSize={fontSize}>{children}</StyledText>
        </StyledDiv>
    );
}

export default Marquee;
