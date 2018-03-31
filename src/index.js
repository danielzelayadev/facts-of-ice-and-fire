import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import configureStore from 'store';
import App from 'containers/App';

const store = configureStore();

const renderTarget = document.getElementById('app');

const renderApp = () => {
  if (renderTarget)
    render(
      <AppContainer>
        <Provider store={store}>
          <App />
        </Provider>
      </AppContainer>,
      renderTarget
    );
};
renderApp();

if (module.hot) module.hot.accept('./containers/App', () => renderApp());
