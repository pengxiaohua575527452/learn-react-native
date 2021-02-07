import React from "react"
import {View,Text,StatusBar, Button} from "react-native";
import { NavigationContainer,useFocusEffect } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import IndexPage from "./pages/hasTabBar/index/index"
import HomeIcon from "@svgs/homeIcon" 
import MyIcon from "@svgs/myIcon"
import SplashScreen from 'react-native-splash-screen'
const Tab = createBottomTabNavigator()
 

const activeColor = "#0099CC"
const inactiveColor = "#ccc"


class App extends React.Component {
  constructor(props){
    super(props)
    
    this.state = {
      tabBarVisible: true,
    }
  }

  tabBArOptions = {
    activeTintColor: activeColor,
    inactiveTintColor: inactiveColor
  }


  tabBarVisibleHide = () =>{
    this.setState({tabBarVisible: false})
  }

  tabBarVisibleShow = () => {
    this.setState({tabBarVisible: true})
  }

  componentDidMount(){
    SplashScreen.hide()
  }

  render(){

   
    return (
      <>
        <StatusBar barStyle="dark-content" translucent={true}  backgroundColor="rgba(0,0,0,0)" ></StatusBar>

        {/* 载入动画 */}
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={this.tabBArOptions}
          >
            {/* 左侧 */}
            <Tab.Screen 
              name="Index"
              options={{
                tabBarVisible: this.state.tabBarVisible,
                tabBarIcon({focused, color, size}){
                  return  <HomeIcon width="32" height="32" fill={focused ? activeColor : inactiveColor}/>
                }
              }}  
            >
              {
                props => <IndexPage 
                          {...props} 
                          onTabBarVisibleShow={this.tabBarVisibleShow}
                          onTabBarVisibleHide={this.tabBarVisibleHide}
                        />
              }
            </Tab.Screen>
            
            {/* 中间 */}
            <Tab.Screen
              name="Center"
              options = {{
                tabBarVisible: this.state.tabBarVisible,
                tabBarIcon({focused, color, size}){
                  return  <MyIcon width="32" height="32" fill={focused ? activeColor : inactiveColor} />
                  // return <Text style={{color: color,fontSize: size * 0.5}}>INDEX</Text>
                }
              }}
            >
              {props => <Text>Center</Text>}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </>
    )
    
  }
}

export default App