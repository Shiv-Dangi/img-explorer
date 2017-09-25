import {combineReducers} from 'redux';
import { routerReducer } from "react-router-redux";
import imageInfo from './imageReducer';

const rootReducer = combineReducers({
  routing: routerReducer,
  imageInfo
});

export default rootReducer;
