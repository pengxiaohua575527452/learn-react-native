import React from "react";
import {Text, TouchableOpacity} from "react-native";
import styles from "./pickerTimeStyle";
import Picker from 'react-native-picker';
import { createIconSetFromFontello } from "react-native-vector-icons";

 
/**
 * 使用方法
 * @param {*} props 
 * 
 * import PickerTime, {getCurrentTime} from "@components/picker-time/pickerTime" 
 * <PickerTime 
 *  currentTime="18:18" 
 *  updateCurrentTime={(time) =>{}}}
 * />
 * @returns
 */

function PickerTime(props){
    
    //打开日期选择 视图
    function _showDatePicker(){
        let dateStr = props.currentTime
        let t = dateStr.split(":")
        let hour = t[0]
        let m = t[1]
        
        Picker.init({
            pickerTitleText:'时间选择',
            pickerCancelBtnText:'取消',
            pickerConfirmBtnText:'确定',
            selectedValue:[hour+'时',m+'分'],
            pickerBg:[255,255,255,1],
            pickerData: _createTime(),
            pickerFontColor: [33, 33 ,33, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                let h = pickedValue[0].slice(0,pickedValue[0].length-1)
                let m = pickedValue[1].slice(0,pickedValue[1].length-1)
                h = h.length === 1 ? "0" + h : h;
                m = m.length === 1 ? "0" + m : m;
                let str = h+':'+m;
                props.updateCurrentTime(str)
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
            <Text style={[styles.textStyle]}>{props.currentTime}</Text>
        </TouchableOpacity>
    )
   
}

export default PickerTime; 

//获取当前日期  格式如 2018-12-15
export function getCurrentTime(){
    var currDate = new Date()
    var h = currDate.getHours()+""
    if(h.length === 1){
        h = "0"+h;
    }

    let m = currDate.getMinutes()+""
    if(m.length === 1){
        m = "0"+m
    }
  
    let time = h+':'+m;
    return time;
}


//组装日期数据
function _createTime(){
    let data = [[],[]];
    for(let i = 0; i<24; i++){
        data[0].push(i+"时")
    }

    for(let i = 1; i<61;i++){
        data[1].push(i+"分")
    }
    return data;
}
