import { applyMiddleware, createStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import createSagaMiddleware from 'redux-saga';
import {Main} from './components/main'
import EmployeeReducer from './reducers/employee-reducer'
import rootSaga from './sagas/sagas'

const sagaMiddleware = createSagaMiddleware()
const store = createStore(EmployeeReducer, applyMiddleware(sagaMiddleware));// now the sagas will watch over the dispatch actions
sagaMiddleware.run(rootSaga);

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Main/>
      </div>
    </Provider>
  );
}

export default App;
