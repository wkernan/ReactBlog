import { combineReducers } from 'redux'; // lets app know about reducers we create
import PostsReducer from './reducer_posts';
import { reducer as formReducer } from 'redux-form'; // import redux-form, grab the reducer property and create var named formReducer. Used to help with naming conflicts

const rootReducer = combineReducers({
  posts: PostsReducer,
  form: formReducer
});

export default rootReducer;
