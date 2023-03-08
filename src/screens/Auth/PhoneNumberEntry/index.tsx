import React from "react";
import { View, } from "react-native";
import {ScreenContainerWithPadding,AppHeader} from './../../../components';
import styles from "../styles";
import { AppButton, AppText, AppTextInput, WhiteSpace } from "../../../components";
import { useFormik } from 'formik';
import PhoneNumberEntrySchema from "../../../utils/schemas/phoneNumberEntrySchema";
import SCREEN_NAMES from "../../../navigation/screenNames";
const PhoneNumberEntry = (props) => {
    const { values, errors, handleChange, handleSubmit } = useFormik({
        ...PhoneNumberEntrySchema,
        onSubmit: (formValues) => { handlePressSubmit(formValues) }
    })
    const handlePressSubmit = (formValues) => {
        console.log(formValues)
        props.navigation.navigate(SCREEN_NAMES.NewPassword)
    }
    return (
        <>
            <AppHeader
                navigation={props.navigation}
                title="ادخل رقم الهاتف"
            />
            <ScreenContainerWithPadding style={styles.mainContainer} >
            <WhiteSpace variant={5} />
                <AppTextInput
                    label="رقم الهاتف"
                    keyboardType="phone-pad"
                    value={values.phone_number}
                    onChangeText={handleChange("phone_number")}
                    error={errors.phone_number}
                />
                <WhiteSpace variant={4} />
                <AppButton
                    title="تأكيد"
                    onPress={handleSubmit}
                />

            </ScreenContainerWithPadding>
        </>
    )
}


export default PhoneNumberEntry