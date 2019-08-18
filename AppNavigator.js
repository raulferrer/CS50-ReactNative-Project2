import {
  createStackNavigator,
  createAppContainer
} from 'react-navigation';
import MoviesSearchView from './views/MoviesSearchView.js'
import MovieDetailView from './views/MovieDetailView.js'

const Container = createStackNavigator({
Search: {
  screen: MoviesSearchView,
  navigationOptions: ({ navigation }) => ({
    title: 'Movie list',
    headerStyle: {
      backgroundColor: 'rgb(48, 54, 56)',
    },
    headerTitleStyle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'rgb(240, 240, 240)',
    },
  }),
},
Detail: {
  screen: MovieDetailView,
  navigationOptions: ({ navigation }) => ({
    title: navigation.state.params.title,
    headerStyle: {
      backgroundColor: 'rgb(48, 54, 56)',
    },
    headerTintColor: 'rgb(240, 240, 240)',
    headerTitleStyle: {
      fontSize: 24,
      fontWeight: 'bold',
      color: 'rgb(240, 240, 240)',
    },
  }),
}
});

const AppNavigator = createAppContainer(Container);

export default AppNavigator;