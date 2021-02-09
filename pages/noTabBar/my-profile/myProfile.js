import React from "react";
import {View,Text} from "react-native";
import Styles from "./myProfileStyles";
import Css from "@static/source/css";
import FormItemContainer from "@components/form-item-container/formItemContainer"

class MyProfilePage extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            profilesProps: ['mobile'],
            mobile: "188 8888 8888",
            email: "xxx.xxx.xx@xxx.com",
        }
    }

    render = render
}

export default MyProfilePage;

function render(){
    return (
        <>
            <View style={[Styles.itemContainer]}>
                <FormItemContainer label="移动电话:">
                    <Text style={[Styles.content]}>188 8888 8888</Text>
                </FormItemContainer>
            </View>

            <View style={[Styles.itemContainer]}>
                <FormItemContainer label="座机:">
                    <Text style={[Styles.content]}>xxxx xxxx</Text>
                </FormItemContainer>
            </View>
            
            <View style={[Styles.itemContainer]}>
                <FormItemContainer label="电邮:">
                    <Text style={[Styles.content]}>xxx.xxx.xx@xxx.com</Text>
                </FormItemContainer>
            </View>

            <View style={[Styles.itemContainer]}>
                <FormItemContainer label="部门:">
                    <Text style={[Styles.content]}>xxx</Text>
                </FormItemContainer>
            </View>
        </>
    )
}