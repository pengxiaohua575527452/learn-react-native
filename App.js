import React from "react"
import {View,Text,StatusBar, Button} from "react-native";
import { NavigationContainer,useFocusEffect } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import IndexPage from "./pages/hasTabBar/index/index"
import MyProfile from "@pages/hasTabBar/my-profile/myProfile"
import HomeIcon from "@svgs/homeIcon" 
import MyIcon from "@svgs/myIcon"
import SplashScreen from 'react-native-splash-screen'
 
import Css from "@static/source/css"

const Tab = createBottomTabNavigator()

class App extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      tabBarVisible: false,
    }
  }

  tabBArOptions = {
    activeTintColor: Css.primary,
    inactiveTintColor: Css.fifthFC,
    style: {
      borderTopWidth: 0,
      borderTopColor: Css.fifthBD,
    }
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

  render = () =>{
    return (
      <>
        <StatusBar barStyle="dark-content" translucent={true}  backgroundColor="rgba(0,0,0,0)" ></StatusBar>

        {/* 载入动画 */}
        <NavigationContainer>
          <Tab.Navigator
            tabBarOptions={this.tabBArOptions}
            initialRouteName="Index"
            sceneContainerStyle ={{}}
            screenOptions={{
              tabBarVisible: this.state.tabBarVisible,
            }}
          >
            {/* 左侧 */}
            <Tab.Screen 
              name="Index" 
              options={{
                title:"首页",
                tabBarIcon({color,size}){
                  return <HomeIcon fill={color}  width={32} height={32} />
                }
              }}  
            >
              {props =>{
                  return <IndexPage 
                          {...props} 
                          onTabBarVisibleShow={this.tabBarVisibleShow}
                          onTabBarVisibleHide={this.tabBarVisibleHide}
                        />
              }}
            </Tab.Screen>
            
            {/* 中间 */}
            <Tab.Screen 
              name="My" 
              options={{
                title:"我的",
                tabBarIcon({color,size}){
                  return <MyIcon fill={color} width={32} height={32} />
                }
              }}
            >
              {props => <MyProfile {...props}/>}
            </Tab.Screen>
          </Tab.Navigator>
        </NavigationContainer>
      </>
    )
    
  }
}

export default App


 