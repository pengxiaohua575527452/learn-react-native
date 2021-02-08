import {StyleSheet} from "react-native";
import Css from "@static/source/css" 

let borderWidth = 1
let height = 30
 


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
        borderTopColor: Css.fourthBG,
        borderBottomWidth: borderWidth,
        borderBottomColor: Css.fourthBG,
        borderLeftWidth: borderWidth,
        borderLeftColor: Css.fourthBG,
        borderRightWidth: borderWidth,
        borderRightColor: Css.fourthBG,
        borderTopLeftRadius: height / 2,
        borderTopRightRadius: height / 2,
        borderBottomLeftRadius: height / 2,
        borderBottomRightRadius: height / 2
    },

    label: {
        flexShrink :100,
        width: "100%",
        fontSize: Css.content,
        color: Css.fourthFC
    },

    iconContainer: {
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
        height: "100%",
    }


  
})

export default styles;