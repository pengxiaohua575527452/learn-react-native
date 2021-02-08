import React from "react"
import {View,Text,TouchableHighlight} from "react-native";
import ArrowDown from "@svgs/arrowDown"
import styles from "./dropDownMenuStyles"
import Css from "@static/source/css" 

// 下拉菜单按钮
function DropDownMenu(props){
    return(
        <TouchableHighlight 
            underlayColor="none"
            style={[styles.dropDownMenuContainer]}
            onPress={props.onPress}
        >
            <>
                <Text style={styles.label}>{props.value}</Text>
                <View style={[styles.iconContainer,{transform:[{rotateZ: props.rotateDeg}]}]}>
                    {/* <Text>A</Text> */}
                    <ArrowDown fill={Css.firstFC} width="26" height="26" />
                </View>
            </>
        </TouchableHighlight>
    )
}

export default  DropDownMenu


 