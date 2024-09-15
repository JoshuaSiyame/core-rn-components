// import modules
import React from "react";
import { Button, Image, SafeAreaView, StyleSheet, Text, View } from "react-native";
import {  DrawerItemList ,createDrawerNavigator } from "@react-navigation/drawer"
import { NavigationContainer } from "@react-navigation/native";

// import screens
import Home from "./src/screens/Home";
import About from "./src/screens/About";
import Academy from "./src/screens/Academy";
import Blog from "./src/screens/Blog";
import Courses from "./src/screens/Courses";
import Events from "./src/screens/Events";
import Projects from "./src/screens/Projects";

// drawer instance
const Stack = createDrawerNavigator();

const App = () =>{
  return (
    <NavigationContainer>
      <Stack.Navigator drawerContent={(props)=>{
        return (
          <SafeAreaView>
            <View style={styles.info_container}>
              <Image style={styles.logo} source={require('./src/assets/images/logo.png')} />
              <Text style={styles.user_name}>Joshua Siyame</Text>
              <Text style={styles.handle}>@decoded2023</Text>
            </View>
            <DrawerItemList {...props} />
          </SafeAreaView>
        )
      }} screenOptions={{ headerTitleAlign: "center", 
      drawerActiveBackgroundColor: "#4285f4", 
      drawerActiveTintColor: "#fbbc05",
      headerRight: ()=>{
        return (
          <Image style={styles.profile_icon} source={require('./src/assets/images/logo.png')} />
        )
      }
      }}
      >
        <Stack.Screen name="Home" component={Home} options={{}} />
        <Stack.Screen name="Academy" component={Academy} />
        <Stack.Screen name="Blog" component={Blog} />
        <Stack.Screen name="Courses" component={Courses} />
        <Stack.Screen name="Events" component={Events} />
        <Stack.Screen name="Projects" component={Projects} />
        {/* <Stack.Screen name="" component={} /> */}
      </Stack.Navigator>
    </NavigationContainer>
  )
}

export default App;

const styles = StyleSheet.create({
  info_container: {
    height: 200,
    width: '100%',
    // backgroundColor: "#4285f4",
    // flex: 1,
    // display: 'flex',
    alignContent: 'center',
    alignItems: "center",
    justifyContent: 'center',
    marginTop: 50
  },
  logo: {
    height: 100,
    width: 100,
    objectFit: 'cover',
  },
  user_name: {
    fontSize: 18,
    fontWeight: '500'
  },
  handle: {
    fontSize: 14,
    fontStyle: 'italic',
    fontWeight: "300",
  },
  profile_icon: {
    height: 25,
    width: 25,
    // objectFit: 'cover',
    borderWidth: 1.5,
    borderStyle: "solid",
    borderColor: '#fbbc05',
    borderRadius: 30,
    padding: 15,
    marginRight: 15
  }
})