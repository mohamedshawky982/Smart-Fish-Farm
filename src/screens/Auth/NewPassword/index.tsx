import React from "react";
import { View } from "react-native";
import { AppButton, AppTextInput, WhiteSpace } from "../../../components";
import styles from "../styles";
import { ScreenContainerWithPadding, AppHeader } from "../../../components";
import { useFormik } from 'formik';
import NewPasswordSchema from './../../../utils/newPasswordSchema';

const NewPassword = (props: object) => {
    const navigation: object = props?.navigation
    const { errors, values, handleChange, handleSubmit } =
        useFormik({ ...NewPasswordSchema, onSubmit: (values: object) => handleOnSubmit(values) })
    const handleOnSubmit = (formValues: object) => {
        console.log(formValues)
    }
    return (
        <View style={styles.mainContainer} >
            <AppHeader title="كلمة المرور الجديده" navigation={navigation} />
            <ScreenContainerWithPadding>
                <WhiteSpace variant={5} />
                <AppTextInput
                    label="كلمه المرور الجديده"
                    value={values.newPassword}
                    onChangeText={handleChange("newPassword")}
                    error={errors.newPassword}
                    isPassword
                />
                <WhiteSpace variant={2} />
                <AppTextInput
                    label="تأكيد كلمه المرور الجديد"
                    value={values.confirmNewPassword}
                    onChangeText={handleChange("confirmNewPassword")}
                    error={errors.confirmNewPassword}
                    isPassword

                />
                <WhiteSpace variant={3} />
                <AppButton
                    title="تأكيد"
                    onPress={handleSubmit}
                />
            </ScreenContainerWithPadding>

        </View>
    )
}


export default NewPassword