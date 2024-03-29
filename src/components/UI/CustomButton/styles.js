import styled from 'styled-components';

export const StyledButton = styled.button`
  height: 3rem;
  border-radius: 0.5rem;
  text-transform: uppercase;
  font-size: var(--text-md);
  color: var(--color-cyan-900);
  background-color: var(--color-cyan-800);
  cursor: pointer;
  transition: all 0.2s linear;

  :hover {
    background-color: var(--color-cyan-600);
  }
`;