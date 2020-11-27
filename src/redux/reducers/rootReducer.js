import { combineReducers } from 'redux';
import auth from './auth';
import gallery from './gallery';
import news from './news';

const rootReducer = combineReducers({
    auth,
    gallery,
    news,
});

export default rootReducer;