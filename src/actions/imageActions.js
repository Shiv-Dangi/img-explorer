import * as types from './actionTypes';
import imageApi from '../api/mockImageApi';

export function searchTermUpdate(search_term) {
  return {type: types.UPDATE_SEARCH_TERM, search_term};
}

export function fetchImagesSucsess(images) {
  return { type: types.LOAD_IMAGES_SUCCESS, images };
}

export function fetchImages(search_term) {
  return function(dispatch) {
    return imageApi.getAllImages().then(images => {
      dispatch(fetchImagesSucsess(images));
    }).catch(error => {
      throw(error);
    });
  };
}
