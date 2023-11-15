import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import Inicio from './pages/Inicio';

export default function App() {
  return (
    <View style={styles.container}>
      <Inicio/>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#1F1C20',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
