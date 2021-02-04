import React from "react";
import {Text, TouchableOpacity} from "react-native";
import styles from "./pickerLeaveTypeStyle";
import Picker from 'react-native-picker';

 
/**
 * 使用方法
 */

const leaveType = [
    '年假',
    "事假",
    "婚嫁",
    "产假",
    "陪产假",
] 

function PickerLeaveType(props){
    
    //选择 视图
    function _showDatePicker(){
        
        Picker.init({
            pickerTitleText:'请假类型',
            pickerCancelBtnText:'取消',
            pickerConfirmBtnText:'确定',
            selectedValue: [props.currentLeaveType],
            pickerBg:[255,255,255,1],
            pickerData: leaveType,
            pickerFontColor: [33, 33 ,33, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                props.updateLeaveType(pickedValue)
            },
            onPickerCancel: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            },
            onPickerSelect: (pickedValue, pickedIndex) => {
                console.log('date', pickedValue, pickedIndex);
            }
        });
        Picker.show();
    }

   
    return(  
        <TouchableOpacity onPress={()=>_showDatePicker()} style={styles.compContainer}>
            <Text style={[styles.textStyle]}>{props.currentLeaveType}</Text>
        </TouchableOpacity>
    )
   
}

export default PickerLeaveType; 

 