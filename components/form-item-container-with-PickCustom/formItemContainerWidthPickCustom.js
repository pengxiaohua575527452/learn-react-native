import React from "react";
import styles from "./formItemContainerWidthPickCustomStyle";
import FormItemContainer from "@components/form-item-container/formItemContainer"
import PickCustom from "@components/picker-custom/pickerCustom" 
/**
 * 使用说明
 * @param {} props 
 * 
 * props.label 左侧标题
 * props.required 是否必选
 * props.title 选择框中间的标题
 * props.value 当前的值 是一个数组 [第一列的值,....]
 * props.menu 备选范围 是一个数组 [[第一列的备选范围],[]]
 * props.updateValue 当点击确定触发的方法会把 选中的value 传递过来 
 */
function FormItemContainerWidthPickCustom(props){
    return (
        <FormItemContainer
            label={props.label}
            required={props.required}
        >
            <PickCustom 
                title={props.title}
                value={props.value}
                menu={props.menu}
                updateValue={props.updateValue}
            />
        </FormItemContainer>
    )
}

export default FormItemContainerWidthPickCustom