import { applyMiddleware, combineReducers, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import { User } from '../types/User';
import userReducer from './User/userReducer';

export type RootState = {
    user: User;
};

const rootReducer = combineReducers({ user: userReducer });

const middleware = [thunk];

const composeEnhancers = composeWithDevTools({ trace: true });

const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

// Infer the `RootState` and `AppDispatch` types from the store itself
// export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

export default store;
