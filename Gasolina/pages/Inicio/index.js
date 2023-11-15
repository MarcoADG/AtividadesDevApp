import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  TouchableOpacity,
  StyleSheet,
  Image,
  Modal,
} from "react-native";
import ActionModal from "../../components/ActionModal";

export default function Inicio() {
  const [gasolina, setGasolina] = useState("");
  const [alcool, setAlcool] = useState("");
  const [exibirModal, setExibirModal] = useState(false);
  const [melhorOpcao, setMelhorOpcao] = useState("");

  const calcularVantagem = () => {
    if (!alcool || !gasolina || isNaN(alcool) || isNaN(gasolina)) {
      alert("Informe valores válidos para ambos os combustíveis");
      setAlcool("")
      setGasolina("")
      return;
    }

    const razao = parseFloat(alcool) / parseFloat(gasolina);

    if (razao < 0.7) {
      setMelhorOpcao("Álcool");
    } else {
      setMelhorOpcao("Gasolina");
    }
    setExibirModal(true);
  };
  return (
    <View style={styles.container}>
      <Image
        style={styles.imagem}
        source={require("../../assets/Gasolina_Preco_por_Litro_2.png")}
      />
      <Text style={styles.titulo}>Qual a melhor opção?</Text>
      <Text style={styles.texto}>Álcool(Preço por Litro)</Text>
      <TextInput
        style={styles.input}
        placeholder={""}
        onChangeText={(text) => setAlcool(text)}
        value={alcool}
      ></TextInput>
      <Text style={styles.texto}>Gasolina(Preço por Litro)</Text>
      <TextInput
        style={styles.input}
        placeholder={""}
        onChangeText={(text) => setGasolina(text)}
        value={gasolina}
      ></TextInput>
      <TouchableOpacity style={styles.botao} onPress={calcularVantagem}>
        <Text style={styles.textoBotao}>Calcular</Text>
      </TouchableOpacity>
      <Modal visible={exibirModal} transparent={true}>
        <ActionModal
          handleClose={() => setExibirModal(false)}
          precoAlcool={alcool}
          precoGasolina={gasolina}
          melhorOpcao={melhorOpcao}
        />
      </Modal>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
  },
  imagem: {
    width: 200,
    height: 220,
  },
  titulo: {
    fontSize: 30,
    color: "white",
    fontWeight: 700,
  },
  texto: {
    fontSize: 18,
    color: "white",
    margin: 10,
  },
  botao: {
    backgroundColor: "#FBCD40",
    borderRadius: 10,
    alignItems: "center",
    width: 300,
    marginTop: 20,
  },
  input: {
    backgroundColor: "#f2f2f2",
    padding: 5,
    width: 300,
  },
  textoBotao: {
    color: "#1F1C20",
    fontWeight: 700,
    fontSize: 30,
  },
});
