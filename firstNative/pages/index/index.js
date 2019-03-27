import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { View, Text, StyleSheet, Button } from "react-native";

class Index extends PureComponent {
  handlePress = () => {
      this.props.onTest('click me!!!😁');
  };
  render() {
    return (
      <View style={styles.container}  >
        <Button
          onPress={this.handlePress}
          title="click me"
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

const mapStateToProps = (state /*, ownProps*/) => {
  return {
    test: state.test
  };
};

const mapDispatchToProps = dispatch => {
  return {
    onTest: key => dispatch({ type: "test", key })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
