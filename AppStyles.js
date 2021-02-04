import { StyleSheet } from "react-native";

const appStyles = {
    tabBar: StyleSheet.create({
        container: {
            display: "flex",
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            width: "100%",
            height: 56,
            borderTopWidth: 1,
            borderTopColor: "#ccc",
            backgroundColor: '#fff'
        }
    })
}

export default appStyles

