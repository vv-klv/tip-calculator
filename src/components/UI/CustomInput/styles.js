import styled from 'styled-components';

export const StyledInput = styled.input`
  position: relative;
  padding: 1rem;
  height: ${({height}) => height || '3rem'};  
  width: ${({width}) => width || '100%'};  
  color: var(--color-cyan-900);
  caret-color: var(--color-cyan-600);
  font-size: var(--text-md);
  background-color: var(--color-grey-100);
  border-radius: 0.25rem;
  text-align: ${({align}) => align || 'right'};

  ::-webkit-outer-spin-button,
  ::-webkit-inner-spin-button {
    -webkit-appearance: none;
    margin: 0;
  }
  
  :invalid {
    border: 2px solid var(--color-red);
    
    :hover {
      border: 2px solid var(--color-red);
      caret-color: var(--color-red);
    }
    
    ~ label {
      position: absolute;
      display: inline-block;
      right: 0;
      color: var(--color-red);
    }
  }
  
  :hover {
    border: 2px solid var(--color-cyan-600)
  }
  
  ::placeholder {
    color: var(--color-grey-900);
  }
`;
