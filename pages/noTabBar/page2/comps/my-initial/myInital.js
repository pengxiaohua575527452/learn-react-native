import React from "react"
import { Text,FlatList } from "react-native";
import styles from "./myInitalStyles"
import ApprovalListItemLeave from "@components/approval-list-item-leave/approvalListItemLeave"
import Filter from "../filter/filter"

class MyApprovalList extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            contentProps: [
                {labelTitle: "假期类型:", labelProp: "typeLabel"},
                {labelTitle: "开始时间:", labelProp: "startTime"},
                {labelTitle: "结束时间:", labelProp: "endTime"},
            ],
            listData: [
                { type: "leave", typeLabel:"请假", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11",id: '1'}, 
                { type: "purchase", typeLabel:"采购", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11", id: '2'}, 
                { type: "purchase", typeLabel:"采购", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11", id: '4'}, 
                { type: "purchase", typeLabel:"采购", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11", id: '5'}, 
                { type: "purchase", typeLabel:"采购", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11", id: '6'}, 
                { type: "purchase", typeLabel:"采购", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11", id: '7'}, 
                { type: "purchase", typeLabel:"采购", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11", id: '8'}, 
                { type: "purchase", typeLabel:"采购", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11", id: '9'}, 
            ],
        }
    }

    updateList = (o) => {
        console.log('updateList 没有完成')
    }

    render(){
        return(
            <>
                <Filter {...this.props}  updateList={this.updateList}/>  
                {/* 列表内容 */}
                <FlatList
                    keyExtractor={(item,index) => index.toString() }
                    style={[styles.flatList]}
                    data={this.state.listData}
                    renderItem={(item,index)=>{ 
                        return (
                            <>
                                <ApprovalListItemLeave
                                    value={item.item}
                                    titleLabel= "请假"
                                    stateLabel="已通过"
                                    contentProps = {this.state.contentProps}
                                    extraContent = "2020-10-10 11:11" 
                                    onPressEvent={() =>{this.props.jumpToDetails(item)}} 
                                />
                            </>
                        )
                    }}
                    ListFooterComponent={props=><Text style={[styles.listFooterComponent]}></Text>}
                /> 
            </>
        )
    }
}

export default MyApprovalList;