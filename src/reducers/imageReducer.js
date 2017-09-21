import * as types from '../actions/actionTypes';

export default function imageReducer(state = {search_term: '', images: []}, action) {
  switch(action.type) {
    case types.UPDATE_SEARCH_TERM:
      return (Object.assign({}, state, {search_term: action.search_term}));
    case types.LOAD_IMAGES_SUCCESS:
      return (Object.assign({}, state, {images: action.images}));

    default:
      return state;
  }
}
