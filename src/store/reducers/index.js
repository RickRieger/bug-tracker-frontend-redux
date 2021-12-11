import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import projects from './projects';
import tickets from './tickets'
export default combineReducers({
  alert,
  auth,
  projects,
  tickets
});
