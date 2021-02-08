import {StyleSheet} from "react-native";
import Css from "@static/source/css" 
const styles = StyleSheet.create({
  compContainer: {
    width: '100%',
    height: "100%",
    flexDirection: 'row',
    justifyContent: "flex-end",
    alignItems: 'center',
  },

  textStyle:{
    fontSize: Css.maiContent,
    color: Css.fifthFC
  },
})  

export default styles;