import React, {useState, useEffect} from 'react';
import {Text, TouchableOpacity} from 'react-native';
import firebase from 'react-native-firebase';

import {View, TextInput} from './styles';

const App = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isAuthentiated, setIsAuthenticated] = useState(false);

  const login = async () => {
    try {
      const user = await firebase
        .auth()
        .signInWithEmailAndPassword(email, password);

      setIsAuthenticated(true);

      console.log(user);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <View>
      <TextInput
        placeholder="email"
        value={email}
        onChangeText={(userEmail) => setEmail(userEmail)}
      />
      <TextInput
        placeholder="password"
        value={password}
        onChangeText={(userPassword) => setPassword(userPassword)}
      />
      <TouchableOpacity onPress={login}>
        <Text>Login</Text>
      </TouchableOpacity>

      {isAuthentiated ? <Text>Logadoo</Text> : null}
    </View>
  );
};

export default App;
