import {StyleSheet} from "react-native";
import Css from "@static/source/css"
const styles = StyleSheet.create({
    compContainer: {
        width: "100%",
        backgroundColor: "#fff",
        borderBottomColor: Css.fifthBD
    },

    goBackContainer: {
        width: "100%",
        paddingVertical: 10,
        display: "flex",
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center'
    },

    goBackSvgContainer: {
        flex:1,
    },

    goBackIcon: {
        width: '30%',
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: 'center',
    },

    goBackIconLabel: {
        fontSize: Css.maiContent,
        color: Css.fifthFC
    },

    screenTitle:{
        width: "40%",
        fontSize:  Css.subTitle,
        textAlign: 'center',
        color: Css.fifthFC
    },

    placeHolderContainer: {
        width: '30%',
        height: "100%",
    }
    
})

export default styles;