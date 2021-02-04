import React from 'react';
import Svg, { Path } from "react-native-svg";

function ArrayLeft (props){
    return (
        <Svg 
            viewBox="0 0 1024 1024"
            fill={props.fill} 
            width={props.width}
            height={props.height}
        >
            <Path d="M608.992 148.992L277.984 489.984q-8.992 8.992-8.992 21.504t8.992 22.496l331.008 340.992q8.992 8 20.992 8t20.992-8.992 8.992-20.992-8.992-20.992l-312-320 312-320q8.992-8.992 8.992-20.992t-8.992-20.992-20.992-8.992-20.992 8z"></Path>
        </Svg> 
    )
}

export default ArrayLeft;