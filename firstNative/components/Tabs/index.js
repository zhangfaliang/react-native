import {
    createStackNavigator,
    createAppContainer,
    createBottomTabNavigator
  } from "react-navigation";
  import Left from './left';
  import Center from './center';
  import Right from './right';

const Home = createStackNavigator(
    {
      Left: Left,
      Center: Center,
      Right: Right,
    },
    {
      defaultNavigationOptions: {
        headerTintColor: "#fff",
        headerStyle: {
          backgroundColor: "#000"
        }
      },
      navigationOptions: {
        tabBarLabel: "Home!"
      }
    }
  );
  
  export default  createAppContainer(createBottomTabNavigator({ Home }));