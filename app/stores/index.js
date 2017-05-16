import {createStore, applyMiddleware} from 'redux'
// import thunkMiddleware from 'redux-thunk'
import reducers from '../reducers'
import { syncHistoryWithStore, routerReducer } from 'react-router-redux'

// import { createDevTools } from 'redux-devtools'
// import LogMonitor from 'redux-devtools-log-monitor'
// import DockMonitor from 'redux-devtools-dock-monitor'

const createStoreWithMiddleware = applyMiddleware(
  // thunkMiddleware, //该中间件会让actions支持函数，并且传入dispatch，getState作为参数
)(createStore)

export default function configureStore(initialState) {
    const store = createStoreWithMiddleware(reducers, initialState)

    // if (module.hot) {
    //   // Enable Webpack hot module replacement for reducers
    //   module.hot.accept('../reducers', () => {
    //     const nextRootReducer = require('../reducers')
    //     store.replaceReducer(nextRootReducer)
    //   })
    // }
    
    return store
}