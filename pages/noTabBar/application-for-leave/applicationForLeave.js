import React from "react";
import {
    View, 
    Text,
    KeyboardAvoidingView,
    Platform,
    ScrollView
} from "react-native";
import styles from "./applicationForLeaveStyle";
import {getCurrentDate} from "@components/picker-date/pickerDate" 
import {getCurrentTime} from "@components/picker-time/pickerTime" 
import PickLeaveTypeWidthLabel from "./comps/picker-leave-type-with-label/packerLeaveTypeWithLabel" 
import Button from "@components/button/button";
import PickStartDate from "./comps/pick-start-date/pickStartDate";
import PickEndDate from "./comps/pick-end-date/pickEndDate";
import LeaveReasons from "./comps/leave-reasons/leaveReasons"; 
import Remark from "./comps/remark/remark";
import Submit from "./comps/submit/submit";

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
        reasons: "",
        remark: ""
         
    }

    const handleSubmit = () => {
        console.log('info: ', info)
    }
 
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.container}
            enabled={true}
        >
            <ScrollView style={styles.ApplicationForLeave_comp}>

                <PickLeaveTypeWidthLabel 
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
                    {...props}
                    leaveReasons = {info.reasons}
                    updateLeaveResons = {content => info.reasons = content}
                />

                <Remark {...props} remark={info.remark} updateRemark={content => info.remark = content}/>

                <Submit label="提交" onPress={handleSubmit} type="primary"/>

                {/* 占位符 */}
                <Text style={{height: 100}}></Text>
            </ScrollView>
        </KeyboardAvoidingView>
    )
}

export default ApplicationForLeave
