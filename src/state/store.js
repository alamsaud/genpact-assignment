import 'rxjs';
import { createStore, applyMiddleware } from 'redux';
import { createEpicMiddleware } from 'redux-observable';
import reducer from './reducers';
import rootEpic from './epics';
import initialState from './initialState';
const epicMiddleware = createEpicMiddleware();
const store = createStore(reducer, initialState, applyMiddleware(epicMiddleware));
epicMiddleware.run(rootEpic);
export default store;