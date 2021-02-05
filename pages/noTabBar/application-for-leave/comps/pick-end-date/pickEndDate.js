import React from "react";
import { View } from "react-native";
import PickDateTime from "@components/picker-data-time-with-label/pickerDateTimeWithLabel"
import styles from "./pickEndDateStyle";

class PickEndDate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            endDate: props.currentDate,
            endTime: props.currentTime
        }
    }

    render(){
        return (
            <View style={[styles.compContainer]}>
                <PickDateTime 
                    {...this.props} 
                    label="结束时间:"
                    currentDate={this.state.endDate}
                    currentTime={this.state.endTime} 
                    updateCurrentDate={(date)=>{
                        this.setState({
                            endDate: date
                        })
                        this.props.updateCurrentDate(date)
                    }}
                    updateCurrentTime={(time) => {
                        this.setState({
                            endTime: time
                        })
                        this.props.updateCurrentTime(time)
                    }}
                />
            </View>
        )
    }
}

export default PickEndDate;