// 首页配置

import React from 'react';
import {createStackNavigator, CardStyleInterpolators} from "@react-navigation/stack";

const Stack = createStackNavigator()
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  Image,
  Button,
  Alert
} from 'react-native';

import Page1 from "@pages/noTabBar/page1/index";
import Page2 from "@pages/noTabBar/page2/index";
import ApprovalDetail from "@pages/noTabBar/approval-detail/approvalDetail";
import ApprovalDetialHeader from "@components/approval-detial-header/approvalDetailHeader";
import ApplicationForLeave from "@pages/noTabBar/application-for-leave/applicationForLeave"; 
 
// 状态组件
class IndexPage extends React.Component{
    constructor(props){
        super(props)
    }

    state = {
        headerMode: 'float'
    }
    handlePress = () =>{
        console.log('this.props.navigation: ', this.props.navigation)
    }

    handleNavigateToPage1 = e => {
        this.props.navigation.navigate('Index', {screen: "Page1"})
    }

    handleNavigateToPage2 = e => {
        this.props.navigation.navigate("Index", {screen: "Page2"})
    }

    async handleSetHandeMode(o){
        await this.setState(o)
    }

    render(){
        return (
            <>
                <Stack.Navigator
                    headerMode= {this.state.headerMode}
                    initialRouteName="Page1"
                >
                    {/* 首页 */}
                    <Stack.Screen 
                        name="Page1"
                        options = {{
                            header: props => <></>
                        }}
                    >
                        {props => {
                            return <Page1 
                                {...props}
                                onNavigateToPage={this.handleNavigateToPage2} 
                                onHeaderModeHide={() => {this.handleSetHandeMode({headerMode: "float"})}} 
                                onTabBarVisibleShow={this.props.onTabBarVisibleShow}  
                            />
                        }}
                    </Stack.Screen>

                    {/* 列表页 */}
                    <Stack.Screen
                        name="Page2"
                        options = {{
                            header:(props) => {
                                return <ApprovalDetialHeader 
                                            {...props} 
                                            borderBottomWidth={0} 
                                            title="审批" 
                                            goBack={()=> this.props.navigation.navigate('Index', {screen: "Page1"})}
                                        />
                            }
                        }}
                    >
                        {
                            props => <Page2 
                                        {...props}  
                                        headerMode={this.state.headerMode}
                                        onNavigateToPage1={this.handleNavigateToPage1}
                                        onHeaderModeShow={() => { this.handleSetHandeMode({headerMode: 'float'})}}
                                        onTabBarVisibleHide={this.props.onTabBarVisibleHide}
                                        
                                    />
                        }
                    </Stack.Screen>
                    {/* scene.descriptor.options.headerStyle */}
                    {/* 详情页 */}
                    <Stack.Screen
                        name="ApprovalDetail"
                        options = {{
                            header:(props) => {
                                return <ApprovalDetialHeader 
                                            {...props} 
                                            borderBottomWidth={0} 
                                            title="审批详情页" 
                                        />
                            },
                            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,
                        }}
                    >
                        {(props) => {
                            return <ApprovalDetail 
                                        {...props} 
                                        onHeaderModeShow={() => { this.handleSetHandeMode({headerMode: 'float'})}}
                                        onTabBarVisibleHide={this.props.onTabBarVisibleHide}
                                    />
                        }}
                    </Stack.Screen>

                    {/* 请假申请页 */}
                    <Stack.Screen
                        name="ApplicationForLeave"
                        options = {{
                            header:(props)=> <ApprovalDetialHeader {...props} borderBottomWidth={0} title="请假申请" />,
                            cardStyleInterpolator: CardStyleInterpolators.forHorizontalIOS,

                        }}
                    >
                        {(props) => {
                            return (<ApplicationForLeave 
                                {...props}
                                onHeaderModeShow={() => { this.handleSetHandeMode({headerMode: 'float'})}}
                                onTabBarVisibleHide={this.props.onTabBarVisibleHide}
                            />)
                        }}
                    </Stack.Screen>
                </Stack.Navigator>
                
            </>
        )
    }

}

export default IndexPage
/*
{
    "insets": {
        "bottom": 0, 
        "left": 0, 
        "right": 0, 
        "top": 24
    }, 
    "layout": {
        "height": 591, 
        "width": 360
    }, 
    "mode": "screen", 
    "navigation": {
        "addListener": [Function addListener],
        "canGoBack": [Function canGoBack], 
        "dangerouslyGetParent": [Function dangerouslyGetParent], 
        "dangerouslyGetState": [Function anonymous], 
        "dispatch": [Function dispatch], 
        "goBack": [Function anonymous], 
        "isFocused": [Function isFocused], 
        "jumpTo": [Function anonymous], 
        "navigate": [Function anonymous], 
        "pop": [Function anonymous], 
        "popToTop": [Function anonymous], 
        "push": [Function anonymous], 
        "removeListener": [Function removeListener], 
        "replace": [Function anonymous], 
        "reset": [Function anonymous], 
        "setOptions": [Function setOptions], 
        "setParams": [Function anonymous]
    }, 
    "previous": undefined, 
    "scene": {
        "__memo": [
            [Object], 
            [Object], 
            [Object], 
            undefined, 
            undefined, 
            [AnimatedValue], 
            undefined, 
            undefined
        ], 
        "descriptor": {
            "navigation": [Object], 
            "options": [Object], 
            "render": [Function render]
        }, 
        "progress": {
            "current": [AnimatedInterpolation], 
            "next": undefined, 
            "previous": undefined
        }, 
        "route": {
            "key": "ApprovalDetail-vbLi5Fp3ONZ4vmz2w_Ny7", 
            "name": "ApprovalDetail", 
            "params": undefined
        }
    }, 
    "styleInterpolator": [Function forNoAnimation]
}
*/