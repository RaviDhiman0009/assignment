import React from 'react'
import { View, FlatList } from 'react-native'
import { connect } from 'react-redux'

import styles from './main.style'
import MyMovieItem from './movieItem'
import Loader from '../../loader'
import { addNextPageMovies, doLike, doDislike } from '../../redux/action'

const LOAD_MORE = 'LOAD_MORE'

class Main extends React.Component {
  componentDidMount () {
    this.addMoreMovies()
  }

  addMoreMovies = () => {
    let { addNextPageOfMovies, page } = this.props
    addNextPageOfMovies(page + 1)
  }

  render () {
    const { movieList = [], isLoading, total_pages, page, like, disLike } = this.props
    return (
      <View style={styles.body}>
        <Loader loading={isLoading} />
        <View style={[styles.container, styles.fullFlex]}>
          <FlatList
            data={[...movieList, page < total_pages && { id: LOAD_MORE, action: this.addMoreMovies }]}
            renderItem={({ item }) => <MyMovieItem item={item} like={like} disLike={disLike} />}
            keyExtractor={(item, key) => `${key}`}
          />
        </View>
      </View>
    )
  }
}

const mapStatepToProps = state => {
  return {
    page: state.page,
    total_pages: state.total_pages,
    movieList: state.movieList,
    isLoading: state.loader
  }
}

const mapDispatchToProps = dispatch => {
  return {
    addNextPageOfMovies: page => dispatch(addNextPageMovies(page)),
    like: id => dispatch(doLike(id)),
    disLike: id => dispatch(doDislike(id))
  }
}

export default connect(
  mapStatepToProps,
  mapDispatchToProps
)(Main)
