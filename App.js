import { StyleSheet, SafeAreaView } from 'react-native';
import { ComponenteModalize } from './src/components/ComponenteModalize';


export default function App() {


  return (
    <SafeAreaView style={styles.container}>
        <ComponenteModalize/>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
