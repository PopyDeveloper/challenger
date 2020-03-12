
import { createStore, applyMiddleware } from 'redux'
import repoReducer from './ducks';
import thunk from 'redux-thunk';


const store = createStore(repoReducer, applyMiddleware(thunk))

export default store;