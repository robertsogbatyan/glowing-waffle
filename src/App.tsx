import React from 'react';
import {Provider} from 'react-redux';
import {Router} from './components/router';
import {ThemeProvider} from './context';
import {store} from './store';
import {GlobalStyles, StyledReset} from './styled';

const App: React.FC = () => {
  return (
    <>
      <StyledReset />
      <GlobalStyles />
      <ThemeProvider>
        <Provider store={store}>
          <Router />
        </Provider>
      </ThemeProvider>
    </>
  );
};

export default App;
