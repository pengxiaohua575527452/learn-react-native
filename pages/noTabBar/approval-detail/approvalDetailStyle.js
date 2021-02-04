import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    compContainer: {
        flex:1,
        backgroundColor: "#eee"
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
        backgroundColor: "#fff"
    },

    contentContainer: {
        marginBottom: 20,
    },

    detailTitle: {
        fontSize: 14,
        color: "#666",
        fontWeight: "900",
    },

    detailContent: {
        fontSize: 12,
        color: '#333',
    },

    process: {
        marginTop: 20,
        width: "100%",
        minHeight: 100,
        backgroundColor: "#fff"
    },

    processLine: {
        marginLeft: 30,
        height: 50,
        width: 1,
        backgroundColor: 'red'
    }

})

export default styles;