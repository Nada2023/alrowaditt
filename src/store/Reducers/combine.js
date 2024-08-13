import { combineReducers } from 'redux';

import languageReducer from './language';

import webTransReducer from './webTrans.js';
export default combineReducers({
    language:languageReducer,
    webTrans:webTransReducer
})

