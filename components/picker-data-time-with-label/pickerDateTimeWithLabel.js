import React from "react";
import {View, Text} from "react-native";
import PickerDate from "@components/picker-date/pickerDate" 
import PickerTime from "@components/picker-time/pickerTime" 
import styles from "./pickerDateTimeWithLabelStyle";
import FormItemContainer from "@components/form-item-container/formItemContainer"

function PickDateTime(props){
    return (
        <FormItemContainer {...props}>
            <View 
                style={[
                    styles.compContainer
                ]}
            >
                <View style={[styles.pickerDateContainer]}>
                    <PickerDate {...props}/>
                </View>
                <View style={[styles.pickerTimeContainer]}>
                    <PickerTime {...props}/>
                </View>
            </View>
        </FormItemContainer>
    )
}

export default PickDateTime