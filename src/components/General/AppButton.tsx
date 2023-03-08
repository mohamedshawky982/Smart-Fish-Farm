import React from "react";
import { TouchableOpacity, StyleSheet, ActivityIndicator } from "react-native"
import AppText from "./AppText";
import { hp, themes } from "../../utils/themes";

const AppButton = ({ title,
    containerStyle,
    fontsize,
    fontColor,
    onPress,
    loading
}: {
    title: string,
    containerStyle?: object,
    fontsize?: number,
    fontColor?: string,
    onPress: any,
    loading?: boolean

}) => {
    return (
        <TouchableOpacity style={[styles.container, containerStyle]}
            onPress={onPress}
        >
            {
                loading ?
                    <ActivityIndicator size={20} color={themes.white} />
                    :
                    <AppText fontSize={fontsize} color={fontColor??themes.white} >{title}</AppText>
            }

        </TouchableOpacity>
    )
}

export default AppButton

const styles = StyleSheet.create({
    container: {
        width: "90%",
        padding: hp(2),
        backgroundColor: themes.primaryColor,
        alignItems: "center",
        justifyContent: "center",
        borderRadius: 10,
        alignSelf:"center"
    }
})