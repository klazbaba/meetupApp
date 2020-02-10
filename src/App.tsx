import { createAppContainer, createSwitchNavigator } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';

const AuthStack = createStackNavigator(
  {
    SignInScreen: {
      getScreen: () => require('./screens/signInScreen').default
    },
    SignUpScreen: {
      getScreen: () => require('./screens/signUpScreen').default
    },
    GuideScreen: {
      getScreen: () => require('./screens/guideScreen').default
    }
  },
  {
    headerMode: 'none'
  }
);

const MainStack = createStackNavigator({
  HomeScreen: {
    getScreen: () => require('./screens/homeScreen').default
  }
});

const AppStack = createAppContainer(createSwitchNavigator({ AuthStack, MainStack }));

export default AppStack;
