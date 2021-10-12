import React from 'react';
import LoginScreen from './src/screens/Login/loginScreen';
import AppNavigation from './src/navigation/appNavigation';
import UserAuthNavigation from './src/navigation/userAuthNavigation';

import { AuthContext } from './src/components/context';
import { FAB } from 'react-native-paper';

export default function App() {

  const initialLoginState = {
    isLoading: true,
    userName: null,
    userToken: null,
    isSigned: false
  };

  const loginReducer = (prevState, action) => {
    switch( action.type ) {
      case 'LOGIN': 
        return {
          ...prevState,
          userName: action.id,
          isSigned: action.isSigned,
          isLoading: false,
        };
      case 'LOGOUT': 
        return {
          ...prevState,
          userName: null,
          isSigned: false,
          isLoading: false,
        };
    }
  };

  const [loginState, dispatch] = React.useReducer(loginReducer, initialLoginState);

  const authContext = React.useMemo(()=>({
    signIn: async(foundUser) => {
      const userToken = String(foundUser[0].userToken);
      const userName = foundUser[0].username;

      try {
        await AsyncStorage.setItem('userToken', userToken);
      } catch(e) {
        console.log(e);
      }
      console.log('user token: ', userToken);
      dispatch({ type: 'LOGIN', id: userName, token: userToken, isSigned: true });
    },
    signOut: async() => {
      try {
        await AsyncStorage.removeItem('userToken');
      } catch(e) {
        console.log(e);
      }
      dispatch({ type: 'LOGOUT' });
    },
  }));

  return(
    <AuthContext.Provider value={authContext}>
      {
        loginState.isSigned == false ? (
          <UserAuthNavigation/>
        )
        :
        <AppNavigation/>
      }
    </AuthContext.Provider>
  )
}