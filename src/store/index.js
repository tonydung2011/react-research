import {
    compose,
    createStore,
    applyMiddleware,
} from 'redux';
import thunk from 'redux-thunk';
import createHistory from 'history/createBrowserHistory';
import {
    createLogger,
} from 'redux-logger';
import {
    connectRouter,
    routerMiddleware,
} from 'connected-react-router';
import reduxImmutableStateInvariant from 'redux-immutable-state-invariant';
import rootReducer from '@internal/redux';

export const history = createHistory();
const connectRouterHistory = connectRouter(history);

function configureStoreProd(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
        thunk,
        reactRouterMiddleware,
    ];

    return createStore(
        connectRouterHistory(rootReducer),
        initialState,
        compose(applyMiddleware(...middlewares))
    );
}

function configureStoreDev(initialState) {
    const reactRouterMiddleware = routerMiddleware(history);
    const middlewares = [
        reduxImmutableStateInvariant(),
        createLogger(),
        thunk,
        reactRouterMiddleware,
    ];

    const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(
        connectRouterHistory(rootReducer),
        initialState,
        composeEnhancers(applyMiddleware(...middlewares))
    );

    if (module.hot) {
        module.hot.accept('@internal/redux', () => {
            const nextRootReducer = require('@internal/redux').default; // eslint-disable-line
            store.replaceReducer(connectRouterHistory(nextRootReducer));
        });
    }

    return store;
}

const configureStore = process.env.NODE_ENV === 'production' ? configureStoreProd : configureStoreDev;

export default configureStore;
