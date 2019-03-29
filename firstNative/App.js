/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow
 */
import React, { Component } from "react";
import { Provider } from "react-redux";
import store from "./store/index";
import Route from "./routers/route";

export default class App extends Component {
  handleNavigationChange = (prevState, newState, action) => {
    console.log("NavigationChange -------------------");
  };
  render() {
    return (
      <Provider store={store}>
        <Route
          onNavigationStateChange={this.handleNavigationChange}
          uriPrefix="/app"
        />
      </Provider>
    );
  }
}
