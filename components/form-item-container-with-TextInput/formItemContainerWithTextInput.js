import React from "react";
import {TextInput,Keyboard} from "react-native";
import styles from "./formItemContainerWithTextInputStyles";
import FormItemContainer from "@components/form-item-container/formItemContainer"
 
/**
 * 
 * import FormItemContainerWithTextInput from "@components/form-item-container-with-TextInput/formItemContainerWithTextInput"
 * 使用说明
 * @param {} props 
 * 
 * props.label 左侧标题
 * props.required 是否必选
 * props.value 当前值
 * props.placeholder 没有值时候显示的内容
 * props.updateValue 当点击确定触发的方法会把 选中的value 传递过来 
 */

function FormItemContainerWithTextInput(props){
    
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
        <FormItemContainer
            label={props.label}
            required={props.required}
        >
           <TextInput 
            //   value={props.value}
              placeholder={props.placeholder}
              onFocus={handleTextInputOnFocuse}
              onChangeText={handleOnChange}
              style={[styles.input]} 
              multiline={false}
           />
        </FormItemContainer>
    )
}

export default FormItemContainerWithTextInput