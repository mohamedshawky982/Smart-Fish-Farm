import React from "react";
import { View, StyleSheet, TouchableOpacity } from "react-native"
import { hp, themes, wp } from "../../utils";
import AppText from "../General/AppText";
import { useNavigation } from "@react-navigation/native"
import Entypo from "react-native-vector-icons/Entypo"
import SCREEN_NAMES from "../../navigation/screenNames";
import { ListItemComponentType } from "../../utils/types";


const ListItem = ({ item, onPress, componentType }:
    { item: any, onPress?: () => void, componentType: ListItemComponentType }) => {
    const { name } = item || {}
    const navigation = useNavigation();
    return (
        <TouchableOpacity style={styles.container}
            disabled={
                componentType == "monitorWeightOrFood" || componentType == "showSensorNumber"
                    ? true : false}
            onPress={() => {
                if (onPress)
                    onPress()
                else
                    navigation.navigate(SCREEN_NAMES.TanksList)
            }}
        >
            <View style={[styles.labelContainer, { flex: componentType ? 5 : 10 }]}>
                <AppText fontSize={themes.h4.size} >{name}</AppText>
            </View>
            <View style={styles.iconContainer}>
                {
                    componentType == "monitorWeightOrFood" ?
                        <AppText color={themes.primaryColor} >{item?.weight} جم</AppText> :
                        componentType == "showSensorNumber" ?
                            <AppText color={themes.primaryColor} >{item?.sensorData} قراءه</AppText>
                            :
                            <Entypo name="chevron-left"
                                size={themes.iconSizeOne}
                                color={themes.primaryColor} />
                }

            </View>

        </TouchableOpacity>
    )
}

export default ListItem

const styles = StyleSheet.create({
    container: {
        width: wp("93%"),
        alignSelf: "center",
        flexDirection: "row",
        alignItems: "center",
        elevation: 2,
        borderRadius: 10,
        backgroundColor: themes.white,
        padding: hp(2.5),
        marginVertical: hp(0.8)
    },
    labelContainer: {
        flex: 10,
        alignItems: "flex-start",
    },
    iconContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    }
})