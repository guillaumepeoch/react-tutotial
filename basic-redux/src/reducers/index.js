// Combining all the reducers !!
import { combineReducers } from 'redux';
import movies from './movies_reducer';

// When we have more reducers we should add it here!!
const rootReducer = combineReducers({
  movies
})

export default rootReducer;
