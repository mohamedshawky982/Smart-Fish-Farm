import React from "react";
import { View } from "react-native";
import { AppButton, AppText, AppTextInput, FarmBackgroundImage, WhiteSpace } from "../../../components";
import { ScreenContainerWithPadding } from "../../../components";
import { useFormik } from "formik";
import { fontSizeValue, themes } from "../../../utils";
import styles from "../styles";
import SCREEN_NAMES from "../../../navigation/screenNames";
import SignUpSchema from "../../../utils/schemas/signUpSchema";
const SignUP = (props) => {
    const { values, handleChange, errors, handleSubmit } = useFormik({
        ...SignUpSchema,
        onSubmit: (itemValues) => handlePressSubmit(itemValues)
    })
    const { navigation } = props

    const handlePressSubmit = (formValues) => {
        console.log(formValues)
    }
    return (

        <FarmBackgroundImage>
            <View style={styles.container}>
                <ScreenContainerWithPadding>
                    <WhiteSpace variant={1} />
                    <AppTextInput
                        label="رقم الهاتف"
                        keyboardType="phone-pad"
                        value={values.phone_number}
                        onChangeText={handleChange("phone_number")}
                        error={errors.phone_number}
                    />
                    <WhiteSpace variant={1.5} />
                    <AppTextInput
                        label="كلمةالمرور"
                        isPassword
                        value={values.password}
                        onChangeText={handleChange("password")}
                        error={errors.password}
                    />
                    <WhiteSpace variant={2} />

                    <AppTextInput
                        label="تأكيد كلمة المرور"
                        isPassword
                        value={values.confirm_password}
                        onChangeText={handleChange("confirm_password")}
                        error={errors.confirm_password}
                    />
                    <WhiteSpace variant={3} />

                    <AppButton
                        title="انشاء حساب"
                        onPress={handleSubmit}
                    />
                </ScreenContainerWithPadding>

            </View>
        </FarmBackgroundImage>


    )
}


export default SignUP