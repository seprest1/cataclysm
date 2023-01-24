import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App';
// redux
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { Provider } from 'react-redux';
import logger from 'redux-logger';
// saga 
import createSagaMiddleware from 'redux-saga';
import { takeEvery, put } from 'redux-saga/effects';
import axios from 'axios';

//////////// saga ////////////
function* rootSaga(){
    // yield takeEvery('FETCH_STUFF', fetchStuff);
};


function* fetchStuff(action){
    try{
       
        //const thing = yield axios.get('/route');
        //yield put({ type: 'DO_SOMETHING', payload: thing.data });
    }
    catch(error){
        //console.log('this failed', error);
    };
};

////////// reducers //////////
const templateReducer = (state = [], action) => {
    switch (action.type) {
        case 'DO_SOMETHING':
            return action.payload;
        default:
            return state;
    };
};


const sagaMiddleware = createSagaMiddleware();

////////// store //////////
const storeInstance = createStore(
    combineReducers({
       templateReducer,
    }),
    applyMiddleware(sagaMiddleware, logger),
);

sagaMiddleware.run(rootSaga);

ReactDOM.render(
        <Provider store={storeInstance}>
        <App />
        </Provider>,
    document.getElementById('root')
);
