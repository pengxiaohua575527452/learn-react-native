import React from "react";
import {View, Image, Text } from "react-native";
import tabBarItemStyles from "./tabBarItemStyles"

class TabBarItem extends React.Component{
    constructor(props){
        super(props)
    }

    render(){
        return (
            <View style={tabBarItemStyles.container}>
                <View style={tabBarItemStyles.imageContaienr}>
                    <Image style={tabBarItemStyles.image} source={this.props.source}/>
                </View>
                <Text style={tabBarItemStyles.label}>
                    {this.props.children}
                </Text>
            </View>
        )
    }
}

export default TabBarItem;