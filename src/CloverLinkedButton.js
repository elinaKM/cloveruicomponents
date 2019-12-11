import styled from 'styled-components'
import React from "react";
import { theme as defaultTheme} from "./Style/theme";
import { Link } from "react-router-dom";

const StyledLink = styled(Link)`
  & {
    display: block;
    padding: ${props => props.buttonSize === "normal" ? "20px" : (props.buttonSize === "large" ? "50px" : "20px")};
    border-radius: 10px;
    font-size: ${props => props.buttonSize === "normal" ? "2em" : (props.buttonSize === "large" ? "6em" : "2em")};
    font-weight: bold;
    align-self: ${props => props.buttonSize === "normal" ? "stretch" : (props.buttonSize === "large" ? "none" : "stretch")};
    background-color: ${props => props.theme.palette.primary};
    color: ${props => props.theme.palette.primaryText};
    text-decoration: none;
    text-align: center;
    box-shadow: 1px 1px 10px ${props => props.theme.palette.secondary};
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

function CloverLinkedButton({ size, to, children, theme }) {
  return (
    <StyledLink buttonSize={size} to={to} theme={theme ? theme : defaultTheme}>
      {children}
    </StyledLink>
  )
}

export default CloverLinkedButton;