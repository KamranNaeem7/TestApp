import { StyleSheet, TouchableOpacity, Text } from "react-native";

function BButton({ title = "title", bgColor = "green", onButtonPress }) {
  return (
    <TouchableOpacity
      style={[styles.btnCon, { backgroundColor: bgColor }]}
      onPress={onButtonPress}
    >
      <Text style={styles.btnTitle}>{title}</Text>
    </TouchableOpacity>
  );
}

export { BButton };

const styles = StyleSheet.create({
  btnCon: {
    padding: 10,
    height: 48,
    borderRadius: 50,
    justifyContent: "center",
    alignItems: "center",
  },
  btnTitle: {
    color: "white",
    fontSize: 16,
    fontWeight: "400",
  },
});
