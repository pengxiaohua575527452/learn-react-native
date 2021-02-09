import {StyleSheet} from "react-native";
import Css from "@static/source/css" 

const styles = StyleSheet.create({
    compContainer: {
        width: "100%",
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: Css.pagePaddingHorizontal,
        backgroundColor: '#fff'
    },

    labelContainer: {
        height: "100%",
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
    
    },

    label: {
        fontSize: Css.content,
        color: Css.thridFC,
    },

    required: {
        marginLeft: 5,
        fontSize: Css.mainTitle,
        color: Css.required
    }, 

    dataContainer: {
        width: "100%",
        flexShrink: 100,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-end',
        alignItems: 'center',
        height: "100%",
       
    },
})

export default styles;