import { View, Text, SafeAreaView, Image, StyleSheet, TouchableOpacity } from 'react-native'
import React from 'react'

export default function ActionModal({melhorOpcao, precoAlcool, precoGasolina, handleClose}) {
  return (
    <SafeAreaView style={styles.container}>
      <Image style={styles.imagem} source={require("../../assets/Gasolina_Preco_por_Litro.png")}/>
      <Text style={styles.titulo}>Compensa usar {melhorOpcao}</Text>
      <Text style={styles.texto2}>Com os Preços:</Text>
      <Text style={styles.texto}>Álcool: {precoAlcool}</Text>
      <Text style={styles.texto}>Gasolina: {precoGasolina}</Text>
      <TouchableOpacity style={styles.botao} onPress={handleClose}>
        <Text style={styles.textoBotao}>Calcular Novamente</Text>
      </TouchableOpacity>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
    container:{
        flex: 1,
        backgroundColor: "#1F1C20",
        alignItems: 'center',
        justifyContent: 'center'
    },
    imagem:{
        width: 200,
        height: 200
    },
    titulo:{
        color: "#FBCD40",
        fontSize: 30,
        fontWeight: 700,
        marginBottom: 20
    },
    texto:{
        color: "white",
        fontSize: 18,
    },
    texto2:{
        fontSize: 22,
        color: "white"
    },
    botao: {
        backgroundColor: "#FBCD40",
        borderRadius: 10,
        alignItems: "center",
        width: 300,
        marginTop: 20,
      },
      textoBotao: {
        color: "#1F1C20",
        fontWeight: 700,
        fontSize: 28,
      }
})