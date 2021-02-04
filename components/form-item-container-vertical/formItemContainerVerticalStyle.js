import {StyleSheet} from "react-native";
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
        fontSize: 13,
        color: "#666",
        fontWeight: "900"
    },

    dataContainer: {
        width: '100%',
        // minHeight: 100,
    },
})

export default styles;