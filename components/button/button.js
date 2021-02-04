import React from "react";
import {View, Text, TouchableOpacity } from "react-native";
import styles from "./buttonStyle";


function Button(props){

    let backgroundColor = "#0099CC"
    let color = "#333"
    if(props.type === 'primary'){
        backgroundColor = "#0099CC";
        color = "#fff"
    }else if(props.type === "default"){
        backgroundColor = "#CCC";
        color = "#333"
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