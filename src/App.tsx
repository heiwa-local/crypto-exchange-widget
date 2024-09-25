import React from 'react';
import { Provider } from "react-redux";
import './App.css';
import './styles/index.scss';
import { MultiInput, Button } from './components';
import { Input } from './components/Input';
import { ExchangeWidget } from './components/ExchangeWidget';
import { makeStore } from './utils/globalStore';

const globalStore = makeStore()

const App = () => {
  return (
    <Provider store={globalStore}>
      <div className="app">
          <div className='app__widget-wrapper'>
              <ExchangeWidget />
          </div>
      </div>
    </Provider>
  );
}

export default App;
