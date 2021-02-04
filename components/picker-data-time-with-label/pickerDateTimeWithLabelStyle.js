import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    compContainer: {
        width: "100%",
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "flex-end",
        alignItems: 'center',
    },

    pickerDateContainer:{
        flexShrink:1,
        height: "100%",
    },

    pickerTimeContainer: {
        flexShrink: 3,
        height: "100%",
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'flex-end',
    },
})

export default styles;