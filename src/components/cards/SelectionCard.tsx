import React from "react";
import { StyleSheet, Text, TouchableOpacity, View } from "react-native";
import { FontAwesome5 } from "@expo/vector-icons";
import { MaterialIcons } from "@expo/vector-icons";

interface SelectionCardProps {
  title: string;
  description: string;
  iconName: string;
  tint?: string;
  onPress: () => void;
}

const SelectionCard: React.FC<SelectionCardProps> = ({
  title,
  description,
  iconName,
  tint = "#4A90E2",
  onPress,
}) => {
  return (
    <TouchableOpacity
      style={styles.card}
      onPress={onPress}
      activeOpacity={0.85}
    >
      <View style={styles.row}>
        <View
          style={[styles.iconWrap, { backgroundColor: `${tint}1A` /* ~10% */ }]}
        >
          <FontAwesome5 name={iconName as any} size={20} color={tint} />
        </View>

        <View style={styles.textCol}>
          <Text style={styles.title}>{title}</Text>
          <Text style={styles.description}>{description}</Text>
        </View>

        <MaterialIcons name="chevron-right" size={26} color="#9CA3AF" />
      </View>
    </TouchableOpacity>
  );
};

export default SelectionCard;

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingVertical: 14,
    paddingHorizontal: 14,
    marginVertical: 8,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.08,
    shadowRadius: 10,
    elevation: 3,
  },
  row: {
    flexDirection: "row",
    alignItems: "center",
  },
  iconWrap: {
    width: 40,
    height: 40,
    borderRadius: 10,
    alignItems: "center",
    justifyContent: "center",
    marginRight: 12,
  },
  textCol: {
    flex: 1,
  },
  title: {
    fontSize: 16,
    fontWeight: "700",
    color: "#111827",
    marginBottom: 2,
  },
  description: {
    fontSize: 13,
    color: "#6B7280",
    lineHeight: 18,
  },
});
