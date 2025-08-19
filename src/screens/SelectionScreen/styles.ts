import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
  root: {
    flex: 1,
    backgroundColor: "#F3F4F6",
  },

  hero: {
    paddingTop: 18,
    paddingBottom: 12,
    paddingHorizontal: 16,
    borderBottomLeftRadius: 24,
    borderBottomRightRadius: 24,

    shadowColor: "#000",
    shadowOffset: { width: 0, height: 6 },
    shadowOpacity: 0.06,
    shadowRadius: 8,
    elevation: 2,
  },
  heroHeader: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8 as any,
    justifyContent: "center",
    marginBottom: 6,
  },
  title: {
    fontSize: 20,
    fontWeight: "800",
    color: "#1F2937",
    textAlign: "center",
  },
  subtitle: {
    marginTop: 2,
    fontSize: 13,
    color: "#6B7280",
    textAlign: "center",
    lineHeight: 18,
  },

  chipsRow: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 12,
    gap: 8 as any,
  },
  chip: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#E0E7FF",
    paddingVertical: 6,
    paddingHorizontal: 10,
    borderRadius: 999,
    gap: 6 as any,
  },
  chipText: {
    fontSize: 12,
    color: "#3730A3",
    fontWeight: "600",
  },

  infoBox: {
    backgroundColor: "#FFFFFF",
    borderRadius: 12,
    paddingVertical: 10,
    paddingHorizontal: 12,
    marginTop: 12,
    borderWidth: 1,
    borderColor: "#E5E7EB",
  },
  infoText: {
    color: "#374151",
    fontSize: 13,
    lineHeight: 18,
    textAlign: "center",
  },

  cards: {
    paddingTop: 12,
    paddingHorizontal: 16,
    paddingBottom: 24,
  },

  footerNote: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    gap: 6 as any,
    paddingHorizontal: 12,
    paddingBottom: 12,
  },
  footerNoteText: {
    fontSize: 12,
    color: "#6B7280",
  },
});
