import React from "react";
import { View, StyleSheet, ScrollView } from "react-native"
import IMAGES from "../../common/images";
import AppImage from "../General/Image";
import { hp } from "../../utils/themes";

const FarmBackgroundImage = ({ children, style }: { children: any, style?: object }) => {
    return (
        <View style={{ flex: 1, ...style }} >
            <AppImage source={IMAGES.fishBackground} style={styles.image} />
            <ScrollView>
                <View style={styles.secondView} >
                    {children}
                </View>
            </ScrollView>
        </View>)
}
export default FarmBackgroundImage

const styles = StyleSheet.create({
    image: {
        width: "100%",
        height: hp("30%")
    },
    secondView: {
        width: "100%",
        height: hp("70%"),
    }
})