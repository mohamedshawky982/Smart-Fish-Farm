import React from "react";
import AppText from "../General/AppText";
import { StyleSheet, TouchableOpacity } from "react-native";
import { hp, themes, wp } from "../../utils";
import ProgressCircle from "./ProgressCircle";
import WhiteSpace from "../General/WhiteSpace";
import { useNavigation } from '@react-navigation/native';
import SCREEN_NAMES from '../../navigation/screenNames';
import { SensorDataCardType } from "../../utils/types";
const SensorDataCard = ({
    style,
    type,
    color,
    sensorName
}: { style?: object, type?: SensorDataCardType, color?: string, sensorName: string }) => {
    const navigation = useNavigation()

    const generateRandomColor = () => {
        let maxVal = 0xFFFFFF; // 16777215
        let randomNumber = Math.random() * maxVal;
        randomNumber = Math.floor(randomNumber);
        randomNumber = randomNumber.toString(16);
        let randColor = randomNumber.padStart(6, 0);
        return `#${randColor.toUpperCase()}`
    }
    return (
        <TouchableOpacity
            style={[styles.container,
            { marginHorizontal: type == "custom" ? wp("1.5%") : wp("1%") }]}
            disabled={type == "custom" ? true : false}
            onPress={() => {
                navigation.navigate(SCREEN_NAMES.SensorDetails)
            }} >
            <ProgressCircle color={color ?? generateRandomColor()} />
            <WhiteSpace variant={0.5} />
            <AppText>{sensorName ?? "sensor 1"}</AppText>
        </TouchableOpacity>
    )
}

export default SensorDataCard

const styles = StyleSheet.create({
    container: {
        backgroundColor: themes.white,
        borderRadius: 10,
        alignItems: "center",
        justifyContent: "center",
        elevation: 2,
        width: wp("45%"),
        height: hp("17%"),
        marginVertical: hp("1%")
    }
})