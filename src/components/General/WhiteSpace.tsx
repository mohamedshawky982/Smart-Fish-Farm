import React from "react"
import { View } from "react-native"
import { hp } from "../../utils/themes"
const WhiteSpace = ({ variant }: { variant: number }) => {
    return <View style={{ marginVertical: hp(1) * variant }} />
}

export default WhiteSpace