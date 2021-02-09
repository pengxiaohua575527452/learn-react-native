import React from "react";
import {View,Text, KeyboardAvoidingView, TextInput,ScrollView} from "react-native";
import styles from "./applicationForPurchaseStyles";
import FormItemContainerVerticalWithTextInput from "@components/form-item-container-vertical-with-TextInput/formItemContainerVerticalWithTextInput"
import FormItemContainerWidthPickCustom from "@components/form-item-container-with-PickCustom/formItemContainerWidthPickCustom";
import 
    PickDateTime, 
    {
        getCurrentTime,
        getCurrentDate
    } 
from "@components/picker-data-time-with-label/pickerDateTimeWithLabel"
import FormItemContainerWithTextInput from "@components/form-item-container-with-TextInput/formItemContainerWithTextInput"
import Buttom from "@components/button/button"
const purchaseType = [
    "办公用品",
    "办公设备",
    "活动用品",
    "生产物料",
    "生产服务",
    "虚拟设备",
    "虚拟服务"
]

class ApplicationForPurchase extends React.Component {
    constructor(props){
        super(props);
        this.state = {
            purchaseReason: "",
            purchaseType: "办公用品",
            DeliveryDate: getCurrentDate(),
            name: '',
            specifications: '',
            number: null, 
            money: null
        }

        
    }

    handleSubmit(){
        console.log('点击了提交')
    }

    handleCancel(){
        this.props.navigation.goBack()
    }

    render = render
}

export default ApplicationForPurchase;

function render(){
    return (
        <KeyboardAvoidingView
            behavior={Platform.OS == "ios" ? "padding" : "height"}
            style={styles.keyboardAvoidingView}
        >
            <ScrollView
                style={[styles.scrollView]}
            >
                <FormItemContainerVerticalWithTextInput
                    required={true} 
                    label="采购事由"
                    value={this.state.purchaseReason}
                    placeholder="请输入采购事由"
                    updateValue={content =>this.setState({purchaseReason: content})}
                />
                <View style={[styles.pageContentItemContainer]}>
                    <FormItemContainerWidthPickCustom 
                        label="采购类别"
                        required ={true}
                        title="采购类别"
                        value={[this.state.purchaseType]}
                        menu = {purchaseType}
                        updateValue={value=>this.setState({purchaseType: value[0]})}
                    />
                </View>

                <View style={[styles.pageContentItemContainer]}>
                    <PickDateTime 
                        type="date"
                        label="期望交付时间"
                        required={true}
                        currentDate= {this.state.DeliveryDate}
                        updateCurrentDate = {value => this.setState({DeliveryDate: value})}
                    />
                </View>

                <View style={[styles.pageContentItemContainer]}>
                    <FormItemContainerWithTextInput 
                        label="名称:"
                        required= {true}
                        value={this.state.name}
                        placeholder="请输入名称"
                        updateValue={value=>this.setState({name: value})}
                    />
                </View>

                <View style={[styles.pageContentItemContainer]}>
                    <FormItemContainerWithTextInput 
                        label="规格:"
                        required= {true}
                        value={this.state.specifications}
                        placeholder="请输入规格"
                        updateValue={value=>this.setState({specifications: value})}
                    />
                </View>

                <View style={[styles.pageContentItemContainer]}>
                    <FormItemContainerWithTextInput 
                        label="数量:"
                        required= {true}
                        value={this.state.number}
                        placeholder="请输入数量"
                        updateValue={value=>this.setState({number: value})}
                    />
                </View>

                <View style={[styles.pageContentItemContainer]}>
                    <FormItemContainerWithTextInput 
                        label="金额(人民币元):"
                        required= {true}
                        value={this.state.money}
                        placeholder="请输入金额"
                        updateValue={value=>this.setState({money: value})}
                    />
                </View>

                <View style={[styles.buttonContainerSubmit]}>
                    <Buttom 
                        type="primary"
                        label="提交"
                        onPress={this.handleSubmit}
                    />
                </View>

                <View style={[styles.buttonContainerCancel,{marginTop: 10}]}>
                    <Buttom 
                        type="default"
                        label="取消"
                        onPress={this.handleCancel}
                    />
                </View>


                {/* 底部的空隙 */}
                <Text style={[styles.pageButtonGap]}></Text>

            </ScrollView>

        </KeyboardAvoidingView>
    )
}