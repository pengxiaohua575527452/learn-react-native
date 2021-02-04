import React from "react"
import {View,Text,StatusBar, Button} from "react-native";
import { NavigationContainer,useFocusEffect } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { createDrawerNavigator } from '@react-navigation/drawer';
import IndexPage from "./pages/hasTabBar/index/index"
import HomeIcon from "@svgs/homeIcon" 
import MyIcon from "@svgs/myIcon"
const Tab = createBottomTabNavigator()
const Stack = createStackNavigator()
const Drawer = createDrawerNavigator()

const activeColor = "#0099CC"
const inactiveColor = "#ccc"


class App extends React.Component {
  constructor(props){
    super(props)
    
  }

   

  render(){
    return (
      <>
        {/* <StatusBar barStyle="dark-content" translucent={true}  backgroundColor="rgba(0,0,0,0)" ></StatusBar> */}
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={this.tabBArOptions}
          >
            <Tab.Screen name="Index">
              {(props) => {
                return (
                  <Drawer.Navigator>
                    <Drawer.Screen name="Page1">
                      {(props) => {
                        return(
                          <View>
                            <Text>Page1</Text>
                            <Button title="Go To Page2" onPress={()=>props.navigation.navigate("Index",{screen:"Page2"})}></Button>
                          </View>
                        )
                      }}
                    </Drawer.Screen>
                    <Drawer.Screen name="Page2">
                      {(props)=>{
                        return (
                          <View>
                            <Text>Page2</Text>
                            <Button title="Go To Page1" onPress={()=>props.navigation.navigate("Index",{screen:"Page1"})}></Button>
                          </View>
                        )
                      }}
                    </Drawer.Screen>
                  </Drawer.Navigator>
                )
              }}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </>
    )
  }
}

export default App