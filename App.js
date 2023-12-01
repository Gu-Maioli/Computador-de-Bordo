import { Component, React } from "react";
import {
  StyleSheet,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from "react-native";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      consumo: 0,
      litrosTanque: 0,
      percorrer: 0,
      autonomia: 0,
      totalLitros: 0,
      ativa: false,
      texto: "Litro(s) Restantes no Tanque: ",
    };

    this.Percorrer = this.Percorrer.bind(this);
    this.Autonomia = this.Autonomia.bind(this);
  }

  Percorrer() {
    var litrosConsumido = this.state.percorrer / this.state.consumo;
    var litrosTanqueTotal = this.state.litrosTanque - litrosConsumido;

    this.setState({ totalLitros: litrosTanqueTotal, ativa: true });
  }

  Autonomia() {
    var total = this.state.consumo * this.state.litrosTanque;

    this.setState({
      autonomia: total,
    });
  }

  render() {
    return (
      <View style={styles.container}>
        <View>
          <Text style={styles.txtTitle}>Computador de Bordo</Text>
        </View>
        <View style={styles.body}>
          <TextInput
            style={styles.input}
            placeholder="Consumo (Km/Litros): "
            keyboardType="numeric"
            onChangeText={(value) => this.setState({ consumo: value })}
          />
          <TextInput
            style={styles.input}
            placeholder="Litros no Tanque: "
            keyboardType="numeric"
            onChangeText={(value) => this.setState({ litrosTanque: value })}
          />
        </View>
        <View style={styles.div}>
          <TextInput
            style={styles.input}
            placeholder="Percorrer Km/s:"
            keyboardType="numeric"
            onChangeText={(value) => this.setState({ percorrer: value })}
          ></TextInput>
          <Text style={styles.txt}>
            {this.state.ativa == false ? "" : this.state.texto}
            {this.state.totalLitros <= 0 ? "" : this.state.totalLitros}
          </Text>
          <TouchableOpacity style={styles.btn} onPress={() => this.Percorrer()}>
            <Text style={styles.txt}>Percorrer Km/s </Text>
          </TouchableOpacity>
        </View>

        <View style={styles.div2}>
          <Text style={styles.txt2}>
            Autonomia (em KM):{" "}
            {this.state.autonomia <= 0 ? "" : this.state.autonomia + " Km/h"}
          </Text>

          <TouchableOpacity style={styles.btn} onPress={() => this.Autonomia()}>
            <Text style={styles.txt}>Calcular Autonomia</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#B0C4DE",
    alignItems: "center",
    justifyContent: "flex-start",
  },
  txtTitle: {
    fontWeight: "bold",
    marginTop: 50,
    fontSize: 20,
    color: "black",
  },
  txt: { fontWeight: "bold", textAlign: "center", margin: 5, color: "black" },
  txt2: {
    fontWeight: "bold",
    textAlign: "center",
    marginTop: 20,
    margin: 5,

    color: "black",
  },
  body: {
    textAlign: "center",
  },
  btn: {
    fontWeight: "bold",
    textAlign: "center",
    color: "black",
    backgroundColor: "#DCDCDC",
    borderColor: "#66CDAA",
    margin: 12,
    width: 210,
    height: 40,
    borderWidth: 4,
    borderRadius: 6,
  },
  div: {
    width: 300,
    height: 180,
    borderRadius: 8,
    marginTop: 15,
    backgroundColor: "#ADD8E6",
    alignItems: "center",
  },
  div2: {
    width: 300,
    height: 110,
    borderRadius: 8,
    marginTop: 15,
    backgroundColor: "#ADD8E6",
    alignItems: "center",
  },
  input: {
    width: 210,
    height: 52,
    margin: 12,
    borderWidth: 4,
    borderRadius: 6,
    borderColor: "#4169E1",
    textAlign: "center",
    backgroundColor: "white",
    fontWeight: "bold",
    color: "black",
  },
});

export default App;
