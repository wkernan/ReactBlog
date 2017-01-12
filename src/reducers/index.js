import { combineReducers } from 'redux'; // lets app know about reducers we create
import PostsReducer from './reducer_posts';

const rootReducer = combineReducers({
  posts: PostsReducer
});

export default rootReducer;
