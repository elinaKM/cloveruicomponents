import styled from 'styled-components'
import React from "react";
import {theme as defaultTheme} from "./Style/theme"

const StyledGameIcon = styled.img`
    width: ${props => props.size === "small" ? "100px" : props.size === "normal" ? "200px" : "200px"};
    min-width: ${props => props.size === "small" ? "100px" : props.size === "normal" ? "200px" : "200px"};
    height: ${props => props.size === "small" ? "100px" : props.size === "normal" ? "200px" : "200px"};
    min-height: ${props => props.size === "small" ? "100px" : props.size === "normal" ? "200px" : "200px"};
    border-radius: 100%;
    object-fit: cover;
    border: 5px solid ${props => props.theme.palette.primary};
    mix-blend-mode: ${props => props.blendMode || "unset"};
    object-position: ${props => props.position || "initial"};
`;

function GameIcon({size, blendMode, position, src, alt, theme}){
    return(
       <StyledGameIcon 
            size={size}
            blendMode={blendMode}
            position={position}
            src={src}
            alt={alt}
            theme={theme ? theme : defaultTheme}
        />
    );
}

export default GameIcon;