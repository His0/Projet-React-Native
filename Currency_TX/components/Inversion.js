import React from "react"
import { TouchableOpacity, Image, StyleSheet, Text } from "react-native"

const styles = StyleSheet.create({
  bouton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    marginVertical: 20,
  },
  icone: {
    marginRight: 10,
    width: 20,
    height: 20,
  },
  texte: {
    fontSize: 16,
    color: "white",
  },
})

export const Inversion = ({ onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.bouton}>
      <Text style={styles.texte}>Inverser</Text>
    </TouchableOpacity>
  )
}