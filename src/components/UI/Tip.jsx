import React from 'react';
import styled from 'styled-components';

const Tip = styled.div`
  display: flex;
  height: 3rem;
  border-radius: 0.25rem;
  font-size: var(--text-md);
  color: white;
  background-color: var(--color-cyan-900);
  justify-content: center;
  align-items: center;
  cursor: pointer;
  transition: all 0.2s linear;

  :hover {
    color: var(--color-cyan-900);
    background-color: var(--color-cyan-600);
  }
`;

export default Tip;