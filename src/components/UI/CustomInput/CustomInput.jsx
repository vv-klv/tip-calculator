import React from 'react';
import { StyledInput } from './styles'

const CustomInput = (props) => {
  return <StyledInput {...props} type="number" min={1} step={0.01} />
}

export default CustomInput;