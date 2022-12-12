import { StyleSheet, Image, ScrollView, TextInput, View } from "react-native";
import { BButton } from "../../components/BButton";

function Signin({ navigation }) {
  const goToHome = () => {
    navigation.navigate("Home");
  };
  return (
    <ScrollView contentContainerStyle={{ flex: 1, backgroundColor: "#fcd5ce" }}>
      <View style={{ padding: 15 }}>
        <Image
          source={{
            uri: "https://cdn.pixabay.com/photo/2022/11/19/18/45/gray-geese-7602847__340.jpg",
          }}
          style={{
            width: 100,
            height: 100,
            resizeMode: "contain",
            borderRadius: 50,
            alignSelf: "center",
            alignItems: "center",
            justifyContent: "center",
            padding: 10,
          }}
        />

        <View>
          <TextInput
            style={styles.inputContainer}
            placeholder="👱 Enter Your  Name"
            placeholderTextColor="#3D348B"
          />
          <TextInput
            style={styles.inputContainer}
            placeholder="#️⃣ Enter Your Number"
            placeholderTextColor="#3D348B"
          />
          <TextInput
            style={styles.inputContainer}
            placeholder="📧 Enter Your Email"
            placeholderTextColor="#3D348B"
          />
          <TextInput
            style={styles.inputContainer}
            placeholder=" 🔒 Enter Your Password"
            placeholderTextColor="#3D348B"
            secureTextEntry={true}
          />
        </View>
        <View>
          <BButton title="SingIn" onButtonPress={goToHome}></BButton>
        </View>
      </View>
    </ScrollView>
  );
}

export { Signin };
const styles = StyleSheet.create({
  textStyle: {
    fontSize: 25,
    padding: 10,
    fontWeight: "bold",
    justifyContent: "center",
    textAlign: "center",
    color: "#3D348B",
  },
  inputContainer: {
    padding: 10,
    borderColor: "red",
    borderRadius: 20,
    borderWidth: 3,
    margin: 5,
  },
});
