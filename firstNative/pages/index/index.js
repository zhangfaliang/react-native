import React, { PureComponent } from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from 'reselect';
import { makeAllTest } from '../../selectors/index';
import { View, Text, StyleSheet, Button, NativeModules } from "react-native";

class Index extends PureComponent {
  handlePress = () => {
      this.props.onTest(' you clicked !!!😁');
  };
  render() {
      const { allTest } =this.props;
      const { test } = allTest||{}
    return (
      <View style={styles.container}  >
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
    allTest:makeAllTest
})


const mapDispatchToProps = dispatch => {
  return {
    onTest: key => dispatch({ type: "USER_FETCH_REQUESTED", key })
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Index);
