import React from 'react';
import PaymentInputs from '../PaymentInputs/PaymentInputs'
import CalculationResults from '../CalculationResults/CalculationResults'
import { MainContainer } from "./styles";


const TipCalculator = () => {
    return (
        <MainContainer>
            <PaymentInputs/>
            <CalculationResults/>
        </MainContainer>
    );
};

export default TipCalculator;
