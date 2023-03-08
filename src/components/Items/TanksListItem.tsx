import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { hp, themes, wp } from "../../utils";
import AppText from "../General/AppText";
import SensorDataCard from "./SensorDataCard";
import WhiteSpace from "../General/WhiteSpace";
import { useNavigation } from '@react-navigation/native';
import SCREEN_NAMES from "../../navigation/screenNames";
import AppImage from "../General/Image";
import IMAGES from "../../common/images";
import ProgressCircle from "./ProgressCircle";

const TanksListItem = ({ item, index }: { item: object, index: number }) => {
    const { name, sensors } = item || {}
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
        <TouchableOpacity style={styles.container}
            onPress={() => navigation.navigate(SCREEN_NAMES.TankData)}
            activeOpacity={1}
        >
            {/* first row */}
            <View style={styles.row}>
                <View style={{
                    backgroundColor: themes.primaryColor,
                    alignSelf: "flex-start",
                    alignItems: "center",
                    justifyContent: "center",
                    padding: hp("1.3%"),
                    borderRadius: hp("1%")
                }}>
                    <AppText color={themes.white}>{index + 1}</AppText>
                </View>
                <WhiteSpace variant={1} />
                <View style={styles.tankDataContainer}>
                    <AppImage source={IMAGES.tank} style={{ width: wp(22), height: wp(22) }} />
                    <AppText fontSize={themes.h4.size} fontWeight={themes.h4.fonWeight} >الخزان الاول</AppText>
                </View>

            </View>

            {/* second row  */}
            <View style={styles.row}>
                <View style={styles.circlesRow} >
                    <ProgressCircle color={generateRandomColor()} title="Water"  />
                    <ProgressCircle color={generateRandomColor()}  title="PH"/>
                </View>
                <View style={styles.alignSelfCenter}>
                    <ProgressCircle color={generateRandomColor()} title="Oxygen" />
                </View>
            </View>
        </TouchableOpacity>
    )
}

export default TanksListItem
const styles = StyleSheet.create({
    container: {
        width: "100%",
        borderRadius: hp("1%"),
        backgroundColor: themes.white,
        padding: wp("3%"),
        borderWidth: 1,
        borderColor: "#D3D3D3",
        flexDirection: "row",
        marginVertical: hp("1%")
    },
    row: {
        flex: 1,
    },
    circlesRow: {
        justifyContent: "space-between",
        flexDirection: "row",
        alignItems: "center"
    },
    tankDataContainer: {
        flexDirection: "row",
        alignItems: "center",
        justifyContent: "center"

    },
    alignSelfCenter: {
        alignSelf: "center"
    }

})