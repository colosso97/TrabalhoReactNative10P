import { View, Text, StyleSheet } from 'react-native'
import React, { useState } from 'react'
import Header from '../Header'
import { TextInput } from 'react-native'
import { Button, TouchableOpacity } from 'react-native-web';

export default function App() {

  const [altura, setAltura] = useState(0);
  const [peso, setPeso] = useState(0);
  const [imc, setImc] = useState(0);
  const [mensagem, setMensagem] = useState("");

  // function Mensagem() {
  //   imc > 0 ? setImc("Seu IMC é: " + imc) : setImc("Preencha o Peso e Altura");
  // }

  const handleSubmit = (e) => {
    const calculo = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));
    setImc(calculo)
    console.log(calculo);
    
  }

  

  return (
    <View >
      <Header />
      <Text>Altura</Text>
      <TextInput style={styles.input} placeholder='Digite a sua Altura' keyboardType='numeric' onChangeText={(a) => setAltura(a)} />


      <Text>Peso</Text>
      <TextInput style={styles.input} placeholder='Digite o seu Peso' keyboardType='numeric' onChangeText={(p) => setPeso(p)} />
      <Button onPress={handleSubmit} title='Calcular'/>
      {/* <Text>
        {imc > 0 ? setMensagem("Seu IMC é: " + imc) : setMensagem("Preencha o Peso e Altura")}
        Seu IMC: {imc}
      </Text> */}
      {imc > 0 ? <Text>Seu IMC é: {imc}</Text> : <Text>Preencha o Peso e Altura</Text>}



    </View>
  )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
        backgroundColor: "#d9d9d9",
        gap: 20, // Espaçamento entre os itens
    },
    input: {
        width: 300,
        height: 40,
        borderColor: "#000",
        borderWidth: 1,
        borderRadius: 10,
        padding: 10, // Espaçamento interno
    },
    button: {
        padding: 12, // Espaçamento interno do botão
        width: 300,
        backgroundColor: "#ff0543",
        alignItems: "center",
        borderRadius: 20, // Bordas arredondadas do botão
    },
    textButton: {
        color: "white",
        fontSize: 16,
        fontWeight: "bold",
    },
    logo: {
        width: 100,
        height: 100,
    },
});