import React from "react";
import { View } from "react-native";
import PickDateTime from "@components/picker-data-time-with-label/pickerDateTimeWithLabel"
import styles from "./pickStartDateStyle";

class PickStartDate extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            startDate: props.currentDate,
            startTime: props.currentTime
        }
    }

    render(){
        return (
            <View style={[styles.compContainer]}>
                <PickDateTime 
                    {...this.props} 
                    label="开始时间:"
                    currentDate={this.state.startDate}
                    currentTime={this.state.startTime} 
                    updateCurrentDate={(date)=>{
                        this.setState({
                            startDate: date
                        })
                        this.props.updateCurrentDate(date)
                    }}
                    updateCurrentTime={(time) => {
                        this.setState({
                            startTime: time
                        })
                        this.props.updateCurrentTime(time)
                    }}
                />
            </View>
        )
    }
}

export default PickStartDate;