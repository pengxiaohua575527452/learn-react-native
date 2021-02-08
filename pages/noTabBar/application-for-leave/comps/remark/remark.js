import React from 'react';
import {View, TextInput, Keyboard } from "react-native";
import FormItemContainerVertial from "@components/form-item-container-vertical/formItemContainerVertial.js"
import styles from "./remarkStyle";

class Remark extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            value: props.remark
        }
    }

    handleTextInputOnFocuse = ({target}) => {
        const callback = () => {
            target.blur()
            Keyboard.removeListener("keyboardDidHide", callback)

        }
        Keyboard.addListener('keyboardDidHide',callback)
    }

    handleOnChange = (content) => {
        this.setState({
            value: content
        })
        this.props.updateRemark(content)
    }

    render(){
        return(
            <View style={[styles.compContainer]}>
                <FormItemContainerVertial label="备注">
                    <TextInput 
                        onFocus={this.handleTextInputOnFocuse}
                        onChangeText={this.handleOnChange}
                        style={[styles.input]} 
                        multiline={true}
                        value={this.state.value}
                        textAlignVertical= "top"
                        numberOfLines = {10}
                        placeholder="请输入备注信息"
                    />
                </FormItemContainerVertial>
            </View>
        )
    }
}

export default Remark;