import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { View, Text, StyleSheet, Button } from "react-native";
import { makeAllTest } from "../../selectors/index";

class Detail extends PureComponent {
  static navigationOptions =  ({ navigation, navigationOptions, screenProps }) => {
    return {
      title: navigation.getParam('otherParam', 'A Nested Details Screen'),
    };
  };

  handlePress = () => {
    this.props.onTest(" detail you clicked !!!😁");
  };
  handleGotoHome = () => {
    //this.props.navigation.navigate("Home");
    this.props.navigation.push("Home");
  };
  render() {
    const { allTest, navigation } = this.props;
    const { test } = allTest || {};
    const itemId = navigation.getParam("itemId", "NO-ID");
    const otherParam = navigation.getParam("otherParam", "some default value");
    return (
      <View>
        <Text>Details Screen</Text>
        <Text>itemId: {JSON.stringify(itemId)}</Text>
        <Text>otherParam: {JSON.stringify(otherParam)}</Text>
        <Button
          title="Go to Details... again"
          onPress={() => this.props.navigation.push("Details")}
        />
        <Button
          title="Go to Home"
          onPress={() => this.props.navigation.navigate("Home")}
        />
        <Button
          title="Go back"
          onPress={() => this.props.navigation.goBack()}
        />
        <Button
          onPress={this.handlePress}
          title="detail click me"
          color="#841584"
          accessibilityLabel="detail"
        />
        <Text style={styles.welcome}>{JSON.stringify(this.props)}</Text>
      </View>
    );
  }
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#F5FCFF"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

const mapStateToProps = createStructuredSelector({
  allTest: makeAllTest
});

const mapDispatchToProps = dispatch => {
  return {
    onTest: key => dispatch({ type: "USER_FETCH_REQUESTED", key })
  };
};
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Detail);
