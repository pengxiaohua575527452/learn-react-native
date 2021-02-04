import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
    compContainer: {
        display: "flex",
        flexDirection: "column",
        width: "100%",
        paddingHorizontal: 10,
        paddingVertical: 10,
        marginTop:20,
        backgroundColor: "#eee"
    },

    titleContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: 'space-between',
        alignItems: 'center',
        paddingVertical: 3,
    },

    title: {
        color: "#333",
        fontSize: 14,
    },

    tag: {
        color: "#74a800",
        backgroundColor: "#95ec69",
        paddingHorizontal: 3,
        paddingVertical: 2,
        fontSize: 10,
    },

    contentItemContainer: {
        display: "flex",
        flexDirection: "row",
        paddingVertical:1,
        justifyContent: "flex-start",
        alignItems: 'center',
    },

    contentItemLabel: {
        fontSize: 13,
        color: "#555",
        height: "100%",
    },

    contentItemContent: {
        width: "100%",
        flexShrink: 100,
        marginLeft: 5,
        fontSize: 13,
        color: "#333"

    },

    extraDetailContainer: {
        fontSize: 12,
        color: "#666",
        marginTop:5,
    }
})

export default  styles