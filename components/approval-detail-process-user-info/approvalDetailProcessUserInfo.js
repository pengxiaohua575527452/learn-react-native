import React from "react";
import {View, Text,Image } from "react-native";
import styles from "./approvalDetailProcessUserInfoStyle"
 
function ApprovalDetailProcessUserInfo(){
    return (
        <View style={[ styles.applicantInfoContainer ]} >   
            <View style={[styles.applicantInfoImageContainer]}>
                <Image 
                    style={[styles.applicantInfoImage]}
                    source={{
                        uri:"https://image.32yx.com/file/userfiles/images/2015091609562816396.jpg",
                        width: 42,
                        height: 42
                    }}
                />
                <View style={[styles.applicantInfoTitleContainer]}>
                    <Text style={[styles.applicantInfoTitleMain]}>aaa</Text>
                    <Text style={[styles.applicantInfoTitleSub]}>bbb</Text>
                </View>
            </View>
            
            <View style={[ styles.applicantInfoStateContainer ]} >
                <Text 
                    style={[
                        styles.applicantInfoStateText,
                    ]}
                >
                    2020-11-11 11:11
                </Text>
            </View>
        </View>
    )
}

export default ApprovalDetailProcessUserInfo;