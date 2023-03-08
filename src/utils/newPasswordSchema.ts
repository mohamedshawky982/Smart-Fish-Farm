
import * as yup from 'yup';

const NewPasswordSchema = {
    initialValues: {
        password: "",
        newPassword: ""
    },
    validationSchema: yup.object().shape({
        newPassword: yup.string().required("من فضلك ادخل كلمة مرور صحيحه").min(6, "ادخل كمله مرور مكونه من 6 احرف"),
        confirmNewPassword: yup.string().oneOf([yup.ref("newPassword"), null], "كلمة المرور غير متطابقة")
    })
}

export default NewPasswordSchema