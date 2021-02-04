import {StyleSheet} from "react-native";
const styles = StyleSheet.create({
    compContainer: {
        width: "100%",
        height: 50,
        display: 'flex',
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: 'center',
        paddingHorizontal: 10,
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
        fontSize: 13,
        color: "#666",
        fontWeight: "900"
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