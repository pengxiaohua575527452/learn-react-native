import React from "react"
import {View, Text, TouchableHighlight } from "react-native";
import styles from "./approvalDetailHeaderStyle"
 
import ArrayLeft from "@svgs/arrowLeft"
import CommonCss from "@static/source/css"

/**
 * 使用方法
 * import ApprovalDetialHeader from "@components/approval-detial-header/approvalDetailHeader"
 * <ApprovalDetialHeader {...props} borderBottomWidth={0} style={{backgroundColor: "#fff"}}/>
 * 
 * props 说明:
 * borderBottomWidth = 1 定义下边框的宽度，0 表示没有下边框
 * style 定义容器的组件容器的样式
 */
function ApprovalDetialHeader(props){
    return (
        <View 
            style={[
                styles.compContainer,
                {
                    paddingTop:props.insets.top,
                    borderBottomWidth: props.borderBottomWidth,
                    borderBottomColor: "#ccc"
                },
                props.style
            ]}
        >
            {/* 顶部第一层 */}
            <View style={[styles.goBackContainer]}>
                {/* 左侧返回按钮层 */}
                <TouchableHighlight 
                    underlayColor="none"
                    style={[styles.goBackSvgContainer]} 
                    onPress={()=>{props.navigation.goBack()}}
                >
                    <View style={[styles.goBackIcon]}>
                        <ArrayLeft fill="#555" width="26" height="26" />
                        <Text style={[styles.goBackIconLabel]}>返回</Text>
                    </View>
                </TouchableHighlight>
                <Text style={[styles.screenTitle]}>详情</Text>
                <View style={[styles.placeHolderContainer]}>
                  
                </View>
            </View>
        </View>
    )
}

export default ApprovalDetialHeader;