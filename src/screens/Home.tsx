import { View, Text, StyleSheet, Image } from 'react-native'
import React from 'react'
import Brand from '../utils/brand'

const Home = () => {
  return (
    <View style={styles.container}>
      <View style={styles.img_container}>
        <Image style={styles.logo} source={require('../assets/images/logo.png')} />
      </View>
      <View style={styles.text_container}>
        <Text style={styles.intro_text}>Welcome home </Text>
        <Brand />
      </View>
    </View>
  )
}

export default Home

const styles = StyleSheet.create({
  container: {
    padding: 15
  },
  img_container: {
    alignItems: 'center',
    marginTop: 100
  },
  logo: {
    objectFit: 'cover',
    height: 100,
    width: 100
  },
  text_container: {
    flexDirection: 'row', // Aligns items horizontally in a row
    justifyContent: 'center', // Centers horizontally
    alignItems: 'baseline', // Aligns text to baseline
    marginTop: 20
  },
  intro_text: {
    fontSize: 16,
    textAlign: 'center'
  }
})
