import React from "react";
import { ScrollView, View, Text, Image, TouchableOpacity  } from "react-native";
import styles from "./approvalDetailStyle";
import ApprovalDetailProcessUserInfo from "@components/approval-detail-process-user-info/approvalDetailProcessUserInfo";
import ApprovalDetailUserInfo from "@components/approval-detail-user-info/approvalDetailUserInfo"
import Button from "@components/button/button"
 
const approvalLeavDetailData= {
    titleLabel: [
        "申请编号",
        "所属部门",
        "请假类型",
        "开始时间",
        "结束时间",
        "持续时间",
        "申请是由",
        "其他说明",
     
    ],
    titleValueProp: [
        "number",
        "department",
        "leaveType",
        "startTime",
        "endTime",
        "duration",
        "reasons",
        "remark",
    ]
}


 
function ApprovalDetail(props){
    const id = props.id;
    const approvalType = props.approvalType;

    React.useEffect(()=>{
        const unsubscribe = props.navigation.addListener('focus',() => {
            props.onHeaderModeShow();
            props.onTabBarVisibleHide();
            unsubscribe() // 取消订阅
        })
    })

    const detail = getDetail()

    return(
        <ScrollView style={[ styles.compContainer]}>
            
            {/* 申请人信息 */}
            {/* <ApprovalDetailUserInfo {...props}/> */}
            {/* 申请详情 */}
            <View
                style={[
                    styles.detailContainer 
                ]}
            >
                {/* 申请详情 */}
                <View style={[styles.detail]}>
                    {
                        approvalLeavDetailData.titleLabel.map((item,index) => {
                            return (
                                <View style={[styles.contentContainer]} key={index}>
                                    <Text style={[styles.detailTitle]}>{item}</Text>
                                    <Text style={[styles.detailContent]}>{detail[approvalLeavDetailData.titleValueProp[index]]}</Text>
                                </View>
                            )
                        })
                    }
                </View>

                {/* 进度详情 */}
                <View style={[styles.process]}>
                    {
                        detail.process.map((item, index) => {
                            if(detail.process.length === index + 1){
                                return (
                                    <View key={index}>
                                        <ApprovalDetailProcessUserInfo {...props}/>
                                    </View>
                                )
                            }else{
                                return (
                                    <View key={index}>
                                        <ApprovalDetailProcessUserInfo {...props}/>
                                        <View>
                                            <View style={[styles.processLine]}></View>
                                        </View>
                                    </View>
                                )
                            }
                        })
                    }
                </View>

                <View style={{marginTop: 60}}>
                    <Button 
                        {...props} 
                        label="PASS"
                        type="primary"
                        onPress={() => {console.log("点击了Button")}}
                    />
                </View>

                <View style={{marginTop: 30}}>
                    <Button 
                        {...props} 
                        label="REJECT"
                        type="default"
                        onPress={() => {console.log("点击了Button")}}
                    />
                </View>
                 
            </View>
            
           
        </ScrollView>
    )
}





function getDetail(id, approvalType){
    return {
        useName: "xxx",
        useId: 'xxx',
        useImage:'xxx',
        number: 11111,
        department: "xxx xxx xxx",
        leaveType: "xx",
        startTime: '2020-10-10 11:11',
        endTime: '2020-10-10 11:11',
        duration: 'xx',
        reasons: 'xxx',
        remark: 'xxx', 
        state: 'xxx',
        stateLabel: 'xxx',
        process: [
            {userName: 'xx',useID: 'xx', useImage:'xxx', action: "xx", time: "2020-11-11 11:11",state: 'lauch' },
            {userName: 'xx',useID: 'xx', useImage:'xxx', action: "xx", time: "2020-11-11 11:11",state: 'pass' },
            {userName: 'xx',useID: 'xx', useImage:'xxx', action: "xx", time: "2020-11-11 11:11",state: 'reject' },
            {userName: 'xx',useID: 'xx', useImage:'xxx', action: "xx", time: "2020-11-11 11:11",state: 'wait' },
        ],
        sendDuplicateto: [
            {userName: 'xx',useID: 'xx', useImage:'xxx', action: "xx", time: "2020-11-11 11:11" },
            {userName: 'xx',useID: 'xx', useImage:'xxx', action: "xx", time: "2020-11-11 11:11" },
            {userName: 'xx',useID: 'xx', useImage:'xxx', action: "xx", time: "2020-11-11 11:11" }
        ]
    }
}




export default ApprovalDetail;