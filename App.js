import React, {Component} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';

import {View, TextInput} from './styles';

class App extends Component {
  state = {
    email: '',
    password: '',
    isAuthentiate: false,
  };

  login = async () => {
    const {email, password} = this.state;

    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      this.setState({isAuthentiate: true});
      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  render() {
    return (
      <View>
        <TextInput
          placeholder="email"
          value={this.state.email}
          onChangeText={(email) => this.setState({email})}
        />
        <TextInput
          placeholder="password"
          value={this.state.password}
          onChangeText={(password) => this.setState({password})}
        />
        <TouchableOpacity onPress={this.login}>
          <Text>Login</Text>
        </TouchableOpacity>

        {this.state.isAuthentiate ? <Text>Logadoo</Text> : null}
      </View>
    );
  }
}

export default App;
