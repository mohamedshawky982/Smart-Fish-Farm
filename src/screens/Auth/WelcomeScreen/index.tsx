import React from "react";
import { View, Text, Image } from "react-native";
import styles from '../styles';
import { AppButton, AppText } from "../../../components";
import { appName } from "../../../utils/constants";
import { themes } from "../../../utils/themes";
import {WhiteSpace} from "../../../components";
import SCREEN_NAMES from "../../../navigation/screenNames";
const WelcomeScreen = (props: object) => {
    const { navigation } = props
    return (

        <View style={styles.WelcomeContainer}>
            <AppText style={styles.welcomeText} color={themes.black} >مرحبا بك فى مزرعه السمك الذكيه</AppText>
            <WhiteSpace variant={1} />
            <AppButton
                title={"login"}
                onPress={() => navigation.navigate(SCREEN_NAMES.Login)}
            />

        </View>


    )
}


export default WelcomeScreen