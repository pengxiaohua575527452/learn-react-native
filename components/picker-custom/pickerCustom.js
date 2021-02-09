import React from "react";
import { Text, TouchableOpacity} from "react-native";
import styles from "./pickerCustomStyles";
import Picker from 'react-native-picker';

function PickerCustom(props){
    //选择 视图
    function _showDatePicker(){
        Picker.init({
            pickerTitleText:props.title,
            pickerCancelBtnText:'取消',
            pickerConfirmBtnText:'确定',
            selectedValue: props.value,
            pickerBg:[255,255,255,1],
            pickerData: props.menu,
            pickerFontColor: [33, 33 ,33, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                props.updateValue(pickedValue)
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
            <Text style={[styles.textStyle]}>{props.value}</Text>
        </TouchableOpacity>
    )
   
}

export default PickerCustom; 

 