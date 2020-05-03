import React, { Suspense } from 'react';
import ReactDOM from 'react-dom';
import Router from './Router';
import * as serviceWorker from './serviceWorker';
import { firebaseConfig } from './config/firebase.config';
import {
  FirebaseAppProvider
} from 'reactfire';

ReactDOM.render(
  <FirebaseAppProvider firebaseConfig={firebaseConfig}>
    <React.StrictMode>
      <Suspense fallback={'Cargando...'}>
        <Router />
      </Suspense>
    </React.StrictMode>
  </FirebaseAppProvider>,
  document.getElementById('root')
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
