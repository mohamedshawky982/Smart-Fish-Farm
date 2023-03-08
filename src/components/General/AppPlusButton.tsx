import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native";
import { hp, themes, wp } from "../../utils";
import AntDesign from "react-native-vector-icons/AntDesign"
const AppPlusButton = ({ onPress }: { onPress: () => void }) => {
    return (

        <TouchableOpacity
            onPress={onPress}
            style={styles.container}
        >
            <AntDesign name="plus" size={themes.iconSizeOne} color={themes.white} />
        </TouchableOpacity>
    )
}

export default AppPlusButton

const styles = StyleSheet.create({
    container: {
        width: wp(12),
        height: wp(12),
        borderRadius: wp(2),
        backgroundColor: themes.primaryColor,
        alignItems: "center",
        justifyContent: "center",
        position: "absolute",
        bottom: hp(5),
        left: wp(8),
        elevation: 3
    }
})