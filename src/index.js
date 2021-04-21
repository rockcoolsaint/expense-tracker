import React from 'react';
import ReactDOM from 'react-dom';
import { SpeechProvider } from '@speechly/react-client';
import dotenv from 'dotenv';

import { Provider } from './context/context';
import App from './App';
import './index.css';

dotenv.config();

ReactDOM.render(
  <SpeechProvider appId={`${process.env.REACT_APP_SPEECHLY_ID}`} language="en-US">
    <Provider>
      <App />
    </Provider>
  </SpeechProvider>,
  document.getElementById('root')
);