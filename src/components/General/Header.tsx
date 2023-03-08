import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { hp, themes } from "../../utils";
import AntDesign from "react-native-vector-icons/AntDesign"
import AppText from "./AppText";
const AppHeader = ({ title,
    rightIcon, onRightIconPress, navigation }:
    { title?: string, rightIcon?: any, onRightIconPress?: any, navigation?: any }) => {
    return (
        <View style={styles.container}>
            <View style={styles.backIconContainer}>
                {navigation && <TouchableOpacity onPress={() => navigation.goBack()}>
                    <AntDesign name="right" size={themes.iconSizeOne} color={themes.black} />
                </TouchableOpacity>}
            </View>
            <View style={styles.headerContainer}>
                <AppText style={styles.txt} >{title}</AppText>
            </View>
            <View style={styles.rightIconContainer}>
                <TouchableOpacity onPress={onRightIconPress} >
                    {rightIcon}
                </TouchableOpacity>
            </View>
        </View>
    )
}

export default AppHeader

const styles = StyleSheet.create({
    container: {
        width: "100%",
        backgroundColor: themes.white,
        flexDirection: "row",
        alignItems: "center",
        paddingVertical: hp(1.5),
        borderBottomWidth: 0.5,
        borderColor: themes.grey
    },
    backIconContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    headerContainer: {
        flex: 10,
        alignItems: "center",
        justifyContent: "center"
    },
    txt: {
        color: themes.black,
        fontSize: themes.h3.size
    },
    rightIconContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})