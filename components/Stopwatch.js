import React from "react";
import { StyleSheet, Text, View, TouchableOpacity } from "react-native";

const StopwatchContainer = ({
  timer,
  start,
  handleReset,
  handleToggle,
  handleAddDrink,
  handleRemoveDrink,
}) => {
  let padToTwo = (number) => (number <= 9 ? `0${number}` : number);

  return (
    <View style={styles.container}>
      <View style={styles.parent}>
        <Text style={styles.child}>{padToTwo(timer.hour) + " : "}</Text>
        <Text style={styles.child}>{padToTwo(timer.min) + " : "}</Text>
        <Text style={styles.child}>{padToTwo(timer.sec)}</Text>
      </View>

      <View style={styles.buttonParent}>
        <TouchableOpacity style={styles.button} onPress={handleReset}>
          <Text style={styles.buttonText}>Reset</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleToggle}>
          <Text style={styles.buttonText}>{!start ? "Start" : "Stop"}</Text>
        </TouchableOpacity>
      </View>
      <View style={styles.buttonParent}>
        <TouchableOpacity style={styles.button} onPress={handleRemoveDrink}>
          <Text style={styles.buttonText}>-Remove Drink</Text>
        </TouchableOpacity>
        <TouchableOpacity style={styles.button} onPress={handleAddDrink}>
          <Text style={styles.buttonText}>+Add Drink</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    width: "70%",
  },
  parent: {
    display: "flex",
    justifyContent: "center",
    flexDirection: "row",
    borderWidth: 1,
    borderRadius: 80,
    borderColor: "#694966",
    backgroundColor: "#694966",
    paddingLeft: "8%",
    paddingRight: "8%",
    paddingTop: ".5%",
    paddingBottom: ".5%",
  },

  child: {
    fontSize: 40,
    color: "#C89933",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
  },

  buttonParent: {
    display: "flex",
    flexDirection: "row",
    justifyContent: "space-around",
    marginTop: "12%",
  },

  button: {
    backgroundColor: "#694966",
    paddingTop: "5%",
    paddingBottom: "5%",
    paddingLeft: "5%",
    paddingRight: "5%",
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 20,
    borderWidth: 1,
    borderColor: "#694966",
    height: 60,
    width: 210,
  },

  buttonText: {
    color: "#C89933",
    fontSize: 20,
    alignSelf: "center",
  },
});

export default StopwatchContainer;
