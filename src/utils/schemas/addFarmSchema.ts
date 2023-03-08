import * as yup from "yup"

const AddFarmSchema={
    initialValues:{
        farmName:""
    },
    validationSchema:yup.object().shape({
        farmName:yup.string().required("ادخل اسم مزرعه صحيح").min(3,"اسم المزرعه يجب ان يتكون من 3 احرف او اكثر")
        })
}

export default AddFarmSchema