import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import ComponentFlatList from './src/components/componentsFlatList.js';


export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
        <ComponentFlatList>
        </ComponentFlatList>
    </View>
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
