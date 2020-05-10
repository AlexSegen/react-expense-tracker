import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { firebaseConfig } from './config/firebase.config';
import {
  FirebaseAppProvider
} from 'reactfire';

import "./i18n";

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <Suspense fallback={'Cargando...'}>
          <App />
      </Suspense>
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById('root')
);