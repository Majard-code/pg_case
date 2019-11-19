import { createStore, combineReducers, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import mamaSaga from './sagas';
import instruments from './reducers/instruments';
import favorites from './reducers/favorites';

const reducer = combineReducers({
  instruments,
  favorites,
});

const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducer, applyMiddleware(sagaMiddleware));
window.s = store;
sagaMiddleware.run(mamaSaga);

store.subscribe(() => saveFavorites(store.getState().favorites));

const saveFavorites = state => {
  try {
    window.localStorage.setItem('favorites', JSON.stringify(state));
  } catch (err) {
    console.log('LS error');
  }
}

export default store;