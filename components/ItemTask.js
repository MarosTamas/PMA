import { Pressable } from "react-native";
import { StyleSheet, Text } from "react-native";

export default function ItemTask({ item }) {
  return (
    <Pressable style={styles.itemContainer}>
      <Text style={styles.taskText}>{item.title}</Text>
    </Pressable>
  );
}

const styles = StyleSheet.create({
  itemContainer: {
    backgroundColor: "#ff0505",
    margin: 5,
  },
  taskText: {
    color: "#fff",
    fontSize: 16,
    padding: 5,
    fontWeight: "bold",
  },
});
