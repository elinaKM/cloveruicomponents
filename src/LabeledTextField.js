import React from 'react'
import styled from 'styled-components'
import {theme as defaultTheme} from './Style/theme'

function LabeledTextField({label, type, id, placeholder, value, onChange, fontSize, theme}) {
    return(
            <StyledLabel fontSize={fontSize} theme={theme ? theme : defaultTheme}>
                {label}
                <StyledInput
                  type={type}
                  id={id}
                  placeholder={placeholder}
                  value={value}
                  onChange={onChange}
                  fontSize={fontSize}
                  theme={theme ? theme : defaultTheme}
                />
            </StyledLabel>
    );
}

const StyledLabel = styled.label`
  font-size: ${props => props.fontSize};
  color: ${props => props.theme.palette.secondaryTextColor};
  display: flex;
  flex-direction: column;
`;

const StyledInput = styled.input`
  font-size: ${props => props.fontSize};
`;

export default LabeledTextField;