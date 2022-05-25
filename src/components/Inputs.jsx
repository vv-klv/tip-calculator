import React from 'react';
import styled from 'styled-components';

import CustomInput from "./UI/CustomInput";
import Tip from "./UI/Tip";


const InputsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 1rem;
`;

const InputsSection = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  gap: 0.75rem;
  color: var(--color-grey-900);
  
  :not(:last-child) {
    margin-bottom: 2rem;
  }
`;

const LabelWarning = styled.label`
  display: none;
`;

const Tips = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 0.75rem;

  @media (max-width: 376px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const Inputs = () => {
    return (
        <InputsWrapper>
            <InputsSection> {/* Сумма покупки */}
                <p>Bill</p>
                <CustomInput placeholder={'0'} id={"bill"}/>
                <LabelWarning htmlFor={"bill"}>Must be > 0</LabelWarning>
            </InputsSection>

            <InputsSection> {/* Выбор % чаевых */}
                <div>Select Tip %</div>
                <Tips>
                    <Tip>5%</Tip>
                    <Tip>10%</Tip>
                    <Tip>15%</Tip>
                    <Tip>25%</Tip>
                    <Tip>50%</Tip>
                    <CustomInput
                        placeholder={'Custom'}
                        style={{
                            textAlign: 'center',
                            padding: 0
                    }}
                    />
                    <LabelWarning
                        htmlFor={"people"}
                        style={{bottom: "-1.5rem"}}
                    >
                        {"Must be > 0"}
                    </LabelWarning>
                </Tips>
            </InputsSection>

            <InputsSection> {/* Кол-во человек */}
                <div>Number of People</div>
                <CustomInput placeholder={'0'} id={"people"}/>
                <LabelWarning htmlFor={"people"}>{"Must be > 0"}</LabelWarning>
            </InputsSection>
        </InputsWrapper>
    );
};

export default Inputs;