import React from "react";
import { Text } from "react-native"
import { fontSizeValue, themes } from "../../utils/themes";
import { fontFamily } from "../../utils/constants";

const AppText = (
    {
        children,
        fontSize,
        fontWeight,
        color,
        style,
        textAlign,
        onPress,
    }: {
        children: any,
        fontSize?: number,
        fontWeight?: string,
        color?: string,
        style?: object,
        textAlign?: string,
        onPress?: any
    }
) => {
    return (
        <Text style={{
            fontSize: fontSize ?? fontSizeValue(11),
            color: color ?? themes.black,
            fontFamily: fontFamily,
            fontWeight: fontWeight,
            textAlign: textAlign ?? "left",
            ...style
        }}
            onPress={onPress}
        >{children}</Text >
    )
}


export default AppText