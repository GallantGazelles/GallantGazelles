import { combineReducers } from 'redux';
import pitches from './pitches';
import createPitch from './createPitch';
import pitchPage from './pitch';
import user from './user';

const appReducer = combineReducers({
  pitches,
  createPitch,
  pitchPage,
  user
})

const rootReducer = (state, action) => {
  if (action.type === 'USER_LOGOUT') {
    state = undefined
  }
  return appReducer(state, action);
}

export default rootReducer;