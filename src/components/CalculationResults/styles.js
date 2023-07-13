import styled from 'styled-components';

export const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  max-width: 412px;
  border-radius: 1rem;
  color: white;
  background-color: var(--color-cyan-900);

  @media (max-width: 376px) {
    padding: 1.5rem;
  }
`;

export const AmountsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 2rem;
`;

export const Amount = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: center;

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
  }
`;

export const AmountSubtitle = styled.div`
  font-size: var(--text-xs);
  color: var(--color-grey-500);
`;

export const AmountText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (max-width: 376px) {
    flex-direction: row;
    justify-content: left;
    gap: 1.25rem;
  }
`;

export const AmountSum = styled.div`
  font-size: var(--text-lg);
  color: var(--color-cyan-600);
  margin-left: auto;
  
  @media (max-width: 376px) {
    margin: 0.5rem 0;
  }
`;