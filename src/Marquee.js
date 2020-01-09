import React from "react";
import styled from 'styled-components';

const StyledDiv = styled.div`
    height: ${props => props.height}; 
    overflow: hidden;
    position: relative;
    display: inline-block;
`;

const StyledText = styled.h1`
    color: ${props => props.color};
    font-size: ${props => props.fontSize};

    margin: 0;
    transform:translateX(100%);
    animation: marquee 15s linear infinite;

    @keyframes marquee{
        0% { transform: translateX(100%) }
        100% {transform: translateX(-100%) }
    }
`;

function Marquee({color, fontSize, children}){
    return(
        <StyledDiv height={fontSize}>
            <StyledText color={color} fontSize={fontSize}>{children}</StyledText>
        </StyledDiv>
    );
}

export default Marquee;
