import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AuthStack = createStackNavigator(
  {
    SignInScreen: {
      getScreen: () => require('./screens/screens/signInScreeen').default
    }
  },
  {
    headerMode: 'none'
  }
);

const AppStack = createAppContainer(AuthStack);

export default AppStack;
