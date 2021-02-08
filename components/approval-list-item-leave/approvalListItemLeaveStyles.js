import { StyleSheet } from "react-native";
import Css from "@static/source/css" 
const styles = StyleSheet.create({
    compContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop:20,
        backgroundColor: Css.white,
        borderTopWidth: 1,
        borderTopColor: Css.thridBD,
        borderBottomWidth: 1,
        borderBottomColor: Css.thridBD,
        borderRightWidth: 1,
        borderRightColor: Css.thridBD,
        borderLeftWidth: 1,
        borderLeftColor: Css.thridBD,
        borderTopRightRadius: 3,
        borderTopLeftRadius: 3,
        borderBottomRightRadius: 3,
        borderBottomLeftRadius: 3,
    },

    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 3,
        // backgroundColor: 'red'
    },

    title: {
        color: Css.fifthFC,
        fontSize: Css.maiContent,
        lineHeight: 30,
    },

    tag: {
        color: Css.white,
        backgroundColor: Css.green,
        paddingHorizontal: 3,
        paddingVertical: 2,
        fontSize: Css.tabContent,
    },

    contentItemContainer: {
        display: "flex",
        flexDirection: "row",
        paddingVertical:1,
        justifyContent: "flex-start",
        alignItems: 'center',
    },

    contentItemLabel: {
        fontSize: Css.content,
        color: Css.fourthFC,
        height: "100%",
    },

    contentItemContent: {
        width: "100%",
        flexShrink: 100,
        marginLeft: 5,
        fontSize: Css.content,
        color: Css.fifthFC

    },

    extraDetailContainer: {
        fontSize: Css.lightContent,
        color: Css.fourthFC,
        marginTop:15,
    }
})

export default  styles