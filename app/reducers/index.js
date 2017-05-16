import { combineReducers } from 'redux';
import add from './add';
import { routerReducer as routing } from 'react-router-redux';
// import visibilityFilter from './visibilityFilter';

const reducer = combineReducers({
  add,
  routing
});

export default reducer;