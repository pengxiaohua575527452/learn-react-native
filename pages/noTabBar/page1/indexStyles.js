import Css from "@static/source/css" 
let styles = {
    imageContainer: {
        with: '100%',
        height: 200,
        backgroundColor: Css.fifthBG,
        justifyContent: 'center',
        alignItems: 'center'
    },

    contentContainer: {
        flex: 1,
        paddingHorizontal: Css.pagePaddingHorizontal,
        paddingVertical: 30,
        display: "flex",
        flexDirection: "row",
        flexWrap: "wrap",
        justifyContent: "flex-start",
        alignItems: "flex-start",
    },

    pageIconContainer: {
        display: "flex",
        justifyContent:'center',
        alignItems: "center",
        width: "20%",
        height: 80,
    },

    pageIconLabel: {
        fontSize: 12,
        color:Css.primary
    }
}

export default  styles