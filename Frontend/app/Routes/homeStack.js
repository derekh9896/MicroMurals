import { createStackNavigator } from "react-navigation-stack";
import { createAppContainer } from "react-navigation";
import WelcomeScreen from "../screens/WelcomeScreen";
import Login from "../screens/Login";
import Signup from "../screens/SignupScreen"
import Home from "../screens/HomeScreen"
import AddDesign from "../screens/AddDesign"
import Gallery from "../screens/Gallery"
import Livefeed from "../screens/Livefeed"
import MyDesigns from "../screens/MyDesigns"

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
  },
  AddDesign: {
    screen: AddDesign,
    navigationOptions: {
      headerShown: null
    }
  },
  Gallery: {
    screen: Gallery,
    navigationOptions: {
      headerShown: null
    }
  },
  Livefeed: {
    screen: Livefeed,
    navigationOptions: {
      headerShown: null
    }
  },
  MyDesigns: {
    screen: MyDesigns,
    navigationOptions: {
      headerShown: null
    }
  },
}


const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);