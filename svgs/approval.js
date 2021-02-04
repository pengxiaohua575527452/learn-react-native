import React from "react"
import Svg,{
    Path
} from 'react-native-svg';

function Approval (props){
    return (
        <Svg 
            viewBox="0 0 1026 1024" 
            fill= {props.fill}
            width= {props.width}
            height= {props.height}
        >
            <Path d="M607.314887 635.882561c-10.094054-3.750445-20.123815-7.30801-30.089283-10.58697-6.322178-2.078818-59.021286-30.367887-21.323958-95.882801l-0.321467 0c65.000566-66.950798 114.656456-174.727866 114.656456-280.811877 0-163.112203-108.462864-248.600914-234.499241-248.600914C309.593862 0 201.709638 85.488711 201.709638 248.600914c0 106.512633 49.441578 214.739755 114.806474 281.519103 25.460163 66.843642-20.188109 91.425129-29.63923 95.175574C50.641721 719.121005 0 845.971764 0 845.971764l0 178.028258 400.740386 0 68.322389-249.286709L607.314887 635.882561 607.314887 635.882561zM859.923419 676.944574l-38.554573-38.640297 0.214311-0.235742-51.627552-51.563258L535.113466 819.247166c-3.214667 2.593165-5.957849 5.893556-7.200854 10.158348l-54.563614 194.594508 199.05218-50.148805c3.986187-1.178711 7.072267-3.643289 9.601139-6.622214l235.399348-233.32053-57.242503-57.199641L859.923419 676.944574 859.923419 676.944574zM537.020835 964.164353c0 0 23.445638-93.311067 27.067496-109.941611 49.848769 21.388251 83.474186 83.452755 83.474186 83.452755L537.020835 964.164353zM791.279563 563.059638l147.46749 147.424628 33.732572-31.632323-147.488921-147.446059L791.279563 563.059638zM1011.248509 560.937958l-70.679811-70.636949c-19.502313-19.502313-50.963187-19.695193-70.251189-0.38576l-21.666855 21.881167 141.273898 141.338192 21.709718-21.94546C1030.922271 611.944007 1030.750822 580.461702 1011.248509 560.937958L1011.248509 560.937958zM1011.248509 560.937958"></Path>
        </Svg>
    )
}

export default Approval