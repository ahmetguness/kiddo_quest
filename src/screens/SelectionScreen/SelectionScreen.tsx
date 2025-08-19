import React from "react";
import { View, Text, ScrollView } from "react-native";
import { useDispatch, useSelector } from "react-redux";
import { styles } from "./styles";
import SelectionCard from "../../components/cards/SelectionCard";
import { useNavigation } from "@react-navigation/native";
import { GeneralNavigationProp } from "../../types/navigation_types/navigation_types";
import { setUserType } from "../../hooks/redux/slices/UserSlice";
import { LinearGradient } from "expo-linear-gradient";
import { MaterialIcons } from "@expo/vector-icons";
import { RootState } from "../../hooks/redux/store";
import { getTranslation } from "../../types/language/language_types";

const SelectionScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation<GeneralNavigationProp>();

  const langFromState = useSelector((state: RootState) => state.app.language);
  const t = getTranslation(langFromState).selection;

  const handleUserTypeSelection = (userType: "parent" | "child" | "guest") => {
    dispatch(setUserType(userType));
    navigation.navigate("LoginScreen");
  };

  return (
    <View style={styles.root}>
      <LinearGradient
        colors={["#EEF2FF", "#FFFFFF"]}
        start={{ x: 0, y: 0 }}
        end={{ x: 1, y: 1 }}
        style={styles.hero}
      >
        <View style={styles.heroHeader}>
          <MaterialIcons name="stars" size={26} color="#4F46E5" />
          <Text style={styles.title}>{t.title}</Text>
        </View>
        <Text style={styles.subtitle}>{t.subtitle}</Text>

        <View style={styles.chipsRow}>
          <View style={styles.chip}>
            <MaterialIcons name="check-circle" size={16} color="#4F46E5" />
            <Text style={styles.chipText}>{t.chips.tasks}</Text>
          </View>
          <View style={styles.chip}>
            <MaterialIcons name="card-giftcard" size={16} color="#4F46E5" />
            <Text style={styles.chipText}>{t.chips.rewards}</Text>
          </View>
          <View style={styles.chip}>
            <MaterialIcons name="family-restroom" size={16} color="#4F46E5" />
            <Text style={styles.chipText}>{t.chips.familySafe}</Text>
          </View>
        </View>

        <View style={styles.infoBox}>
          <Text style={styles.infoText}>{t.info}</Text>
        </View>
      </LinearGradient>

      <ScrollView
        contentContainerStyle={styles.cards}
        showsVerticalScrollIndicator={false}
      >
        <SelectionCard
          title={t.cards.parent.title}
          description={t.cards.parent.desc}
          iconName="users"
          tint="#10B981"
          onPress={() => handleUserTypeSelection("parent")}
        />
        <SelectionCard
          title={t.cards.child.title}
          description={t.cards.child.desc}
          iconName="smile"
          tint="#3B82F6"
          onPress={() => handleUserTypeSelection("child")}
        />
        <SelectionCard
          title={t.cards.guest.title}
          description={t.cards.guest.desc}
          iconName="user"
          tint="#F59E0B"
          onPress={() => handleUserTypeSelection("guest")}
        />
      </ScrollView>

      <View style={styles.footerNote}>
        <MaterialIcons name="lock" size={16} color="#6B7280" />
        <Text style={styles.footerNoteText}>
          {t.footer.privacyPrefix} {t.footer.privacyAction}
        </Text>
      </View>
    </View>
  );
};

export default SelectionScreen;
