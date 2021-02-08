import React from "react";
import {View, Text, TouchableOpacity } from "react-native";
import styles from "./buttonFloatStyle";
import Css from "@static/source/css" 

function ButtonFloat(props){

    let backgroundColor = Css.primary;
    let color =  Css.white
    let bottom = props.bottom ? props.bottom : 80;
    let right = props.right ? props.right : 20;

    if(props.type === 'primary'){
        backgroundColor = Css.primary;
        color = Css.white
    }else if(props.type === "default"){
        backgroundColor =  Css.fifthBG;
        color = Css.fifthFC
    }else{

    }
    
    return (
        <View 
            style={[
                styles.compContainer,
                {
                    bottom:  bottom,
                    right:  right
                }
            ]}
        >
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
                    <Text 
                        style={[
                            styles.text, 
                            {
                                color: color
                            }
                        ]}
                    >{props.label}</Text>
                </View>
                
            </TouchableOpacity> 
        </View>
    )
}

export default ButtonFloat