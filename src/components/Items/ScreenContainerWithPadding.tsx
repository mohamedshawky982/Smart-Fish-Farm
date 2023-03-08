import React from "react";
import { View } from 'react-native';
import { themes, wp } from "../../utils/themes";

const ScreenContainerWithPadding = ({ children, style }: { children: any, style?: object }) => {
    return (
        <View style={{ paddingHorizontal: wp("3%"), width: "100%", ...style,backgroundColor:themes.white,flex:1 }} >
            {children}
        </View>
    )

}

export default ScreenContainerWithPadding
