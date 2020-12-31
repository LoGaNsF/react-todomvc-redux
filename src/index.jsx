import { render } from 'react-dom';
import { Provider } from 'react-redux';
import 'todomvc-app-css/index.css';

import store from './store';

import App from './components/App';

render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById('app')
);
