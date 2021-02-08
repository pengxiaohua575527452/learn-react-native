import React from 'react';
import {View, TextInput, Keyboard } from "react-native";
import FormItemContainerVertial from "@components/form-item-container-vertical/formItemContainerVertial.js"
import styles from "./leaveReasonsStyle";

class LeaveReasons extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            value: props.leaveReasons
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
        this.props.updateLeaveResons(content)
    }

    render(){
        return (
            <View style={[styles.compContainer]}>
                <FormItemContainerVertial label="请假原因">
                    <TextInput 
                        onFocus={this.handleTextInputOnFocuse}
                        onChangeText={this.handleOnChange}
                        style={[styles.input]} 
                        multiline={true}
                        value={this.state.value}
                        textAlignVertical= "top"
                        numberOfLines = {10}
                        placeholder="输入请假原因"
                    /> 
                </FormItemContainerVertial>
            </View>
        )
    }
}

export default LeaveReasons;