import React from "react";
import FormItemContainer from "@components/form-item-container/formItemContainer"
import PickerLeaveType from "@components/picker-leave-type/pickerLeaveType" 
 
function PickLeaveTypeWithLabel(props){
    console.log('props.currentLeaveType: ', props.currentLeaveType)
    return (
        <FormItemContainer
            label="请假类型:"
        >
            <PickerLeaveType 
                currentLeaveType={props.currentLeaveType}
                updateLeaveType={props.updateLeaveType}
            />
        </FormItemContainer>
    )
}

export default PickLeaveTypeWithLabel