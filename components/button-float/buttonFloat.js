import React from "react";
import {View, Text, TouchableOpacity } from "react-native";
import styles from "./buttonFloatStyle";


function ButtonFloat(props){

    let backgroundColor = "#0099CC"
    let color = "#333"
    let bottom = props.bottom ? props.bottom : 50;
    let right = props.right ? props.right : 20;

    if(props.type === 'primary'){
        backgroundColor = "#0099CC";
        color = "#fff"
    }else if(props.type === "default"){
        backgroundColor = "#CCC";
        color = "#333"
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