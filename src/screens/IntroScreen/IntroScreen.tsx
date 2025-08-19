import { View, Text, Button } from "react-native";
import React from "react";
import { GeneralNavigationProp } from "../../types/navigation_types/navigation_types";
import { useNavigation } from "@react-navigation/native";

const IntroScreen = () => {
  const navigation = useNavigation<GeneralNavigationProp>();

  return (
    <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Button
        title="NEXT PAGE"
        onPress={() => navigation.navigate("SelectionScreen")}
      />
    </View>
  );
};

export default IntroScreen;
