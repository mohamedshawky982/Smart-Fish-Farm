import React from "react";
import { View } from "react-native";
import BaseModal from "./BaseModal";
import WhiteSpace from "../General/WhiteSpace";
import AppTextInput from "../General/AppTextInput";
import { useFormik } from 'formik';
import AppButton from "../General/AppButton";
import AddMonitoringSchema from "../../utils/schemas/addMonitoringSchema";

const AddMonitoringModal = ({
    visible,
    onRequestClose,
    screenTitle
}: {
    visible: boolean, onRequestClose: () => void,
    screenTitle: string
}) => {
    const { values, errors, handleChange, handleSubmit } = useFormik({
        ...AddMonitoringSchema,
        onSubmit: (formValue) => handlePress(formValue)
    })

    const handlePress = (values: object) => {
        console.log(values)
    }
    return (
        <BaseModal
            title={`اضافة ${screenTitle}`}
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <WhiteSpace variant={1} />
            <AppTextInput
                label="ادخل اليوم"
                value={values.name}
                onChangeText={handleChange("name")}
                error={errors.name}
            />
            <WhiteSpace variant={1} />
            <AppTextInput
                label="ادخل الوزن بالجرامات"
                value={`${values.gramsNumber}`}
                onChangeText={handleChange("gramsNumber")}
                error={errors.gramsNumber}
            />
            <WhiteSpace variant={3} />
            <AppButton
                title="تأكيد"
                onPress={handleSubmit}
            />
        </BaseModal>
    )
}

export default AddMonitoringModal