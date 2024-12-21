import { View, Text, TextInput, Image } from "react-native";
import React from "react";
import MyButton from "../components/MyButton";
import Logo from "../components/logo";
import _link from "../components/_link";
import { useRouter } from "expo-router";
const SignUp = () => {
  const router = useRouter();
  const onContinue = () => {
    router.navigate("/login");
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
          flex: 2,
          justifyContent: "center",
          alignItems: "center",
          borderTopLeftRadius: 40,
          borderTopRightRadius: 40,
          backgroundColor: "white",
        }}
      >
        <View
          style={{
            flex: 1,
            borderTopLeftRadius: 40,
            borderTopRightRadius: 40,
            backgroundColor: "white",
          }}
        >
          <Text style={{ marginTop: 12, fontSize: 15, fontWeight: "bold" }}>
            Full Name
          </Text>
          <TextInput
            style={{
              backgroundColor: "#E0E0E0E0",
              height: 50,
              width: 300,
              borderRadius: 20,
              padding: 15,
              marginTop: 5,
            }}
          />
          <Text style={{ marginTop: 12, fontSize: 15, fontWeight: "bold" }}>
            Email Address
          </Text>
          <TextInput
            style={{
              backgroundColor: "#E0E0E0E0",
              height: 50,
              width: 300,
              borderRadius: 20,
              padding: 15,
              marginTop: 5,
            }}
          />
          <Text style={{ marginTop: 12, fontSize: 15, fontWeight: "bold" }}>
            Enter Password
          </Text>
          <TextInput
            style={{
              backgroundColor: "#E0E0E0E0",
              height: 50,
              width: 300,
              borderRadius: 20,
              padding: 15,
              marginTop: 5,
            }}
          />
          <Text style={{ marginTop: 12, fontSize: 15, fontWeight: "bold" }}>
            Re-Enter Password
          </Text>
          <TextInput
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
          <View style={{ alignItems: "center" }}>
            <MyButton title={"Sign Up"} />
            <Text
              style={{
                marginTop: 20,
                marginBottom: 20,
                fontWeight: "500",
                fontSize: 15,
              }}
            >
              Already Have an account?{" "}
              {<_link title={"Login"} onPress={onContinue} />}
            </Text>
          </View>
        </View>
        {/* --------------------- */}
      </View>
    </View>
  );
};

export default SignUp;
