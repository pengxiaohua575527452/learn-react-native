import React from "react"
import {
    View,
    Text,
    Button,
    TouchableHighlight
} from "react-native";

import styles from "./indexStyles"
import HeaderPlaceholder from "@components/header-placeholder/index"
import PageIcon from "@components/page-icon/index"
import pagesIconList from "./pagesIconList"
import Approval from "@svgs/approval" 
 


 
 
// 非状态组件只是用来显示UI
function Page1 (props){
    
    React.useEffect(() => {
        return props.navigation.addListener('focus', () => {
            props.onHeaderModeHide()
            props.onTabBarVisibleShow()
        })
    },[props])

   
    return (
        <>
            {/* <HeaderPlaceholder/> */}
            <View style={styles.imageContainer}>
                <Text>Image</Text>
            </View>
            
            {/* 内容 */}
            <View
                style={styles.contentContainer}
            >
                {/* icon 的容器 */}
                {
                    pagesIconList.map((item,index) =>{
                        return(
                            // icon 容器
                            <TouchableHighlight
                                underlayColor="none"
                                style={styles.pageIconContainer}
                                key={index}
                                onPress={()=>{props.navigation.navigate("Index",{screen:"Page2"})}}
                            >
                                <>
                                    <View>
                                        <Approval width="32" height="32" fill="#0099CC"/>
                                    </View>
                                    <Text style={styles.pageIconLabel}>{item.label}</Text>
                                </>
                            </TouchableHighlight>
                        )
                    })
                }
            
                {/* <Button
                    title="Go To Page2"
                    onPress={props.onNavigateToPage}
                >
                </Button> */}
            </View>
           
        </>
    )
     
}

export default Page1