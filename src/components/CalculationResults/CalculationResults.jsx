import React from 'react';
import truncateAfterComma from '../../utils/truncateAfterComma';
import CustomButton from "../UI/CustomButton/CustomButton";
import { ResultsWrapper, AmountSum, AmountSubtitle,
         AmountText, AmountsWrapper, Amount } from './styles';
import { useSelector, useDispatch } from 'react-redux';
import { resetStore, setTip } from '../../features/tip/tipSlice';
import './styles';

const CalculationResults = () => {
    const bill = useSelector(state => state.tip.bill);
    const tip = useSelector(state => state.tip.tip);
    const numberOfPeople = useSelector(state => state.tip.numberOfPeople);
    const dispatch = useDispatch();

    const tipPerPerson = numberOfPeople === 0
                         ? 0
                         : truncateAfterComma(2, bill * tip / numberOfPeople / 100);

    const total = truncateAfterComma(2, bill + bill * tip / 100);

    return (
        <ResultsWrapper>
            <AmountsWrapper>
                <Amount>
                    <AmountText>
                        <div>Tip Amount</div>
                        <AmountSubtitle>/ person</AmountSubtitle>
                    </AmountText>
                    <AmountSum>{'$' + tipPerPerson}</AmountSum>
                </Amount>
                <Amount>
                    <AmountText>
                        <div>Total Amount</div>
                        <AmountSubtitle>/ person</AmountSubtitle>
                    </AmountText>
                    <AmountSum>{'$' + total / numberOfPeople }</AmountSum>
                </Amount>
            </AmountsWrapper>
            <CustomButton onClick={() => dispatch(resetStore())}>Reset</CustomButton>
        </ResultsWrapper>
    );
};

export default CalculationResults;
