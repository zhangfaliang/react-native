import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";
import { View, Text, StyleSheet, Button } from "react-native";
import { makeAllTest } from "../../selectors/index";

class Index extends PureComponent {
  static navigationOptions = ({ navigation }) => {
    return {
      // title: "Home",
      // headerTitle instead of title
      headerLeft: (
        <Button
          onPress={() => navigation.navigate('MyModal')}
          title="modal"
          color="#000"
        />
      ),
      headerTitle: (
        <Button
          onPress={() => alert("This is a button!")}
          title="Info"
          color="#000"
        />
      ),
      headerRight: (
        <Button
          onPress={navigation.getParam("increaseCount")}
          title="+1 change state"
          color="#000"
        />
      )
    };
  };
  componentDidMount() {
    this.props.navigation.setParams({ increaseCount: this._increaseCount });
  }

  state = {
    count: 0
  };

  _increaseCount = () => {
    this.setState({ count: this.state.count + 1 });
  };
  handlePress = () => {
    this.props.onTest(" you clicked !!!😁");
  };
  handleGotoDetail = () => {
    //this.props.navigation.navigate("Details");
    this.props.navigation.push("Details", {
      itemId: 86,
      otherParam: "anything you want here"
    });
  };
  render() {
    const { allTest } = this.props;
    const { test } = allTest || {};
    const {count} = this.state;
    return (
      <View>
        <Button
          title={`${count} update to title`}
          onPress={() =>
            this.props.navigation.setParams({ otherParam: "Updated!" })
          }
        />
        <Button title="Go to Details" onPress={this.handleGotoDetail} />
        <Button
          onPress={this.handlePress}
          title={test.key}
          color="#841584"
          accessibilityLabel="Learn more about this purple button"
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
)(Index);
