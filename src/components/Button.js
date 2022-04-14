import React from "react";
import { TouchableOpacity, Text, StyleSheet } from "react-native";

const Button = ({ onPress, Texto, disable }) => {
  return (
    <TouchableOpacity disable={disable} style={styles.botao} onPress={ onPress }>
      <Text style={styles.textoBotao}>{ Texto }</Text>
    </TouchableOpacity>
  )
}

const styles = StyleSheet.create({
  botao: {
    borderRadius: 8,
    paddingVertical: 17,
    backgroundColor: 'rgb(130, 10, 209)',
    marginVertical: 40,
    alignItems: 'center'
  },
  textoBotao: {
    color: "white",
    fontWeight: 'bold'
  }
})

export default Button;