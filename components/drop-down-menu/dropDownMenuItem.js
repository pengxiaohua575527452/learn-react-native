import React from "react"
import {View,Text,TouchableHighlight} from "react-native";
import styles from "./dropDownMenuItemStyles"
import CommonCss from "@static/source/css"

function dropDownMenuItem(props){
    return(
        <TouchableHighlight 
            underlayColor={CommonCss.activeColor}
            style={styles.itemContainer} 
            onPress={() => {
                props.onPressItem()
            }}
        >
            <Text style={styles.label}>{props.data.label}</Text>
        </TouchableHighlight>
    )
}

export default  dropDownMenuItem


 