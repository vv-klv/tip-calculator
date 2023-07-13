import React from 'react';
import { useDispatch } from 'react-redux';
import { setBill, setTip, setNumberOfPeople } from '../../features/tip/tipSlice';
import { Tips, InputsSection, InputsWrapper, LabelWarning } from "./styles";

import CustomInput from "../UI/CustomInput/CustomInput";
import Tip from "../UI/Tip/Tip";

const tipValues = [5, 10, 15, 25, 50];

const PaymentInputs = () => {
    const dispatch = useDispatch();

    return (
        <InputsWrapper>
            <InputsSection> {/* Сумма покупки */}
                <p>Bill $</p>
                <CustomInput
                    placeholder="0"
                    id="bill"
                    onChange={e => dispatch(setBill(+e.target.value))}
                />
                <LabelWarning htmlFor="bill">Must be > 0</LabelWarning>
            </InputsSection>

            <InputsSection> {/* Выбор % чаевых */}
                <div>Select Tip %</div>
                <Tips>
                    {tipValues.length && tipValues.map((tip, idx) =>
                        <Tip
                            key={idx}
                            onClick={() => dispatch(setTip(tip))}
                        >
                            {tip}%
                        </Tip>
                    )}
                    <CustomInput
                        placeholder="Custom"
                        align="center"
                        style={{padding: 0}}
                        onChange={e => dispatch(setTip(+e.target.value))}
                    />
                    <LabelWarning
                        htmlFor="people"
                        style={{bottom: "-1.5rem"}}
                    >
                        Must be > 0
                    </LabelWarning>
                </Tips>
            </InputsSection>

            <InputsSection> {/* Кол-во человек */}
                <div>Number of People</div>
                <CustomInput
                    placeholder="0"
                    id="people"
                    onChange={e => dispatch(setNumberOfPeople(+e.target.value))}
                />
                <LabelWarning htmlFor="people">Must be > 0</LabelWarning>
            </InputsSection>
        </InputsWrapper>
    );
};

export default PaymentInputs;