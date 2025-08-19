import { View, Text } from "react-native";
import React from "react";
import { useDispatch } from "react-redux";

const LoginScreen = () => {
  const dispatch = useDispatch();

  return (
    <View>
      <Text>LoginScreen</Text>
    </View>
  );
};

export default LoginScreen;
