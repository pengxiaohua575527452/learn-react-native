const styles = {
    filterContainer: {
        display: "flex",
        flexDirection: "row",
        justifyContent: "space-between",
        alignItems: "center",
        width: "100%",
        height: 50,
        backgroundColor: "#fff",
        borderBottomWidth: 1,
        borderBottomColor: "#ccc"
    },

    filterItemContainer: {
        flex:1,
        height: "100%",
        padding: 10,
    },

    dropDownMenuContainer: {
        position: 'absolute',
        zIndex: 9999,
        width: "100%",
        height: "auto",
        overflow: 'hidden',
    },

    floatButton: {
        position: "absolute",
        zIndex: 99,
        bottom: 20,
        right: 20,
        width: 50,
        height: 50,
        overflow: "hidden",
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        backgroundColor: "red"
    }
}


export default styles