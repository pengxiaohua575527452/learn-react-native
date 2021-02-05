import React from "react";
import {View} from "react-native";
import FormItemContainer from "@components/form-item-container/formItemContainer"
import PickerLeaveType from "@components/picker-leave-type/pickerLeaveType" 
import styles from "./packerLeaveTypeWithLabelStyle" 

class PickLeaveTypeWithLabel extends React.Component{
    constructor(props){
        super(props)
        this.state={
            leaveType: props.currentLeaveType
        }
    }
    render(){
        return(
            <View style={[styles.compContainer]}>
                <FormItemContainer
                    label="请假类型:"
                >
                    <PickerLeaveType 
                        currentLeaveType={this.state.leaveType}
                        updateLeaveType={(leaveType) => {
                            this.setState({
                                leaveType: leaveType
                            })
                            this.props.updateLeaveType(leaveType)
                        }}
                    />
                </FormItemContainer>
            </View>
        )
    }
} 

export default PickLeaveTypeWithLabel