import { StyleSheet } from "react-native";
import Css from "@static/source/css";
const styles = StyleSheet.create({
    applicantInfoContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        paddingVertical: 10,
        paddingHorizontal: Css.pagePaddingHorizontal,
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

    applicantInfoImage: {
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        
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
        color: "#999"
    }
})

export default styles;