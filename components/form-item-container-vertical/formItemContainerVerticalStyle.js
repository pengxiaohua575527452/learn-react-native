import {StyleSheet} from "react-native";
import Css from "@static/source/css" 
const styles = StyleSheet.create({
    compContainer: {
        width: "100%",
        display: 'flex',
        flexDirection: 'column',
        justifyContent: "flex-start",
        alignItems: 'center',
        paddingHorizontal: 10,
        backgroundColor: '#fff'
    },

    labelContainer: {
        width: "100%",
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'flex-start',
        alignItems: "center",
    },

    label: {
        fontSize: Css.content,
        color: Css.thridFC,
    },

    dataContainer: {
        width: '100%',
        // minHeight: 100,
    },
})

export default styles;