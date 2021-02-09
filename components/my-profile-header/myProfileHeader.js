import React from "react";
import {View, Text, Image} from "react-native";
import styles from "./myProfileHeaderStyles";
import Css from "@static/source/css";


function MyProfileHeader(props){
    return  (
        <View
            style={styles.compContainer}
        >   
            {/* 头像 */}
            <View
                style={[styles.imageContainer]}
            >
                {/* t头像 */}
                <Image 
                    source={{
                        uri:"https://image.32yx.com/file/userfiles/images/2015091609562816396.jpg",
                        width: 60,
                        height: 60
                    }}
                    style={[styles.image]}
                />
                {/* 文本 */}
                <View style={[styles.imageTextContainer]}>
                    <Text style={[styles.imageMainTtile]}>主标题</Text>
                    <Text style={[styles.imageSubTitle]}>副标题</Text>
                </View>
            </View>
            <View style={[styles.reserveContainer]}>
                <Text></Text>
            </View> 
        </View>
    )
}

export default MyProfileHeader;