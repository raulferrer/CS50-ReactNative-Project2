import React from 'react'
import { View, StyleSheet, Text, Image } from 'react-native'

export default class MovieItem extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    const imageURL = { uri: this.props.Poster }
    return (
      <View style={styles.movieItem}>
        <Image source={imageURL} style ={styles.poster} />
        <View style ={styles.movieInfo}>
          <Text style ={styles.movieTitle}>{this.props.Title}</Text>
          <Text style ={styles.movieYear}>{this.props.Year}</Text>
        </View>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  movieItem:{
    width: '100%',
    height: 85,
    borderBottomColor: '#aaa',
    borderBottomWidth: 1,
    flexDirection: 'row',
  },
  movieInfo: {
    paddingTop: 5,
    paddingLeft: 5,
    flexDirection: 'column',
    alignItems: 'center',
    width: '80%',
    height: 85,
    alignItems: 'flex-start'
  },
  poster: {
    height: 75,
    width: 75,
    resizeMode: 'stretch',
    margin: 5,
    borderRadius: 5,
  },
  movieTitle: {
    fontSize: 16,
    color: 'rgb(240, 240, 240)',
    fontWeight: '500',
  },
  movieYear: {
    fontSize: 16,
    color: 'gray',
  }
})