import React from 'react';
import ReactDOM from 'react-dom';
import {Route, IndexRoute, browserHistory, Router} from 'react-router';
import {Provider} from 'react-redux';
import App from '../container/App';
import Page1 from '../components/page1';
import Page2 from '../components/page2';
// import TodoRoute from './routes/TodoRoute';
// import DoingRoute from './routes/DoingRoute';
// import DoneRoute from './routes/DoneRoute';
import configureStore from '../stores';
const store = configureStore();
ReactDOM.render(
    <Provider store={store}>
        <Router history={browserHistory}>
            <Route path="/"  component={App}>
                <IndexRoute component={Page1}/>
               <Route path="Page2" component={Page2}/>
            </Route>
        </Router>
   </Provider>,
 document.getElementById("app"))

