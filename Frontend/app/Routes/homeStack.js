import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import Login from "../screens/Login";
import Signup from "../screens/SignupScreen"
import Home from "../screens/HomeScreen"

const screens = {
  Welcome: {
    screen: WelcomeScreen,
    navigationOptions: {
      headerShown: null
  }
  },
  Login: {
    screen: Login,
    navigationOptions: {
      headerShown: null
  }
  },
  Register: {
    screen: Signup,
    navigationOptions: {
      headerShown: null
  }
  },
  Home: {
    screen: Home,
    navigationOptions: {
      headerShown: null
    }
  }
}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);