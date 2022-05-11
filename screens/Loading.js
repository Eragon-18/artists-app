import React from "react";
import {
  Text,
  View,
  StyleSheet,
  Image,
  TouchableOpacity,
  ActivityIndicator,
} from "react-native";
import firebase from "firebase";

export default class Loading extends React.Component {
  componentDidMount = () => {
    firebase.auth().onAuthStateChanged((user) => {
      if (user) {
        this.props.navigation.navigate("Home");
        // console.log("done")
      } else {
        this.props.navigation.navigate("Login");
        // console.log("not done")
      }
    });
  };

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator
          size="large"
          color="#25CDEF"
          style={styles.spinner}
        />
        <Text>Loading...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  spinner: {
    marginTop: 60,
  },
});
