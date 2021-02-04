import { StyleSheet } from "react-native";
const tabBarItemStyles =  StyleSheet.create({
        container: {
            width: "100%",
            height: "100%",
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
            alignItems: "center",
        },
        imageContaienr: {
            width: 28,
            height: 28,
            backgroundColor: '#eee'
        },
        image: {
            width: "100%",
            height: "100%" 
        },
        label: {
            fontSize: 12,
            color: "#333"
        }


    })

 

export default tabBarItemStyles