import React from 'react';
import { SafeAreaView, View, FlatList, StyleSheet, Text, StatusBar } from 'react-native';
import { Card } from 'react-native-paper';

const DATA = [
  {
    id: '1',
    title: 'São Paulo',
  },
  {
    id: '2',
    title: 'Rio Grande do Sul',
  },
  {
    id: '3',
    title: 'Bahia',
  },
  {
    id: '4',
    title: 'Minas Gerais',
  },
  {
    id: '5',
    title: 'Rio de Janeiro'
  }
];

const Item = ({ title }) => (
  <View style={styles.item}>
      <Text style={styles.title}>{title}</Text>
  </View>
);

const App = () => {
  const renderItem = ({ item }) => (
    <Card>
      <Item title={item.title} />
    </Card>
  );

  return (
    <SafeAreaView style={styles.container}>
      <FlatList
          data={DATA}
          renderItem={renderItem}
          keyExtractor={item => item.id}
        />
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: StatusBar.currentHeight || 0,
  },
  item: {
    backgroundColor: '#7fffd4',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});

export default App;