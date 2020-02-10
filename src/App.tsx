import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AuthStack = createStackNavigator(
  {
    SignInScreen: {
      getScreen: () => require('./screens/signInScreen').default
    },
    SignUpScreen: {
      getScreen: () => require('./screens/signUpScreen').default
    },
    CongratScreen: {
      getScreen: () => require('./screens/congratScreen').default
    }
  },
  {
    headerMode: 'none'
  }
);

const AppStack = createAppContainer(AuthStack);

export default AppStack;
