// 表单项的容器
// 里面默认定义好表单的布局
// 左右分布

import React from "react";
import {View, Text} from "react-native";
import styles from "./formItemContainerStyle";
 
function FormItemContainer(props){
    return(
        <View style={[styles.compContainer]}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{props.label}</Text>
                <Text style={styles.required}>{props.required ? "*" : ''}</Text>
            </View>
            <View style={styles.dataContainer}>
                {props.children}
            </View>
        </View>
    )
}

export default FormItemContainer;