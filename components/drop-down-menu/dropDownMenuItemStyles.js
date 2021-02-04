import {StyleSheet} from "react-native";

let borderColor = "#eee"
let borderWidth = 1
let height = 45
let fontSize = 12
 


const styles = StyleSheet.create({
   itemContainer: {
        width: "100%",
        height: height,
        borderBottomWidth: 1,
        borderBottomColor: borderColor,
        backgroundColor: "#fff"
   },

   label: {
        paddingHorizontal: 10,
        width: "100%",
        height: height,
        lineHeight: height - 2,
   }
 
  
})

export default styles;