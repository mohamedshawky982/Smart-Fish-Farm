import React, { useEffect, useRef, useState } from "react";
import { View, Modal, StyleSheet, TouchableOpacity, Animated, Dimensions } from "react-native";
import { themes } from "../../utils";
import AppText from "../General/AppText";
import AntDesign from 'react-native-vector-icons/AntDesign';
const { height, width } = Dimensions.get("window")
const BaseModal = ({
    visible,
    onRequestClose,
    children,
    title
}: {
    visible: boolean,
    onRequestClose: () => void,
    children: any,
    title: string
}) => {
    const [viewHeight, setViewHeight] = useState(0)

    useEffect(() => {
        if (visible)
            handleSlideInAnimated()
        else
            handleSlideOutAnimated()
    }, [visible])

    const heightToHideView = height - viewHeight

    const translateYRef = useRef(new Animated.Value(heightToHideView)).current

    const handleSlideInAnimated = () => {
        Animated.timing(translateYRef, {
            duration: 200,
            toValue: 0,
            useNativeDriver: true
        }).start()
    }
    const handleSlideOutAnimated = () => {
        Animated.timing(translateYRef, {
            duration: 200,
            toValue: heightToHideView,
            useNativeDriver: true
        }).start(() => onRequestClose())
    }
    return (
        <Modal
            transparent
            visible={visible}
            onRequestClose={handleSlideOutAnimated}>

            <View style={styles.container} >
                <TouchableOpacity
                    activeOpacity={1}
                    style={styles.emptySpaceButton}
                    onPress={handleSlideOutAnimated} />
                <Animated.View
                    style={[styles.contentContainer, { transform: [{ translateY: translateYRef }] }]}
                    onLayout={(event) => {
                        const { height } = event.nativeEvent.layout
                        setViewHeight(height)
                    }}>
                    <View style={styles.modalHeaderContainer}>
                        <View style={styles.headerContainer}>
                            <AppText color={themes.black} fontSize={themes.h3.size} >{title}</AppText>
                        </View>
                        <View style={styles.iconContainer}>
                            <TouchableOpacity onPress={handleSlideOutAnimated}>
                                <AntDesign name="close" size={themes.iconSizeOne + 2} color={themes.black} />
                            </TouchableOpacity>
                        </View>
                    </View>
                    {children}
                </Animated.View>
            </View>

        </Modal>
    )
}

export default BaseModal

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "flex-end",
        backgroundColor: 'rgba(0,0,0,0.2)',
    },
    modalHeaderContainer: {
        width: "100%",
        alignItems: "center",
        flexDirection: "row"
    },
    contentContainer: {
        borderRadius: 15,
        backgroundColor: themes.white,
        padding: 10
    },
    headerContainer: {
        flex: 5,
        alignItems: "flex-start",
    },
    iconContainer: {
        flex: 1,
        alignItems: "center",
        justifyContent: "center"
    },
    emptySpaceButton: {
        flex: 5,
        backgroundColor: 'transparent',
    }
})