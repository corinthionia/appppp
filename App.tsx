import React, { useState } from 'react';
import { SafeAreaView, StyleSheet, Text, TextInput, View } from 'react-native';

function App() {
  const [name, setName] = useState('');

  const handleInputChange = (text: string) => {
    console.log(text);
    setName(text);
  };

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.inputContainer}>
        <Text>이름</Text>
        <TextInput style={styles.input} value={name} onChangeText={handleInputChange} />
      </View>
    </SafeAreaView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'pink',
  },
  input: {
    flex: 1,
    borderWidth: 2,
    borderColor: 'black',
    width: 100,
    height: 100,
  },
  inputContainer: {
    flex: 1,
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'powderblue',
  },
});

export default App;
