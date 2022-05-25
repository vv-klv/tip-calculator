import React from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';

import CustomButton from "./UI/CustomButton";

const ResultsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 2rem;
  border-radius: 1rem;
  color: white;
  background-color: var(--color-cyan-900);

  @media (max-width: 376px) {
    padding: 1.5rem;
  }
`;

const AmountsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  padding: 1rem 0;
  gap: 2rem;
`;

const Amount = styled.div`
  display: grid;
  grid-template-columns: 3fr 1fr;
  justify-content: center;

  @media (max-width: 376px) {
    display: flex;
    flex-direction: column;
  }
`;

const AmountSubtitle = styled.div`
  font-size: var(--text-xs);
  color: var(--color-grey-500);
`;

const AmountText = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.5rem;
  
  @media (max-width: 376px) {
    flex-direction: row;
    justify-content: left;
    gap: 2rem;
  }
`;

const AmountSum = styled.div`
  font-size: var(--text-lg);
  color: var(--color-cyan-600);
  margin-left: auto;
  
  @media (max-width: 376px) {
    margin: 0.5rem 0;
  }
`;

const Results = (props) => {
    return (
        <ResultsWrapper>
            <AmountsWrapper>
                <Amount>
                    <AmountText>
                        <div>Tip Amount</div>
                        <AmountSubtitle>/ person</AmountSubtitle>
                    </AmountText>
                    <AmountSum>{ '$' + props.tipSum }</AmountSum>
                </Amount>
                <Amount>
                    <AmountText>
                        <div>Total Amount</div>
                        <AmountSubtitle>/ person</AmountSubtitle>
                    </AmountText>
                    <AmountSum>{ '$' + props.tipSum }</AmountSum>
                </Amount>
            </AmountsWrapper>
            <CustomButton>Reset</CustomButton>
        </ResultsWrapper>
    );
};

Results.propTypes = {
    tipSum: PropTypes.string,
}
Results.defaultProps = {
    tipSum: "0.00",
}

export default Results;
