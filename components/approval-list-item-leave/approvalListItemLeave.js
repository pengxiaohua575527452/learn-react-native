import React from "react";
import {View, Text, TouchableHighlight} from "react-native";
import styles from "./approvalListItemLeaveStyles"
 
// value={item}
// titleLabel= "请假"
// stateLabel="已通过"
// contentProps = {[
// {labelTitle: "假期类型", contentProp: "type"},
// {labelTitle: "开始时间", contentProp: "statTime"},
// {labelTitle: "结束时间", contentProp: "endTime"},
// ]}
// extraContent = "2020-10-10 11:11" 
function ApprovalListItemLeave(props){
   
    return (
        
        <TouchableHighlight
            style={styles.compContainer}
            underlayColor= "none"
            onPress={() =>{props.onPressEvent()}}
        >
            <>
                <View style={styles.titleContainer} >
                    <Text style={styles.title}>{props.titleLabel}</Text>
                    <Text style={styles.tag}>{props.stateLabel}</Text>
                </View>
                {
                    props.contentProps.map((item,index) => {
                        return (
                            <View key={index}>
                                <View  style={styles.contentItemContainer} >
                                    <Text style={styles.contentItemLabel} >{item.labelTitle}</Text>
                                    <Text style={styles.contentItemContent} >{props.value[item.labelProp]}</Text>
                                </View>
                            </View>
                        )
                    })
                }
                <Text style={styles.extraDetailContainer} >{props.extraContent}</Text>
            </>
        </TouchableHighlight>   
    )
}

export default ApprovalListItemLeave