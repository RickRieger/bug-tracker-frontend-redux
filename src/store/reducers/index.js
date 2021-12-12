import { combineReducers } from 'redux';
import alert from './alert';
import auth from './auth';
import projects from './projects';
import tickets from './tickets';
import personnel from './personnel'
export default combineReducers({
  alert,
  auth,
  projects,
  tickets,
  personnel
});
