import React from 'react'
import { TextInput, View, StyleSheet, FlatList, Text, Image, TouchableOpacity } from 'react-native'
import { getMoviesFromApi } from '../fetchData'
import MovieItem from './MovieItem'
import Icon from 'react-native-vector-icons/FontAwesome'


export default class MoviesSearchView extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      textSearch: ''
    }
  }

  componentDidUpdate(prevProps, prevState) {
    if (this.state.textSearch !== prevState.textSearch && this.state.textSearch.length > 2) {
      this.fecthSearch(this.state.textSearch)
    } else if (this.state.textSearch.length < 3) {
      this.fecthSearch('')
    }
  }

  fecthSearch = async (textSearch) => {
    const movies = await getMoviesFromApi(textSearch)
    this.setState({ movies: movies })
  }

  moviePress = () => {

  }

  render() {
    const searchIcon = <View style={styles.icon}><Icon name="search" size={20} color="#bbb" /></View>
    return (
      <View style={styles.mainView} >
        <View style={styles.searchBackground}>
          <TextInput
          onChangeText={(textSearch) => this.setState({ textSearch })}
          placeholder="search…"
          style={styles.textInput}
          value={this.state.textField}
          />
          {searchIcon}
        </View>
        <FlatList
          style={styles.list}
          data={this.state.movies}
          showsVerticalScrollIndicator={false}
          renderItem={({item}) =>
            <TouchableOpacity onPress={() => this.props.navigation.navigate('Detail', {selectedItem: item})}>
              <MovieItem Title={item.Title} Year={item.Year} Poster={item.Poster}/>
            </TouchableOpacity>
          }
          keyExtractor={item => item.imdbID}
          directionalLockEnabled={true}
          horizontal={false}
        />
      </View>
    )
  }
}

const styles = StyleSheet.create({
  mainView: {
    backgroundColor: 'rgb(48, 54, 56)',
    flex: 1,
    flexDirection: 'column',
    alignItems: 'flex-start',
    alignContent: 'stretch',
  },
  icon: {
    width: '10%',
    marginLeft: 10,
  },
  searchBackground: {
    backgroundColor: 'rgb(48, 54, 56)',
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    height: 50,
    padding: 5,
  },
  textInput: {
    backgroundColor: 'rgb(190, 190, 190)',
    borderRadius: 5,
    fontSize: 16,
    height: 40,
    width: '90%',
    padding: 5,
  },
  list: {
    height: '90%',
  }
})