import { ADD_MOVIES, UPDATE_LOADER, DO_LIKE, DO_DISLIKE } from '../constants/actionType'

const addMovies = payload => {
  return {
    type: ADD_MOVIES,
    payload
  }
}

const updateLoader = bool => {
  return {
    type: UPDATE_LOADER,
    payload: { loader: bool }
  }
}

const doLike = id => {
  return {
    type: DO_LIKE,
    payload: { id }
  }
}

const doDislike = id => {
  return {
    type: DO_DISLIKE,
    payload: { id }
  }
}

const addNextPageMovies = (page = 1) => {
  return dispatch => {
    // console.warn(page)
    dispatch(updateLoader(true))
    fetch(
      `https://api.themoviedb.org/3/movie/popular?api_key=bfa3a6ebbfe2a02b319f8c5f7034e27a&language=en-US&page=${page}`,
      {
        method: 'GET'
      }
    )
      .then(res => res.json())
      .then(response => {
        dispatch(addMovies(response))
      })
      .catch(err => {
        dispatch(updateLoader(true))
      })
  }
}

export { addNextPageMovies, doDislike, doLike }
