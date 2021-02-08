import React from "react"
import {
    View,
} from "react-native";
import styles from "./filterStyle"
import DropDownMenu from "@components/drop-down-menu/dropDownMenu";
import DropDownMenuItem from "@components/drop-down-menu/dropDownMenuItem"; 

function _Filter(props){
    return(
        <>
            <View style={styles.filterContainer}> 
                {/* 全部审批 下拉菜单按钮 */}
                <View style={styles.filterItemContainer} >
                    <DropDownMenu 
                        rotateDeg={props.approvalTypeRotateDeg} 
                        value={props.currentTypeValue.label}
                        onPress={props.updateType}    
                    />
                </View>
                {/* 全部状态 下拉菜单按钮 */}
                <View style={styles.filterItemContainer} >
                    <DropDownMenu 
                        rotateDeg={props.allStateRotateDeg} 
                        value={props.currentState.label}
                        onPress={props.updateState}
                    />
                </View>
            </View>

            {/* 下拉菜单的内容 */}
            <View style={{width: "100%", height: 0, overflow: 'visible'}}>
                <View style={[styles.dropDownMenuContainer,{height: props.dropDownMenuContainerHeight}]}>
                    {(()=>props.dropDownMenuData.map((item,index) => <DropDownMenuItem key={index} data={item}  onPressItem={() => {props.updateCurrentValue(item.value)}} />))()}
                </View>
            </View>
        </>
    )
}


class Filter extends React.Component{
    constructor(props){
        super(props)
        this.state = {
            approvalTypeRotateDeg : "0deg",
            allStateRotateDeg: '0deg',
            dropDownMenuContainerHeight: 0,
            dropDownMenuData:[],
            currentTypeValue:{label:"全部审批",value: "value1"},
            dropdownMenuAllType: [
                { label: "全部审批", value: "value1"},
                { label: "请假", value: "value2"},
                { label: "采购", value: "value3"},
            ],
            currentState : {label: "全部状态", value: "value1"},
            dropDownMenuAllState:[
                { label: "全部状态", value: "value1"},
                { label: "审批中", value: "2"},
                { label: "已通过", value: "value13"},
                { label: "已拒绝", value: "value14"},
                { label: "已撤销", value: "value15"},
            ],
        }
    }

    updateType = () =>{
        this.setState({
            approvalTypeRotateDeg: this.state.approvalTypeRotateDeg === "0deg" ? "180deg" : "0deg",
            allStateRotateDeg: "0deg"  ,
            dropDownMenuContainerHeight: this.state.approvalTypeRotateDeg === "0deg" ? 'auto' : 0,
            dropDownMenuData: this.state.dropdownMenuAllType
        })
    }

    updateState = () => {
        this.setState({
            approvalTypeRotateDeg: "0deg" ,
            allStateRotateDeg: this.state.allStateRotateDeg === "0deg" ? "180deg" : "0deg",
            dropDownMenuContainerHeight: this.state.allStateRotateDeg === "0deg" ? 'auto' : 0,
            dropDownMenuData: this.state.dropDownMenuAllState
        })
    }

    updateCurrentValue = (value) =>{
        this
        .update_currentTypeValue_currentState(value)
        .setState({
            approvalTypeRotateDeg : "0deg",
            allStateRotateDeg: "0deg",
            dropDownMenuContainerHeight: 0,
        })
        this.props.updateList({

        })
    }

    update_currentTypeValue_currentState = (value) => {
        this.state.approvalTypeRotateDeg === "180deg" 
        // 当前下拉菜单项是 审批类型
        ?this.setState({ currentTypeValue: this.state.dropdownMenuAllType.find(item => item.value === value) })
        // 当前下拉菜单项是 审批状态
        :this.setState({ currentState: this.state.dropDownMenuAllState.find(item => item.value === value) });
        return this
    } 

    render(){
        return (
            <_Filter 
                {...this.props} 
                {...this.state}
                updateType={this.updateType}
                updateState={this.updateState}
                updateCurrentValue={this.updateCurrentValue}
            />
        )
    }
}

export default Filter;