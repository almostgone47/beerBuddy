import React from "react";
import {
  TouchableOpacity,
  FlatList,
  ScrollView,
  StyleSheet,
  Text,
  Button,
} from "react-native";

const DrinkList = ({ drinks, setDrinks, timer }) => {
  const handleFinished = (idx) => {
    const newDrinkState = drinks.slice();
    newDrinkState[idx]["finished"] = timer.min.toString();
    setDrinks(newDrinkState);
  };

  return (
    <>
      <ScrollView style={styles.scroll}>
        <FlatList
          data={drinks}
          renderItem={({ item, index }) => (
            <>
              <Text key={index + 1} style={styles.item}>
                {`#${index + 1}            `}
                {item.drink}
                {item.finished ? (
                  <Text>{item.finished}</Text>
                ) : (
                  <TouchableOpacity
                    style={styles.finishBtn}
                    title="Finish"
                    onPress={() => handleFinished(index)}
                  >
                    Finish
                  </TouchableOpacity>
                )}
              </Text>
            </>
          )}
        />
      </ScrollView>
    </>
  );
};

const styles = StyleSheet.create({
  scroll: {
    maxHeight: "63%",
    width: "95%",
    marginTop: "10px",
    backgroundColor: "#C89933",
  },

  item: {
    padding: 10,
    fontSize: 22,
    height: 44,
    color: "#5C415D",
    display: "flex",
    justifyContent: "space-between",
    textAlign: "center",
    backgroundColor: "#fff",
  },
  finishBtn: {
    width: "100px",
    display: "flex",
    alignItems: "center",
    backgroundColor: "rgb(33, 150, 243)",
    color: "#fff",
    position: "absolute",
    top: 0,
    right: 0,
    bottom: 0,
    paddingTop: 9,
  },
});

export default DrinkList;
