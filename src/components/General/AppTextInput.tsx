import React, { useState } from "react";
import { TextInput, View, StyleSheet, TouchableOpacity } from "react-native"
import { fontFamily, fontSizeValue, hp, themes } from "../../utils";
import Feather from "react-native-vector-icons/Feather"
import AppText from "./AppText";
import WhiteSpace from "./WhiteSpace";

const AppTextInput = ({
    style,
    label,
    isPassword = false,
    keyboardType,
    value,
    onChangeText,
    error,
}:
    {
        style?: object,
        label: string,
        type?: string,
        isPassword?: boolean,
        keyboardType?: string,
        value: string,
        onChangeText: any,
        error: any
    }) => {
    const [showPassword, setShowPassword] = useState(false)
    return (
        <>
            <View style={styles.inputTitleContainer}>
                <AppText fontSize={themes.h5.size}>{label}</AppText>
            </View>
            <WhiteSpace variant={0.5} />
            <View style={[styles.container, { borderColor: error ? themes.red : themes.grey }]}>
                <View style={styles.inputContainer}>
                    <TextInput
                        style={[styles.input, { textAlign: "right" }]}
                        secureTextEntry={isPassword ? showPassword : false}
                        keyboardType={keyboardType ?? "default"}
                        value={value}
                        onChangeText={onChangeText}
                    />
                    <WhiteSpace variant={1} />
                    {error && <AppText textAlign="center" color={themes.red}>{error}</AppText>}
                </View>
                {isPassword && <View style={styles.eye}>
                    <TouchableOpacity onPress={() => setShowPassword(!showPassword)}>
                        <Feather name={showPassword ? "eye" : "eye-off"} size={20} color={themes.black} />
                    </TouchableOpacity>
                </View>}
            </View>

        </>
    )
}

export default AppTextInput

const styles = StyleSheet.create({
    container: {
        width: "100%",
        height: hp(7),
        borderRadius: 10,
        paddingHorizontal: 5,
        flexDirection: "row",
        borderColor: themes.grey,
        borderWidth: 1

    },
    inputContainer: {
        flex: 5,
        borderRadius: 10,
    },
    eye: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center",
    },
    input: {
        fontFamily: fontFamily
    },
    inputTitleContainer: {
        width: "100%"
    }
})