import { createGlobalStyle } from 'styled-components';
import MainComponent from './components/MainComponent';

const GlobalStyle = createGlobalStyle`
  :root {
    /* COLORS */
    --color-cyan-100: hsl(185, 41%, 84%);
    --color-cyan-300: hsl(173, 61%, 77%);
    --color-cyan-600: hsl(172, 67%, 45%);
    --color-cyan-800: hsl(183, 79%, 24%);
    --color-cyan-900: hsl(183, 100%, 15%);
    
    --color-grey-100: hsl(189, 41%, 97%);
    --color-grey-500: hsl(184, 14%, 56%);
    --color-grey-900: hsl(186, 14%, 43%);
    
    --color-red: hsl(11, 52%, 60%);

    /* TYPO*/
    --text-xs: 14px;
    --text-sm: 16px;
    --text-md: 24px;
    --text-lg: 36px;
  }
`;

function App() {
  return (
    <div className="App">
        <GlobalStyle/>
        <MainComponent/>
    </div>
  );
}

export default App;
