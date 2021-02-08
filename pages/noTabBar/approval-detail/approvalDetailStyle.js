import { StyleSheet } from "react-native";
import Css from "@static/source/css" 

const styles = StyleSheet.create({
    compContainer: {
        flex:1,
        backgroundColor: Css.firstBG
    },

    applicantInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: 10,
        width: "100%",
        height: 62,
        flexGrow: 0,
        backgroundColor: "#fff"
    },

    applicantInfoImageContainer: {
        display: "flex",
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: 'center',
    },

    applicantInfoTitleContainer: {
        marginLeft: 10,
        justifyContent: "center",
        height: "100%",
    },

    applicantInfoTitleMain:{
        fontSize: 15,
        color: "#333"
    },

    applicantInfoTitleSub:{
        fontSize: 13,
        color: "#666"
    },


    applicantInfoStateContainer: {
        paddingLeft: 10,
    },

    applicantInfoStateText: {
        fontSize: 12,
        paddingHorizontal: 5,
        
    },

    detailContainer: {
        paddingHorizontal: 20,
        paddingVertical: 30,
        width: "100%",
        height: "100%",
    },

    detail: {
        width: "100%",
        minHeight: 100,
        paddingVertical: 10,
        paddingHorizontal: 10,
        backgroundColor: "#fff",
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
        overflow: "hidden"
    },

    contentContainer: {
        marginBottom: 20,
    },

    detailTitle: {
        fontSize: Css.conent,
        color: Css.fourthFC,
    },

    detailContent: {
        fontSize: Css.maiContent,
        color: Css.fifthFC,
    },

    process: {
        marginTop: 20,
        width: "100%",
        minHeight: 100,
        backgroundColor: "#fff",
        backgroundColor: Css.white,
        borderTopWidth: 1,
        borderTopColor: Css.thridBD,
        borderBottomWidth: 1,
        borderBottomColor: Css.thridBD,
        borderRightWidth: 1,
        borderRightColor: Css.thridBD,
        borderLeftWidth: 1,
        borderLeftColor: Css.thridBD,
        borderTopRightRadius: 5,
        borderTopLeftRadius: 5,
        borderBottomRightRadius: 5,
        borderBottomLeftRadius: 5,
        overflow: "hidden"
    },

    processLine: {
        marginLeft: 30,
        height: 50,
        width: 1,
        backgroundColor: Css.fifthBD
    }

})

export default styles;