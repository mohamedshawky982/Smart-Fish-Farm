import React from "react";
import { Image } from "react-native";

const AppImage = (
    { style,
        source,
        resizeMode,
        ...props
    }: {
        style: object,
        source: any,
        resizeMode?: string
    }
) => {
    return <Image
        style={style}
        source={source}
        {...props}
    />
}

export default AppImage