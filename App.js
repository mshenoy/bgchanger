import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TouchableOpacity
} from "react-native";

export default class App extends Component {
  constructor() {
    super();
    this.state = {
      randomColor: null,
      randomColorSecondary: "#B83227"
    };
  }

  getRandomColor = () => {
    return (
      "rgb(" +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      "," +
      Math.floor(Math.random() * 255) +
      ")"
    );
  };

  myButtonPressed = () => {
    //alert(this.getRandomColor());
    this.setState({
      randomColor: this.getRandomColor(),
      randomColorSecondary: this.getRandomColor()
    });
  };

  render() {
    return (
      <View
        style={[styles.container, { backgroundColor: this.state.randomColor }]}
      >
        <TouchableOpacity onPress={this.myButtonPressed}>
          <Text
            style={[
              styles.text,
              { backgroundColor: this.state.randomColorSecondary }
            ]}
          >
            Change Background
          </Text>
        </TouchableOpacity>
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
  text: {
    fontSize: 30,
    backgroundColor: "#B83227",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFFFFF"
  }
});
