import { Platform, StyleSheet } from "react-native";
import { appColor } from "../constants/appColor";
import { fontFamilies } from "../constants/fontFamilies";

export const globalStyles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: appColor.white,
  },
  text: {
    fontFamily: fontFamilies.regular,
    fontSize: 16,
    color: appColor.text,
  },
  button: {
    borderRadius: 12,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: appColor.white,
    paddingHorizontal: 8,
    paddingVertical: 8,
    minHeight: 56,
    flexDirection: "row",
  },
  shadow: {
    shadowColor: Platform.OS === "ios" ? "rgba(0,0,0,0.3)" : "rgba(0,0,0,0.5)",
    shadowOffset: {
      width: 0,
      height: 6,
    },
    shadowOpacity: 0.25,
    shadowRadius: 8,
    elevation: 8,
  },
  section: {
    paddingHorizontal: 16,
    paddingBottom: 20,
  },
  row: {
    flexDirection: "row",
    justifyContent: "flex-start",
    alignItems: "center",
  },
  tag: {
    paddingHorizontal: 12,
    paddingVertical: 8,
    borderRadius: 100,
  },
  card: {
    borderRadius: 12,
    backgroundColor: appColor.white,
    padding: 12,
    margin: 12,
    marginVertical: 6,
    marginBottom: 16,
  },
  noSpaceCard: {
    alignItems: "center",
    width: 45,
    height: 45,
    justifyContent: "center",
    padding: 0,
    marginHorizontal: 0,
    marginVertical: 0,
  },
  inputContainer: {
    flexDirection: "row",
    borderRadius: 12,
    borderWidth: 1,
    borderColor: appColor.gray3,
    width: "100%",
    minHeight: 56,
    paddingVertical: 14,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 15,
    backgroundColor: appColor.white,
    marginBottom: 19,
  },
  input: {
    padding: 0,
    margin: 0,
    flex: 1,
  },
  center: {
    justifyContent: "center",
    alignItems: "center",
  },
});
