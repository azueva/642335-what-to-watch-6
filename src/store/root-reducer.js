import {combineReducers} from 'redux';
import {processReducer} from './process-reducer/process-reducer';
import {dataReducer} from './data-reducer/data-reducer';
import {genreReducer} from './genre-reducer/genre-reducer';
import {userReducer} from './user-reducer/user-reducer';

export const NameSpace = {
  PROCESS: `PROCESS`,
  DATA: `DATA`,
  GENRE: `GENRE`,
  USER: `USER`
};

export default combineReducers({
  [NameSpace.PROCESS]: processReducer,
  [NameSpace.DATA]: dataReducer,
  [NameSpace.GENRE]: genreReducer,
  [NameSpace.USER]: userReducer,
});
