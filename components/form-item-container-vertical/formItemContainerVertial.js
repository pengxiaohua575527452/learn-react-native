// 表单项的容器
// 里面默认定义好表单的布局
// 上下分布

import React from "react";
import {View, Text} from "react-native";
import styles from "./formItemContainerVerticalStyle";
 
function FormItemContainerVertial(props){
    return(
        <View style={[styles.compContainer]}>
            <View style={styles.labelContainer}>
                <Text style={styles.label}>{props.label}</Text>
            </View>
            <View style={styles.dataContainer}>
                {props.children}
            </View>
        </View>
    )
}

export default FormItemContainerVertial;