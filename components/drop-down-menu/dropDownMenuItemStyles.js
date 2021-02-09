import {StyleSheet} from "react-native";
import Css from "@static/source/css"

const styles = StyleSheet.create({
     itemContainer: {
          width: "100%",
          height: Css.textMenuItemHeight,
          borderBottomWidth: 1,
          borderBottomColor: Css.firstBD,
          backgroundColor: Css.white
     },

     label: {
          paddingHorizontal: Css.pagePaddingHorizontal,
          width: "100%",
          height: "100%",
          lineHeight:  Css.textMenuItemHeight - 2,
          color: Css.fifthFC
     }
})

export default styles;