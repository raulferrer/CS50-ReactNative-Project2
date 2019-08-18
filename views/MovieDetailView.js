import React from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';
import { fetchMovieById } from '../fetchData';

export default class MovieDetailView extends React.Component {
  constructor (props) {
    super(props);
    this.state = {
      movieInfo: ''
    }
  }

  componentDidMount() {
    const { navigation } = this.props;
    const item = navigation.getParam('selectedItem')
    navigation.setParams({title: item.Title})
    this.fecthSearch(item.imdbID)
  }

  fecthSearch = async (movieId) => {
    const movie = await fetchMovieById(movieId);
    this.setState({ movieInfo: movie });
  };

  render() {
    const imageURL = { uri: this.state.movieInfo.Poster }

    return (
      <View style={styles.mainView}>
        <Image source={imageURL} style ={styles.poster} />
        <Text style={styles.movieTitle} >{this.state.movieInfo.Title}</Text>
        <Text style={styles.movieYearCountry} >{this.state.movieInfo.Year}, {this.state.movieInfo.Country}</Text>
        <Text style={styles.movieSubTitle} >Actors</Text>
        <Text style={styles.movieCast} >{this.state.movieInfo.Actors}</Text>
        <Text style={styles.movieSubTitle} >Director</Text>
        <Text style={styles.movieCast} >{this.state.movieInfo.Director}</Text>
        <Text style={styles.movieSubTitle} >Summary</Text>
        <Text style={styles.movieCast} >{this.state.movieInfo.Plot}</Text>
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'rgb(48, 54, 56)',
    flexDirection: 'column',
    height: '100%'
  },
  poster: {
    width: 'auto',
    height: '50%',
    resizeMode: 'contain',
    margin: 5,
  },
  movieTitle: {
    fontSize: 20,
    color: 'rgb(240, 240, 240)',
    fontWeight: '900',
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
  },
  movieSubTitle: {
    fontSize: 18,
    color: 'rgb(240, 240, 240)',
    fontWeight: '900',
    marginTop: 10,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'left',
  },
  movieYearCountry: {
    fontSize: 16,
    color: 'rgb(240, 240, 240)',
    fontWeight: '500',
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'center',
  },
  movieCast: {
    fontSize: 16,
    color: 'rgb(240, 240, 240)',
    fontWeight: '500',
    marginTop: 5,
    paddingLeft: 15,
    paddingRight: 15,
    textAlign: 'left',
  },
});