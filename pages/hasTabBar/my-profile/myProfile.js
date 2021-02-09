// 首页配置

import React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image
} from 'react-native';
import styles from "./myProfileStyles"
import {createStackNavigator} from "@react-navigation/stack";
import MyProfilePage from "@pages/noTabBar/my-profile/myProfile";
import MyProfileHeader from "@components/my-profile-header/myProfileHeader";

const Statck =  createStackNavigator()

class MyProfile extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            headerMode: "float"
        }
    }
    render = render
}


export default MyProfile


function render(){
    return (
        <>
            <Statck.Navigator
                headerMode={this.state.headerMode}
                initialRouteName = "myProfile"
            >
                <Statck.Screen
                    name="myProfile"
                    options = {{
                        header: props => <MyProfileHeader {...props}/>
                    }}
                >
                    {props =><MyProfilePage {...this.props}/>}
                </Statck.Screen>    
            </Statck.Navigator>   
        </>
    )
}