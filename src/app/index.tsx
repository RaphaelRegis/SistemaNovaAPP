import { Text, View, StyleSheet } from "react-native";
import { Link } from "expo-router";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.text}>Sistema NOVA</Text>
      <Link href="./about" style={styles.button}>
        Sobre
      </Link>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "gray",
    alignItems: "center",
    justifyContent: "center",
  },
  text: {
    color: "#fff",

  },
  button: {
    fontSize: 24,
    color: "#fff",
    backgroundColor: "#48f",
    padding: 10,
    borderRadius: 5,
    marginVertical: 10,
  }
});
