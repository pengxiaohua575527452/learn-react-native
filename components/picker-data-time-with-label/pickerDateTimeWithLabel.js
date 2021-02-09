import React from "react";
import {View, Text} from "react-native";
import PickerDate, {getCurrentDate} from "@components/picker-date/pickerDate" 
import PickerTime, {getCurrentTime} from "@components/picker-time/pickerTime" 
import styles from "./pickerDateTimeWithLabelStyle";
import FormItemContainer from "@components/form-item-container/formItemContainer"

/**
 * 使用方法
 * import 
    PickDateTime, 
    {
        getCurrentTime,
        getCurrentDate
    } 
    from "@components/picker-data-time-with-label/pickerDateTimeWithLabel"
 * @param {} props 
 *  type="both" // both === 选择时间和日期  date 选择日期  time 选择时间
    label="期望交付时间" // 左侧文本
    required={true} // 是否必选向
    currentDate= {this.state.DeliveryDate} // 当前日期 标准格式 yyyy-MM-dd
    currentTime= {this.state.DeliveryTime} // 当前时间 标准格式 hh:mm
    updateCurrentDate = {value => this.setState({DeliveryDate: value})} // 更新日期的回调函数 value格式 === yyyy-MM-dd
    updateCurrentTime = {value => { console.log('value: ', value); this.setState({DeliveryTime: value})}} // 更新时间的回调函数 value格式 === hh:mm
 * 
 */


function PickDateTime(props){
    if(props.type === "time"){
        return (
            <FormItemContainer
                label={props.label}
                required={props.required}
            >
                <View 
                    style={[
                        styles.compContainer
                    ]}
                >
                    <View style={[styles.pickerTimeContainer]}>
                        <PickerTime currentTime={props.currentTime} updateCurrentTime={props.updateCurrentTime}/>
                    </View>
                </View>
            </FormItemContainer>
        )
    }else if(props.type === "date"){
        return (
            <FormItemContainer
                label={props.label}
                required={props.required}
            >
                <View 
                    style={[
                        styles.compContainer
                    ]}
                >
                    <View style={[styles.pickerDateContainer]}>
                        <PickerDate currentDate={props.currentDate} updateCurrentDate={props.updateCurrentDate} />
                    </View>
                </View>
            </FormItemContainer>
        )
    }else{
        console.log('-----------')
        return (
            <FormItemContainer
                label={props.label}
                required={props.required}
            >
                <View 
                    style={[
                        styles.compContainer
                    ]}
                >
                    <View style={[styles.pickerDateContainer]}>
                        <PickerDate currentDate={props.currentDate} updateCurrentDate={props.updateCurrentDate} />
                    </View>
                    <View style={[styles.pickerTimeContainer]}>
                        <PickerTime currentTime={props.currentTime} updateCurrentTime={props.updateCurrentTime}/>
                    </View>
                </View>
            </FormItemContainer>
        )
    }
}

export default PickDateTime

export {
    getCurrentTime,
    getCurrentDate
}