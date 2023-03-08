import React from "react";
import { View, ScrollView } from "react-native"
import { AppTextInput, AppText, FarmBackgroundImage, WhiteSpace, AppButton } from "../../../components"
import {ScreenContainerWithPadding} from "../../../components";
import { fontSizeValue } from "../../../utils";
import { themes } from './../../../utils/themes';
import { useFormik } from "formik";
import LoginSchema from '../../../utils/schemas/loginSchema';
import styles from './../styles';
import SCREEN_NAMES from "../../../navigation/screenNames";
const Login = (props: object) => {
    const { errors, values, handleSubmit, handleChange } = useFormik({
        ...LoginSchema,
        onSubmit: (values) => { console.log(values) }
    })
    const { navigation } = props
    return (
        <FarmBackgroundImage>
            <View style={styles.container}>
                <ScreenContainerWithPadding>
                    <ScrollView>
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
                        <AppText
                            fontSize={fontSizeValue(12)}
                            onPress={() => navigation.navigate(SCREEN_NAMES.PhoneNumberEntry)}
                        >نسيت كلمة المرور؟</AppText>
                        <WhiteSpace variant={1.5} />
                        <AppButton
                            title="تسجيل الدخول"
                            onPress={handleSubmit}
                        />
                        <WhiteSpace variant={0.5} />
                        <AppText
                            fontSize={fontSizeValue(10)}
                            textAlign="center"
                        >ليس لديك حساب ؟
                            <AppText color={themes.primaryColor}
                                fontSize={fontSizeValue(10)}
                                onPress={() => navigation.navigate(SCREEN_NAMES.SignUp)}

                            >انشاء حساب جديد</AppText>
                        </AppText>
                    </ScrollView>
                </ScreenContainerWithPadding>
            </View>
        </FarmBackgroundImage>

    )
}


export default Login