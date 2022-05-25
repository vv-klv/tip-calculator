import React from 'react';
import styled from 'styled-components';

import Inputs from './Inputs'
import Results from './Results'

const MainContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  margin: 3rem auto;
  padding: 2rem;
  border-radius: 1.5rem;
  gap: 2rem;
  width: 920px;
  height: 480px;
  background-color: white;

  @media (max-width: 1024px) { 
    display: flex;
    flex-direction: column;
    height: auto;
    width: 480px;
  }
  
  @media (max-width: 376px) {
    width: 100%;
  }
`;

const MainComponent = () => {
    return (
        <MainContainer>
            <Inputs/>
            <Results/>
        </MainContainer>
    );
};

export default MainComponent;
