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
      randomColor: null
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
    this.setState({ randomColor: this.getRandomColor() });
  };

  render() {
    return (
      <View
        style={[styles.container, { backgroundColor: this.state.randomColor }]}
      >
        <TouchableOpacity onPress={this.myButtonPressed}>
          <Text style={styles.text}>Change Background</Text>
        </TouchableOpacity>
        <Text>{this.state.randomColor || ""}</Text>
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
    backgroundColor: "#BB2CD9",
    paddingVertical: 10,
    paddingHorizontal: 40,
    color: "#FFFFFF",
    borderRadius: 10,
    borderWidth: 2,
    borderColor: "#FFFFFF"
  }
});
