import * as yup from "yup"

const AddMonitoringSchema = {
    initialValues: {
        name: "",
        gramsNumber: 0
    },
    validationSchema: yup.object().shape({
        name: yup.string().required("ادخل اسم  صحيح").min(3, "الاسم يجب ان يتكون من 3 احرف او اكثر").
            max(8, "السام يجب ان بتكون من 8 احرف"),
        gramsNumber: yup.number().required("ادخل رقم الجراماتت صحيح")
    })
}

export default AddMonitoringSchema