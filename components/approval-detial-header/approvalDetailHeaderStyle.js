import {StyleSheet} from "react-native";

const styles = StyleSheet.create({
    compContainer: {
        width: "100%",
        backgroundColor: "#fff"
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
        color: "#555"
    },

    screenTitle:{
        width: "40%",
        fontSize: 16,
        textAlign: 'center',
        color: "#333"
    },

    placeHolderContainer: {
        width: '30%',
        height: "100%",
        // backgroundColor: 'red'
    }


    

    
})

export default styles;