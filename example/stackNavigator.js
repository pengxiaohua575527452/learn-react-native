/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button
} from 'react-native';
 
import {
  Header,
  LearnMoreLinks,
  Colors,
  DebugInstructions,
  ReloadInstructions,
} from 'react-native/Libraries/NewAppScreen';
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

// 导入组件
import TabBarItem from "./components/tab-bar-item/tabBarItem"

// 导入样式
import appStyles from "./AppStyles"


// 声明变量
const remoteImageUri="https://ss0.bdstatic.com/70cFuHSh_Q1YnxGkpoWK1HF6hhy/it/u=2404813991,3153389505&fm=26&gp=0.jpg"


function HomePage(props){
  return(
    <View>
      <Text>Home Page-</Text>
      <Button
        title="Go To Detail"
        // 注册事件
        onPress={() =>props.navigation.navigate("Detail",{userName:'bill',age:10})}
      ></Button>
    </View>
  )
}

function DetailsScreen(props) {
  return (
    <View>
      <View >
        <Text>{JSON.stringify(props.route)}</Text>
        <Text>{props.route.params.userName}</Text>
      </View>
      <Text>Details Screen</Text>

      <View>
        <Button
          title="Go To Home "
          onPress={() => props.navigation.goBack()}
        ></Button>
      </View>

      <View
        style={{marginTop:10}}
      >
        <Button
          title ="Go To Level2"
          onPress={() => props.navigation.navigate('Level2')}
        ></Button>
      </View>
    </View>
  );
}

function Level2(props){
  return (
    <View>
      <Text>Level2</Text>
      <Button
        title="popToTop"
        onPress={() => props.navigation.popToTop()}
      ></Button>
    </View>
  )
}

const Stack = createStackNavigator()
 
const App = () => {
  return (
    <>
      {/* 页面布局 */}
      {/* 状态栏 */}
      <StatusBar barStyle="dark-content" translucent={true}  backgroundColor="rgba(0,0,0,0)" ></StatusBar>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen 
            name="Home" 
            component={HomePage} 
            options={{
              title: "Overview",
              headerStyle: {
                backgroundColor: "#ccc",
              },
              headerTintColor: "red",
              headerTitleStyle: {
                color: '#fff',
                fontSize: 10,
                alignSelf: 'center'
              }
            }}

          />  
          {/* <Stack.Screen name="Detail" component={DetailsScreen} /> */}
          <Stack.Screen 
            name="Detail"
            options={{
              title: "DETAIL",
              headerTintColor: 'red'
            }}  
          >
            {props => <DetailsScreen {...props} />}
          </Stack.Screen>
          <Stack.Screen name="Level2">
            {props => <Level2 {...props}/>}
          </Stack.Screen>
        </Stack.Navigator>  
      </NavigationContainer>  
    </>
  );
};
export default App;

/**
 * 
路由注册

 

 */



