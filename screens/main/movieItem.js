import React from 'react'
import { View, Image, Text, TouchableOpacity, TouchableHighlight } from 'react-native'
import { Colors } from 'react-native/Libraries/NewAppScreen'

import styles from './main.style'

const IMAGE_DOMAIN_URL = 'https://image.tmdb.org/t/p/w500/'
const LOAD_MORE = 'LOAD_MORE'

export default class MyMovieItem extends React.PureComponent {
  render () {
    const { item, like, disLike } = this.props
    if (item.id === LOAD_MORE) {
      return (
        <View style={styles.btnContainer}>
          <TouchableOpacity onPress={item.action} style={styles.loadMoreBtn}>
            <Text style={{ color: Colors.lighter }}>Load More</Text>
          </TouchableOpacity>
        </View>
      )
    } else if (item.id) {
      return (
        <View style={styles.mb10}>
          <View style={{ flexDirection: 'row' }}>
            <Image style={styles.img} source={{ uri: IMAGE_DOMAIN_URL + item.poster_path }} />
            <View style={styles.fullFlex}>
              <Text style={styles.tittleText}>{item.title}</Text>
              <Text style={styles.desciptionText}>{item.overview}</Text>
            </View>
          </View>
          <View style={styles.likeContainer}>
            <TouchableHighlight
              onPress={() => {
                like(item.id)
              }}
              style={[styles.center, styles.like]}
            >
              <Text>{item.like ? 'Liked' : 'Like'}</Text>
            </TouchableHighlight>
            <TouchableHighlight
              onPress={() => {
                disLike(item.id)
              }}
              style={[styles.center, styles.like]}
            >
              <Text>{item.dislike ? 'DisLiked' : 'DisLike'}</Text>
            </TouchableHighlight>
          </View>
        </View>
      )
    } else {
      return <View style={styles.mb10} />
    }
  }
}
