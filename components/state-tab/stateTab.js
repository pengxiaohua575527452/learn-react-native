import React from "react";
import {Text} from "react-native";
import styles from "./stateTabStyles"
import Css from "@static/source/css"  

function StateTab(props){
    let backgroundColor = Css.primary

    if(props.type === 'primary'){
        backgroundColor =  Css.primary
    }else if(props.type === 'default'){
        backgroundColor =  Css.primaryBG
    }else if(props.type === 'safe'){
        backgroundColor =  Css.green
    }
 
    return (
        <Text
            style={[
                styles.label,
                {
                    backgroundColor: backgroundColor
                }
            ]}
        >
            {props.label}
        </Text>
    )
}

export default StateTab;