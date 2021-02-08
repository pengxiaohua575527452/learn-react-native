import React from "react"
import {Text,TouchableHighlight} from "react-native";
import styles from "./dropDownMenuItemStyles"
import Css from "@static/source/css"

function dropDownMenuItem(props){
    return(
        <TouchableHighlight 
            underlayColor={Css.primaryBG}
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


 