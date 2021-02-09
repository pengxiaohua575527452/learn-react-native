import React from "react";
import {View, Text, TouchableOpacity } from "react-native";
import styles from "./buttonStyle";
import Css from "@static/source/css" 
/**
 * 
import Buttom from "@components/button/button"
使用说明 
@param {*} props 



 */


function Button(props){

    let backgroundColor = Css.primary
    let color = Css.white
    if(props.type === 'primary'){
        backgroundColor = Css.primary;
        color = Css.white
    }else if(props.type === "default"){
        backgroundColor = Css.fifthBG;
        color = Css.fifthFC
    }else{

    }
    
    return (
        <View style={[styles.compContainer]}>
            <TouchableOpacity
                activeOpacity={0.2}
                onPress={() =>props.onPress()}
            >   
                <View
                    style={[
                        styles.buttonContainer,
                        {
                            backgroundColor: backgroundColor
                        }
                        
                    ]}
                >
                    <Text style={{color: color }}
                    >{props.label}</Text>
                </View>
                
            </TouchableOpacity> 
        </View>
    )
}

export default Button