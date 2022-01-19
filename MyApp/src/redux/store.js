import {applyMiddleware, combineReducers, createStore} from 'redux';
import {appReducer, setFilmsWorkerSaga} from './app-reducer';
import createSagaMiddleware from 'redux-saga';
import {takeEvery} from 'redux-saga/effects';

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
    app: appReducer,
});

export const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));

sagaMiddleware.run(rootWatcher);

function* rootWatcher() {
    yield takeEvery('APP/SET-FILMS-DATA', setFilmsWorkerSaga);
}

window.store = store;
