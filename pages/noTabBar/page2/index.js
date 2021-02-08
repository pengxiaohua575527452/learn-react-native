import React from "react"
import {
    View,
    Text,
    FlatList,
} from "react-native";
import styles from "./indexStyles"
import HeaderPlaceholder from "@components/header-placeholder/index"
import DropDownMenu from "@components/drop-down-menu/dropDownMenu";
import DropDownMenuItem from "@components/drop-down-menu/dropDownMenuItem";
import ApprovalListItemLeave from "@components/approval-list-item-leave/approvalListItemLeave"
import ButtonFloat from "@components/button-float/buttonFloat"
import Css from "@static/source/css" 
import MyApprovalList from "./comps/my-approval-list/myApprovalList"
import CCMe from "./comps/cc-me/CCMe"
import MyInital from "./comps/my-initial/myInital"
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';




const Material = createMaterialTopTabNavigator();

 
class PageContent extends React.Component {
    constructor(props){
        super(props)
    }
    
    jumpToDetails = (arg) => {
        this.props ? this.props.navigation.navigate("Index", {screen: "ApprovalDetail"}) : "";
    }

    render(){
        return (
            <>
                {/* 浮动按钮 */}
                <__ButtonFloat {...this.props}/>

                {/* 导航 */}
                <Material.Navigator
                    initialRouteName="PendingApproval"
                    tabBarOptions={{
                        activeTintColor:Css.primary,
                        inactiveTintColor :Css.fourthFC,
                        pressColor: Css.fifthBG,
                        indicatorStyle : {
                            backgroundColor: Css.primary
                        } 
                    }}
                >
                    {/* 左侧屏幕 */}
                    <Material.Screen 
                        name="PendingApproval"
                        options= {{
                            title: "我审批"
                        }}    
                    >
                        {props=> <MyApprovalList  jumpToDetails={this.jumpToDetails}/>}
                    </Material.Screen>
                  
                    <Material.Screen 
                        name="CCMe"
                        options= {{
                            title: "抄送我"
                        }}     
                    >
                        {props => <CCMe  jumpToDetails={this.jumpToDetails}/>}
                    </Material.Screen>
                    <Material.Screen 
                        name="Initiated"
                        options= {{
                            title: "已发起"
                        }}     
                    >
                        {props=><MyInital jumpToDetails={this.jumpToDetails}/>}
                    </Material.Screen>
                </Material.Navigator>
            </>
        )
    }
    
}



function Page2 (props){
    React.useEffect(() => {
        return props.navigation.addListener('focus', () => {
            props.onHeaderModeShow()
            props.onTabBarVisibleHide()
        })
    },[props])
   
    return (
        <>
            <PageContent {...props}/>
        </>
    )
    
}

// 浮动按钮
function __ButtonFloat(props){
    return (
        <ButtonFloat
            {...props} 
            onPress={()=>{
                props.navigation.navigate('Index',{screen: "ApplicationForLeave"})
            }}
            label="+"
            type="primary"
            bottom = {50}
            right={20}
        />
    )
}


export default Page2