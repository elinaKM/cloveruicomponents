import styled from 'styled-components'
import React from "react";
import { theme } from "./Style/theme";
import { BrowserRouter, Link } from "react-router-dom";

const StyledLink = styled(Link)`
  & {
    padding: ${props => props.buttonSize === "normal" ? "20px" : (props.buttonSize === "large" ? "50px" : "20px")};
    border-radius: 10px;
    font-size: ${props => props.buttonSize === "normal" ? "2em" : (props.buttonSize === "large" ? "6em" : "2em")};
    font-weight: bold;
    align-self: ${props => props.buttonSize === "normal" ? "stretch" : (props.buttonSize === "large" ? "none" : "stretch")};
    background-color: ${props => props.themeProp.palette.primary};
    color: ${props => props.themeProp.palette.primaryText};
    text-decoration: none;
    text-align: center;
    box-shadow: 1px 1px 10px ${props => props.themeProp.palette.secondary};
  }
  &:focus {
    outline: none;
  }
  &:active {
    box-shadow: none;
  }
  &:active:before {
    display: none;
  }

  @media screen and (max-width: 1400px) {
    transform: scale(0.7);
  }
`;

function CloverLinkedButton({ size, to, children, useTheme }) {
  return(
      <BrowserRouter>
        <StyledLink buttonSize={size} to={to} themeProp={useTheme ? useTheme : theme}>
            {children}
        </StyledLink>      
      </BrowserRouter>
  )
}

export default CloverLinkedButton;