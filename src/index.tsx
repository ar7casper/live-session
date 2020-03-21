import React from 'react';
import ReactDOM from 'react-dom';
import { ThemeProvider } from 'emotion-theming';
import { theme } from './ui/theme';

import App from './App';

ReactDOM.render(
  <ThemeProvider {...{ theme }}>
    <App />
  </ThemeProvider>,
  document.getElementById('root'),
);
