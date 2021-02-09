import { StyleSheet } from "react-native";
import Css from "@static/source/css";
const styles = StyleSheet.create({
    compContainer:{
        width: "100%",
        height: 160,
        paddingHorizontal: Css.pagePaddingHorizontal,
        paddingBottom: 36,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "space-between",
        alignItems: "flex-end",
        backgroundColor: Css.white,
    },

    imageContainer: {
        flex: 5,
        display: "flex",
        flexDirection: 'row',
        justifyContent: "flex-start",
        alignItems: "center",
        // backgroundColor: '#eee'
    },

    image: {
        borderTopRightRadius: 100,
        borderTopLeftRadius: 100,
        borderBottomRightRadius: 100,
        borderBottomLeftRadius: 100,
    },

    imageTextContainer: {
        marginLeft: 10,
    },

    imageMainTtile: {
        fontSize: Css.subTitle,
        color: Css.fifthFC,
        lineHeight: 30
    },

    imageSubTitle: {
        fontSize: Css.lightContent,
        color: Css.fifthFC,
        lineHeight: 26
    },

    reserveContainer: {
        flex: 1,
        height: "100%",
        // backgroundColor: '#ccc'
    },
})

export default styles