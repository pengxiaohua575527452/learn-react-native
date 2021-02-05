
import React from "react";
import {View} from "react-native";
import Button from "@components/button/button";
import styles from "./submitStyle";

function Submit(props){
    return (
        <View style={[styles.compContainer]}>
            <Button 
                {...props}
            />
        </View>
    )
}

export default Submit