import React from "react";
import {Text, TouchableOpacity} from "react-native";
import styles from "./pickerDateStyle";
import Picker from 'react-native-picker';


/**
 * 使用方法
 * @param {*} props 
 * 
 * import PickerTime, {getCurrentDate} from "@components/picker-time/pickerTime" 
 * <PickerTime 
 *  currentDate="2020-02-02" 
 *  updateCurrentDate={(date) =>{}}}
 * />
 * @returns
 */

function PickerDate(props){
    
    //打开日期选择 视图
    function _showDatePicker(){
        var year = ''
        var month = ''
        var day = ''
        var dateStr = props.currentDate
        year = dateStr.substring(0,4)
        month = parseInt(dateStr.substring(5,7))
        day = parseInt(dateStr.substring(8,10))

        Picker.init({
            pickerTitleText:'时间选择',
            pickerCancelBtnText:'取消',
            pickerConfirmBtnText:'确定',
            selectedValue:[year+'年',month+'月',day+'日'],
            pickerBg:[255,255,255,1],
            pickerData: _createDateData(),
            pickerFontColor: [33, 33 ,33, 1],
            onPickerConfirm: (pickedValue, pickedIndex) => {
                var year = pickedValue[0].substring(0,pickedValue[0].length-1)
                var month = pickedValue[1].substring(0,pickedValue[1].length-1)
                month = month.padStart(2,'0')
                var day = pickedValue[2].substring(0,pickedValue[2].length-1)
                day = day.padStart(2,'0')
                let str = year+'-'+month+'-'+day
                props.updateCurrentDate(str)
                
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
        <TouchableOpacity 
            onPress={()=>_showDatePicker()} 
            style={styles.compContainer}
        >
            <Text style={[styles.textStyle]}>{props.currentDate}</Text>
        </TouchableOpacity>
    )
   
}

export default PickerDate;

//获取当前日期  格式如 2018-12-15
export function getCurrentDate(){
    var currDate = new Date()
    var year = currDate.getFullYear()
    var month = (currDate.getMonth()+1).toString()
    month = month.padStart(2,'0')
    var dateDay = currDate.getDate().toString()
    dateDay = dateDay.padStart(2,'0')
    let time = year+'-'+month+'-'+dateDay
    return time;
}

 


//组装日期数据
function _createDateData(){
    let date = [];
    var currDate = new Date()
    var year = currDate.getFullYear()+5
    var month = currDate.getMonth()+1
    for(let i=2020;i<=year;i++){
        let month = [];
        for(let j = 1;j<13;j++){
            let day = [];
            if(j === 2){
                for(let k=1;k<29;k++){
                    day.push(k+'日');
                }
                //Leap day for years that are divisible by 4, such as 2000, 2004
                if(i%4 === 0){
                    day.push(29+'日');
                }
            }
            else if(j in {1:1, 3:1, 5:1, 7:1, 8:1, 10:1, 12:1}){
                for(let k=1;k<32;k++){
                    day.push(k+'日');
                }
            }
            else{
                for(let k=1;k<31;k++){
                    day.push(k+'日');
                }
            }
            let _month = {};
            _month[j+'月'] = day;
            month.push(_month);
        }
        let _date = {};
        _date[i+'年'] = month;
        date.push(_date);
    }
 
    return date;
}
