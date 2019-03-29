import {
  createStackNavigator,
  createAppContainer,
} from "react-navigation";
import { Platform, NativeModules } from "react-native";
import Index from "../pages/index";
import Detail from "../pages/detail";
import ModalScreen from "../components/ModalScreen";
Platform.select({
  ios: () => {
    if (__DEV__) {
      NativeModules.DevSettings.setIsDebuggingRemotely(true);
    }
  },
  android: ""
});

const AppNavigator = createStackNavigator(
  {
    Home: Index,
    Details: Detail
  },
  {
    initialRouteName: "Home",
    /* The header config from HomeScreen is now here */
    defaultNavigationOptions: {
      headerStyle: {
        backgroundColor: "#f4511e"
      },
      headerTintColor: "#fff",
      headerTitleStyle: {
        fontWeight: "bold"
      }
    }
  }
);

const RootStack = createStackNavigator(
  {
    Main: {
      screen: AppNavigator
    },
    MyModal: {
      screen: ModalScreen
    }
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default createAppContainer(RootStack);
