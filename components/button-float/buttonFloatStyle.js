import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    compContainer: {
        position: "absolute",
        zIndex: 99,
        width: 50,
        height: 50,
        borderBottomLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderTopLeftRadius: 100,
        borderTopRightRadius: 100,
        overflow: 'hidden',
    },

    buttonContainer: {
        justifyContent: "center",
        alignItems: "center",
        width: 50,
        height: 50,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        
    },

    text: {
        bottom: 3,
        fontSize: 38,
        fontWeight: "100"
       
    }

})

export default styles;