import { ADD_MOVIES, UPDATE_LOADER, DO_LIKE, DO_DISLIKE } from '../constants/actionType'

const initialState = {
  page: 0,
  total_results: 0,
  total_pages: 0,
  movieList: [],
  loader: false
}

export default (state = initialState, action) => {
  const { type, payload } = action
  let movieList = []
  switch (type) {
    case ADD_MOVIES:
      movieList = [...state.movieList, ...payload.results]
      // console.log({state,payload})
      return { ...state, ...payload, movieList, loader: false }

    case UPDATE_LOADER:
      return { ...state, loader: payload.loader }

    case DO_LIKE:
      movieList = state.movieList
      for (var i = 0; i < movieList.length; i++) {
        if (movieList[i].id === payload.id) {
          movieList[i] = { ...movieList[i], like: !movieList[i].like, dislike: false }
          break
        }
      }
      return { ...state, movieList: [...movieList] }

    case DO_DISLIKE:
      movieList = state.movieList
      for (var i = 0; i < movieList.length; i++) {
        if (movieList[i].id === payload.id) {
          movieList[i] = { ...movieList[i], like: false, dislike: !movieList[i].dislike }
          break
        }
      }
      return { ...state, movieList: [...movieList] }

    default:
      return state
  }
}
