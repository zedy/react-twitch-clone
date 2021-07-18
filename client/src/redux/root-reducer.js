import { combineReducers } from 'redux';
import { reducer as formReducer } from 'redux-form';

import SignInReducer from './signin/signin.reducer';
import StreamsReducer from './streams/streams.reducer';

const rootReducer = combineReducers({
    auth: SignInReducer,
    form: formReducer,
    streams: StreamsReducer
});

export default rootReducer;