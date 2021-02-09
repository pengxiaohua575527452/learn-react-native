import React from 'react';
import {View, TextInput, Keyboard } from "react-native";
import FormItemContainerVertial from "@components/form-item-container-vertical/formItemContainerVertial.js"
import styles from "./formItemContainerVerticalWithTextInputStyles";

function FormItemContainerVerticalWithTextInput(props){
    const handleTextInputOnFocuse = ({target}) => {
        const callback = () => {
            target.blur()
            Keyboard.removeListener("keyboardDidHide", callback)

        }
        Keyboard.addListener('keyboardDidHide',callback)
    }

    const handleOnChange = (content) => {
        props.updateValue(content)
    }

    return (
        <FormItemContainerVertial label={props.label} required={props.required}>
            <TextInput 
                value={props.value}
                placeholder={props.placeholder}
                onFocus={handleTextInputOnFocuse}
                onChangeText={handleOnChange}
                style={[styles.input]} 
                multiline={true}
                textAlignVertical= "top"
                numberOfLines = {10}
            /> 
        </FormItemContainerVertial> 
    )
}

export default FormItemContainerVerticalWithTextInput;


