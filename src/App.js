import './App.css';
import React from 'react';
import Header from './Components/Header';
import Body from './Components/Body';
import { Provider } from 'react-redux'
import store from './store';

function App() {
  return (
    <Provider store={store}>
      <Header />
      <Body />
    </Provider>

  );
}

export default App;