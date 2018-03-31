import React from 'react';
import { render } from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';
import configureStore from './store';
import App from './components/App';

const store = configureStore();

const renderTarget = document.getElementById('app');

const renderApp = () => {
  if (renderTarget)
    render(
      <AppContainer>
        <Provider store={store}>
          <MuiThemeProvider>
            <App />
          </MuiThemeProvider>
        </Provider>
      </AppContainer>,
      renderTarget
    );
};
renderApp();

if (module.hot) module.hot.accept('./components/App', () => renderApp());
