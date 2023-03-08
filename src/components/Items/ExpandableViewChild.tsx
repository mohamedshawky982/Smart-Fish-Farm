import React from "react";
import { View, StyleSheet } from "react-native"
import { wp } from "../../utils";
import AppText from "../General/AppText";


const ExpandableViewChild = () => {
    return (
        <View style={styles.container}>
            <AppText>هذا الشهر</AppText>
        </View>
    )
}

export default ExpandableViewChild

const styles = StyleSheet.create({
    container: {
        width: "100%",
        alignItems: "flex-start",
        padding: wp("2%")
    }
})