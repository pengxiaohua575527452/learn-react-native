import React from "react";
import {View, Text, TextInput, Keyboard, useRef, TouchableOpacity} from "react-native";
import styles from "./applicationForLeaveStyle";
import PickerDate, {getCurrentDate} from "@components/picker-date/pickerDate" 
import PickerTime, {getCurrentTime} from "@components/picker-time/pickerTime" 
import PickDateTime from "@components/picker-data-time-with-label/pickerDateTimeWithLabel"
import PickLeaveTypeWidthLabel from "@components/picker-leave-type-with-label/packerLeaveTypeWithLabel" 
import FormItemContainerVertial from "@components/form-item-container-vertical/formItemContainerVertial.js"
 
class PickStartDate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: props.currentDate,
            startTime: props.currentTime
        }
    }

    render(){
        return (
            <PickDateTime 
                {...this.props} 
                label="开始时间:"
                currentDate={this.state.startDate}
                currentTime={this.state.startTime} 
                updateCurrentDate={(date)=>{
                    this.setState({
                        startDate: date
                    })
                    this.props.updateCurrentDate(date)
                }}
                updateCurrentTime={(time) => {
                    this.setState({
                        startTime: time
                    })
                    this.props.updateCurrentTime(time)
                }}
            />
        )
    }
}

 
class PickEndDate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            endDate: props.currentDate,
            endTime: props.currentTime
        }
    }

    render(){
        return (
            <PickDateTime 
                {...this.props} 
                label="结束时间:"
                currentDate={this.state.endDate}
                currentTime={this.state.endTime} 
                updateCurrentDate={(date)=>{
                    this.setState({
                        endDate: date
                    })
                    this.props.updateCurrentDate(date)
                }}
                updateCurrentTime={(time) => {
                    this.setState({
                        endTime: time
                    })
                    this.props.updateCurrentTime(time)
                }}
            />
        )
    }
}

class __PickLeaveTypeWidthLabel extends React.Component{
    constructor(props){
        super(props)
        this.state={
            leaveType: props.currentLeaveType
        }
    }

    render(){
        return(
            <PickLeaveTypeWidthLabel 
                currentLeaveType={this.state.leaveType}
                updateLeaveType={(leaveType) => {
                    this.setState({
                        leaveType: leaveType
                    })
                    this.props.updateLeaveType(leaveType)
                }}
            />
        )
    }
} 

function LeaveReasons(props){
    
    let input; 
    重新设置
    input 获取i熬点添加事件 在添加的事件中设置键盘回收后 失去焦点
    input 失去焦点 删除添加的事件
    function _blur(){
        input ? input.blur() : "";
    }
    
    
    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus',() => {
           Keyboard.addListener('keyboardDidHide', _blur)
        })
        unsubscribe()
    },[props])
    

    return (
        <FormItemContainerVertial label="请假原因">
            <TextInput 
                ref={(ref) => input = ref}
                style={[styles.leaveResonsInput]} 
                multiline={true}
                textAlignVertical= "top"
                numberOfLines = {10}
            /> 
        </FormItemContainerVertial>
    )
}

  
 

function ApplicationForLeave(props){
  
    React.useEffect(() => {
        const unsubscribe = props.navigation.addListener('focus',() => {
            props.onHeaderModeShow();            
            props.onTabBarVisibleHide();
            unsubscribe()
        })

    },[props])

    let info = {
        leaveType: '事假',
        startDate: getCurrentDate(),
        startTime : getCurrentTime(),
        endDate: getCurrentDate(),
        endTime : getCurrentTime(),
        reasons: "aaaa"
         
    }
 
    return (
        <View style={styles.ApplicationForLeave_comp}>

            <__PickLeaveTypeWidthLabel 
                currentLeaveType={info.leaveType}
                updateLeaveType={leaveType => info.leaveType = leaveType}
            />

            <PickStartDate 
                {...props}
                currentDate = {info.startDate}
                updateCurrentDate={data =>info.startData = data}
                currentTime ={info.startTime}
                updateCurrentTime={time => info.startTime = time}
                compStyle={styles.ApplicationForLeave_pickStartDateCompStyle}
            />

            <PickEndDate 
                {...props}
                currentDate = {info.endDate}
                updateCurrentDate={data =>info.endDate = data}
                currentTime ={info.endTime}
                updateCurrentTime={time => info.endTime = time}
                compStyle={styles.ApplicationForLeave_pickEndDateCompStyle}
            />

            <LeaveReasons 
                leaveReasons = {info.reasons}
            />
        </View>
    )
}

export default ApplicationForLeave
