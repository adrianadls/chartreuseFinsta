import React from "react";
import MainScreen from "./Components/MainScreen";

export default class App extends React.Component {
  render() {
    return <AppStackNavigator />;
  }
}

const AppStackNavigator = StackNavigator({
  Main: {
    screen: MainScreen
  }
});

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center"
  }
});
