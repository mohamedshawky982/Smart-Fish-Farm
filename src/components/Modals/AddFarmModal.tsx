import React from "react";
import { View } from "react-native";
import BaseModal from "./BaseModal";
import WhiteSpace from "../General/WhiteSpace";
import AppTextInput from "../General/AppTextInput";
import { useFormik } from 'formik';
import AddFarmSchema from "../../utils/schemas/addFarmSchema";
import AppButton from "../General/AppButton";

const AddFarmModal = ({
    visible,
    onRequestClose
}: { visible: boolean, onRequestClose: () => void }) => {
    const { values, errors, handleChange, handleSubmit } = useFormik({
        ...AddFarmSchema,
        onSubmit: (formValue) => handlePress(formValue)
    })

    const handlePress = (values: object) => {
        console.log(values)
    }
    return (
        <BaseModal
            title="اضافه مزرعه جديده"
            visible={visible}
            onRequestClose={onRequestClose}
        >
            <WhiteSpace variant={1} />
            <AppTextInput
                label="اسم المزرعه"
                value={values.farmName}
                onChangeText={handleChange("farmName")}
                error={errors.farmName}
            />
            <WhiteSpace variant={3} />
            <AppButton
                title="تأكيد"
                onPress={handleSubmit}
            />
        </BaseModal>
    )
}

export default AddFarmModal