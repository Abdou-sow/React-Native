import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { ScrollView, StyleSheet, Text, View, Image, Pressable, ActivityIndicator } from 'react-native';


const onpressfontion = () => {
  alert("je suis cliquer")
}
export default function App() {
  const [showLoading] = useState(true)

  return (
    <ScrollView >
      <View style={styles.container2}>
        <Text>Open up App.js to start working on your app!</Text>
        <Text style={{ fontSize: 30 }}>text</Text>
        <Text style={{ textAlign: 'center' }}>text</Text>
        <Text><b>text</b></Text>
        <Image
          style={{ height: 50, width: 150 }}

          source={require("./image/konexio-logo_1.png")} />

        <Image
          style={{ height: 50, width: 150 }}

          source={{ uri: "https://www.konexio.eu/uploads/1/2/0/2/120245745/konexio-logo_1.png" }}

        />
        <Pressable onPress={onpressfontion}>
          <Text>onPress</Text>
        </Pressable>
        <ActivityIndicator size='small' color='blue' />
        {/* <StatusBar style="auto" /> */}
      </View>

    </ScrollView>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'blue',
    alignItems: 'center',
    justifyContent: 'center',
  },
  container2: {
    backgroundColor: 'white'
  }
});
