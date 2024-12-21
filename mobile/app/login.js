import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import MyButton from "../components/MyButton";
import Logo from "../components/logo";
import _link from "../components/_link";
import { useRouter } from "expo-router";

const Login = () => {
  const router = useRouter();
  const onLogin = () => {
    router.navigate("/(tabs)");
  };
  const onContinue = () => {
    router.navigate("/signup");
  };
  return (
    <View style={{ flex: 1, backgroundColor: "#E0E0E0E0" }}>
      <View
        style={{
          flex: 1,
          justifyContent: "center",
          alignItems: "center",
          borderWidth: 0,
          backgroundColor: "#E0E0E0E0",
        }}
      >
        <Logo />
      </View>
      <View
        style={{
          flex: 1.7,
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: "white",
        }}
      >
        <View>
          <Text style={{ marginTop: 12, fontSize: 15, fontWeight: "bold" }}>
            Email Address
          </Text>
          <TextInput
            placeholder="Enter Your Email"
            style={{
              backgroundColor: "#E0E0E0E0",
              height: 50,
              width: 300,
              borderRadius: 20,
              padding: 15,
              marginTop: 5,
            }}
          />

          <Text style={{ marginTop: 20, fontSize: 15, fontWeight: "bold" }}>
            Password
          </Text>
          <TextInput
            placeholder="Password"
            style={{
              backgroundColor: "#E0E0E0E0",
              height: 50,
              width: 300,
              borderRadius: 20,
              padding: 15,
              marginTop: 5,
              marginBottom: 50,
            }}
          />
        </View>
        <MyButton title={"Login"} onPress={onLogin} />
        <Text
          style={{
            marginTop: 20,
            marginBottom: 20,
            fontWeight: "500",
            fontSize: 15,
          }}
        >
          Don't have an account?{" "}
          {<_link title={"Sign in"} onPress={onContinue} />}
        </Text>
      </View>
    </View>
  );
};

export default Login;
