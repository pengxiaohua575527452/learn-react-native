import React from "react";
import {View, Text,Image } from "react-native";
import styles from "./approvalDetailUserInfoStyle"
 
function ApprovalDetailUserInfo(){
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
                    <Text style={[styles.applicantInfoTitleMain]}>请假</Text>
                    <Text style={[styles.applicantInfoTitleSub]}>笑笑</Text>
                </View>
            </View>
            
            <View style={[ styles.applicantInfoStateContainer]} >
                <Text 
                    style={[
                        styles.applicantInfoStateText,
                        {
                            backgroundColor: '#333',
                            color: "#999"
                        }
                    ]}
                >
                    state
                </Text>
            </View>
        </View>
    )
}

export default  ApprovalDetailUserInfo