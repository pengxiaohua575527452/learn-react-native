import React from "react"
import Svg,{
    Path
} from 'react-native-svg';

function ArrowDown(props){
    return(
        <Svg 
            viewBox="0 0 1024 1024" 
            fill= {props.fill}
            width= {props.width}
            height= {props.height} 
        >
            <Path d="M726.652801 429.305603 297.347199 429.305603 512.193405 638.156258Z"></Path>
        </Svg>
    )
}

export default ArrowDown;
