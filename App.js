import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View } from "react-native";

import Stopwatch from "./components/Stopwatch";
import DrinkList from "./components/DrinkList";

export default function App() {
  const [drinks, setDrinks] = useState([]);
  const [start, setStart] = useState(false);
  const [timer, setTimer] = useState({
    sec: 0,
    min: 0,
    hour: 0,
  });

  useEffect(() => {
    setTimeout(() => {
      changeTimer();
    }, 1000);
  }, [start, timer.sec, timer.min, timer.hour]);

  const changeTimer = () => {
    if (start) {
      if (timer.min === 59) {
        setTimer({
          sec: 0,
          min: 0,
          hour: (timer.hour += 1),
        });
      } else if (timer.sec === 59) {
        setTimer({
          ...timer,
          sec: 0,
          min: (timer.min += 1),
        });
      } else {
        setTimer({
          ...timer,
          sec: (timer.sec += 1),
        });
      }
    }
  };

  const handleToggle = () => {
    setStart(!start);
  };

  const handleAddDrink = () => {
    const newDrinkState = [...drinks, { drink: "Drink", finished: 0 }];
    setDrinks(newDrinkState);
    setStart(true);
  };

  const handleRemoveDrink = () => {
    const newDrinkState = drinks.slice();
    newDrinkState.pop();
    setDrinks(newDrinkState);
    setStart(false);
  };

  const handleReset = () => {
    setTimer({
      sec: 0,
      min: 0,
      hour: 0,
    });
    setStart(false);

    setDrinks([]);
  };
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Welcome to Beer Buddy</Text>
      <Text style={styles.title}>You're on drink {drinks.length}</Text>

      <Stopwatch
        timer={timer}
        start={start}
        handleReset={handleReset}
        handleToggle={handleToggle}
        handleAddDrink={handleAddDrink}
        handleRemoveDrink={handleRemoveDrink}
      />
      <DrinkList drinks={drinks} setDrinks={setDrinks} timer={timer} />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    display: "flex",
    backgroundColor: "#DBD053",
    alignItems: "center",
    justifyContent: "flex-start",
    paddingTop: "8%",
  },

  title: {
    fontSize: 30,
    color: "#74526C",
    marginBottom: "8%",
  },
});
