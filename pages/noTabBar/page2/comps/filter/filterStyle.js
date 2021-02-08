import Css from "@static/source/css" 
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
        borderBottomColor: Css.thridBG
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
}


export default styles