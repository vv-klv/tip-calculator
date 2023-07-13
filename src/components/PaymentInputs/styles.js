import styled from 'styled-components';

export const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

export const InputsSection = styled.div`
  position: relative;
  display: flex; 
  flex-direction: column;
  gap: 0.75rem;
  color: var(--color-grey-900);
  
  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

export const LabelWarning = styled.label`
  display: none;
`;

export const Tips = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 376px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;
