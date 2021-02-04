import React from "react"
import {View,Text,TouchableHighlight} from "react-native";
import ArrowDown from "@svgs/arrowDown"

import styles from "./dropDownMenuStyles"
function DropDownMenu(props){
    return(
        <View style={styles.dropDownMenuContainer}>
            <Text style={styles.label}>{props.value}</Text>
            <View style={[styles.iconContainer,{transform:[{rotateZ: props.rotateDeg}]}]}>
                {/* <Text>A</Text> */}
                <ArrowDown fill="#ccc" width="26" height="26" />
            </View>
        </View>
    )
}

export default  DropDownMenu


 