import {
  View,
  Text,
  StyleSheet,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";

export default function Main() {
  const [peso, setPeso] = useState("");
  const [altura, setAltura] = useState("");
  const [imc, setImc] = useState(null);
  const [btnText, setBtnText] = useState("Calcular");
  const [resText, setResText] = useState("Preencha Peso e Altura:");

  const calculoIMC = () => {
    if (peso && altura) {
      const peso_Kg = parseFloat(peso);
      const altura_M = parseFloat(altura) / 100;

      if (!isNaN(peso_Kg) && !isNaN(altura_M)) {
        setImc((peso_Kg / (altura_M * altura_M)).toFixed(2));

        setBtnText("Novo Cálculo");
        setResText("Seu IMC é:");
      } else {
        return;
      }
    } else {
      return;
    }
  };

  const handleInputAltura = (text) => {
    setAltura(text);
  };
  const handleInputPeso = (text) => {
    setPeso(text);
  };

  return (
    <View style={styles.container}>
      <View
        style={{
          height: 150,
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <Text style={styles.texto}>{resText}</Text>
        <Text style={styles.resultado}>{imc}</Text>
      </View>
      <View>
        <Text style={styles.texto2}>Altura cm:</Text>
        <TextInput
          placeholder={"0"}
          style={styles.input}
          value={altura}
          onChangeText={handleInputAltura}
        ></TextInput>

        <Text style={styles.texto2}>Peso Kg:</Text>
        <TextInput
          placeholder={"0"}
          style={styles.input}
          value={peso}
          onChangeText={handleInputPeso}
        ></TextInput>
      </View>
      <TouchableOpacity style={styles.botao} onPress={calculoIMC}>
        <Text style={styles.texto}>{btnText}</Text>
      </TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: { alignItems: "center", justifyContent: "center" },
  texto: {
    fontSize: 25,
    fontWeight: "500",
    color: "white",
  },
  texto2: {
    fontSize: 20,
    color: "white",
  },
  botao: {
    alignItems: "center",
    backgroundColor: "#FF4B4B",
    display: "flex",
    borderRadius: 25,
    width: 300,
    marginTop: 30,
  },
  input: {
    textAlign: "center",
    backgroundColor: "#39373D",
    color: "white",
    height: 40,
    width: 300,
    borderRadius: 20,
    margin: 5,
  },
  resultado: {
    display: "flex",
    fontWeight: "600",
    fontSize: 30,
    color: "#FF4B4B",
  },
});
