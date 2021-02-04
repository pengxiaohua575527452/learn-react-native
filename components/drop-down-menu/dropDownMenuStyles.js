import {StyleSheet} from "react-native";

let borderColor = "#ccc"
let borderWidth = 1
let height = 30
let fontSize = 12
 


const styles = StyleSheet.create({
    dropDownMenuContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        flex:1,
        paddingLeft: 10,
        paddingRight: 10,
        height: height,
        backgroundColor: "#fff",
        borderTopWidth: borderWidth,
        borderTopColor: borderColor,
        borderBottomWidth: borderWidth,
        borderBottomColor: borderColor,
        borderLeftWidth: borderWidth,
        borderLeftColor: borderColor,
        borderRightWidth: borderWidth,
        borderRightColor: borderColor,
        borderTopLeftRadius: height / 2,
        borderTopRightRadius: height / 2,
        borderBottomLeftRadius: height / 2,
        borderBottomRightRadius: height / 2
    },

    label: {
        flexShrink :100,
        width: "100%",
        fontSize: 14,
        color: '#555'
    },

    iconContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    }


  
})

export default styles;