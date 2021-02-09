import { StyleSheet } from "react-native";
import Css from "@static/source/css";
const styles = StyleSheet.create({
    keyboardAvoidingView: {
        height: "100%",
    },

    scrollView: {
        height: "100%",
    },

    pageContentItemContainer: {
        marginTop: Css.pageContentItemSplitSpaceMin,
    },

    buttonContainerSubmit: {
        marginTop:Css.gapBetweenButtonAndNonButton,
        paddingHorizontal: Css.pagePaddingHorizontal
    },

    buttonContainerCancel: {
        marginTop: 10,
        paddingHorizontal: Css.pagePaddingHorizontal
    },

    pageButtonGap: {
        height: Css.gapBetweenButtonAndNonButton
    }


   
})

export default styles