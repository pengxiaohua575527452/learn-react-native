import React from "react"
import {
    View,
    Text,
    Button,
    TouchableHighlight,
    FlatList,
    Alert
} from "react-native";
import styles from "./indexStyles"
import HeaderPlaceholder from "@components/header-placeholder/index"
import DropDownMenu from "@components/drop-down-menu/dropDownMenu";
import DropDownMenuItem from "@components/drop-down-menu/dropDownMenuItem";
import ApprovalListItemLeave from "@components/approval-list-item-leave/approvalListItemLeave"
import ButtonFloat from "@components/button-float/buttonFloat"
 
import { createMaterialTopTabNavigator } from '@react-navigation/material-top-tabs';
const Material = createMaterialTopTabNavigator();

 
class PageContent extends React.Component {
    constructor(props){
        super(props)
        this.state = {
            rotateDeg : "0deg",
            dropDownMenuContainerHeight: 0,
            dropDownMenuData:[
                { label: "全部审批", value: "value1"},
                { label: "请假", value: "value2"},
                { label: "采购", value: "value3"},
            ],
            leftCurrnetValue:"All",
            listData: [
                { type: "leave", typeLabel:"请假", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11",id: '1'}, 
                { type: "purchase", typeLabel:"采购", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11", id: '2'}, 
                { type: "purchase", typeLabel:"采购", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11", id: '4'}, 
                { type: "purchase", typeLabel:"采购", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11", id: '5'}, 
                { type: "purchase", typeLabel:"采购", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11", id: '6'}, 
                { type: "purchase", typeLabel:"采购", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11", id: '7'}, 
                { type: "purchase", typeLabel:"采购", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11", id: '8'}, 
                { type: "purchase", typeLabel:"采购", startTime:  "2020-10-10 11:11", endTime: "2020-10-10 11:11", id: '9'}, 
            ]
        }
    }

    handleOnPress(data){
        this.setState({
            rotateDeg : "0deg",
            dropDownMenuContainerHeight: 0,
            leftCurrnetValue: data,
           
        })
    }

    handleClickFlatListItem(d){
        const {index, item} = d
        console.log('id: ', item.id)
        console.log('type: ', item.type)
        this.props.navigation.navigate("Index", {screen: "ApprovalDetail"})
    }


    render(){
        return (
            <>
                {/* 浮动按钮 */}
                <__ButtonFloat {...this.props}/>

                {/* 导航 */}
                <Material.Navigator>
                    {/* 左侧屏幕 */}
                    <Material.Screen name="1">
                        {(props)=>{
                            return(
                                <>
                                    <View style={styles.filterContainer}> 
                                        <TouchableHighlight 
                                            underlayColor="none"
                                            style={styles.filterItemContainer}
                                            onPress={() => {
                                                this.setState({
                                                    rotateDeg: this.state.rotateDeg === "0deg" ? "180deg" : "0deg",
                                                    dropDownMenuContainerHeight: this.state.rotateDeg === "0deg" ? 'auto' : 0
                                                })
                                            }}    
                                        >
                                            <DropDownMenu rotateDeg={this.state.rotateDeg} value={this.state.leftCurrnetValue}/>
                                        </TouchableHighlight>
                                        <TouchableHighlight style={styles.filterItemContainer}>
                                            <Text>Right</Text>
                                        </TouchableHighlight>
                                    </View>

                                    {/* 下拉菜单的内容 */}
                                    <View style={{width: "100%", height: 0, overflow: 'visible'}}>
                                        <View style={[styles.dropDownMenuContainer,{height: this.state.dropDownMenuContainerHeight}]}>
                                            {(()=>this.state.dropDownMenuData.map((item,index) => <DropDownMenuItem key={index} data={item}  onPressItem={() => {this.handleOnPress(item.value)}} />))()}
                                        </View>
                                    </View>

                                    {/* 列表内容 */}
                                    <FlatList
                                        keyExtractor={(item,index) => index.toString() }
                                        style={{
                                            paddingHorizontal: 20,
                                            backgroundColor: "#fff"
                                        }}
                                        data={this.state.listData}
                                        renderItem={(item)=>{ 
                                            return <ApprovalListItemLeave
                                                value={item.item}
                                                titleLabel= "请假"
                                                stateLabel="已通过"
                                                contentProps = {[
                                                    {labelTitle: "假期类型:", labelProp: "typeLabel"},
                                                    {labelTitle: "开始时间:", labelProp: "startTime"},
                                                    {labelTitle: "结束时间:", labelProp: "endTime"},
                                                ]}
                                                extraContent = "2020-10-10 11:11" 
                                                style={{height: 100}} 
                                                onPressEvent={() =>{this.handleClickFlatListItem(item)}} 
                                            />
                                        }}
                                    />  

                                    
                                </>
                            )
                        }}
                    </Material.Screen>

                    <Material.Screen name="2">
                        {()=>{
                            return(
                                <>
                                    <Text>2</Text>
                                </>
                            )
                        }}
                    </Material.Screen>
                    <Material.Screen name="3">
                        {()=>{
                            return(
                                <>
                                    <Text>3</Text>
                                </>
                            )
                        }}
                    </Material.Screen>
                </Material.Navigator>
            </>
        )
    }
    
}



function Page2 (props){
    React.useEffect(() => {
        return props.navigation.addListener('focus', () => {
            props.onHeaderModeShow()
            props.onTabBarVisibleHide()
        })
    },[props])
   
    return (
        <>
            <PageContent {...props}/>
        </>
    )
    
}

// 浮动按钮
function __ButtonFloat(props){
    return (
        <ButtonFloat
            {...this.props} 
            onPress={()=>{
                Alert.alert('点击了+')
            }}
            label="+"
            type="primary"
            bottom = {50}
            right={20}
        />
    )
}


export default Page2