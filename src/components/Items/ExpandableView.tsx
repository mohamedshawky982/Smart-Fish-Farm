import React, { useState } from "react";
import AppText from "../General/AppText";
import { View, StyleSheet, TouchableOpacity, UIManager, Platform, LayoutAnimation } from "react-native"
import { hp, wp } from "../../utils";
import { themes } from '../../utils/themes';
import Entypo from "react-native-vector-icons/Entypo"
import ExpandableViewChild from './ExpandableViewChild';
const ExpandableView = () => {
    const [isExpanded, setIsExpanded] = useState(false)
    const borderStyle = {
        borderBottomRightRadius: isExpanded ? 0 : hp("1%"), borderBottomLeftRadius: isExpanded ? 0 : hp("1%")
    }
    if (Platform.OS === 'android') {
        if (UIManager.setLayoutAnimationEnabledExperimental) {
            UIManager.setLayoutAnimationEnabledExperimental(true);
        }
    }
    return (
        <>
            <TouchableOpacity
                style={[styles.container, borderStyle]}
                onPress={() => {
                    setIsExpanded(!isExpanded)
                    LayoutAnimation.configureNext(LayoutAnimation.Presets.easeInEaseOut);
                }}
                activeOpacity={1}
            >
                <View style={styles.labelContainer}>
                    <AppText>هذا الشهر</AppText>
                </View>
                <View style={styles.iconContainer}>
                    <Entypo name={isExpanded ? "chevron-small-up" : "chevron-small-down"} size={themes.iconSizeOne + 5} />
                </View>
            </TouchableOpacity>

            {isExpanded && <View style={styles.expandedViewContainer}>
                <ExpandableViewChild />
            </View>}
        </>
    )
}

export default ExpandableView

const styles = StyleSheet.create({

    container: {
        width: "95%",
        alignItems: "center",
        alignSelf: "center",
        backgroundColor: themes.white,
        padding: wp("2%"),
        flexDirection: "row",
        elevation: 2,
        borderRadius: 5
    },
    labelContainer: {
        flex: 8,
        alignItems: "flex-start",
    },
    iconContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    expandedViewContainer: {
        width: "95%",
        height: hp("30%"),
        backgroundColor: themes.white,
        alignSelf: "center",
        borderBottomRightRadius: hp("1%"),
        borderBottomLeftRadius: hp("1%"),
        elevation: 2

    }
})