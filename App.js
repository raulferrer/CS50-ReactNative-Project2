import React from 'react';
import AppNavigator from './AppNavigator';
import { Image } from 'react-native';


export default class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      access: false
    }
  }

  componentDidMount() {
    setTimeout(() => {
      this.setState({ access: true });
    }, 2000);
  }

  render() {
    if(!this.state.access) {
        return <MainView />;
    }

    return (
        <AppNavigator />
    );
  }
}


class MainView extends React.Component {
  render() {
    return (
      <Image
      source={require('./assets/mainscreen.jpg')}
      style={{
        flex: 1,
        width: '100%',
        height: '100%',
        resizeMode: 'cover', 
      }}
      />
    )
  }
}
