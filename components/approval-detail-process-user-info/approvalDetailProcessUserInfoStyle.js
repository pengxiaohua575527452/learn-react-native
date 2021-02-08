import { StyleSheet } from "react-native";
import Css from "@static/source/css" 

const styles = StyleSheet.create({
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
        fontSize: Css.maiContent,
        color: Css.fifthFC,
    },

    applicantInfoTitleSub:{
        fontSize: Css.content,
        color: Css.fourthFC,
    },


    applicantInfoStateContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        paddingLeft: 10,
    },

    applicantInfoStateText: {
        fontSize: Css.content,
        color: Css.fourthFC,
        paddingHorizontal: 5,
        
    }
})

export default styles;