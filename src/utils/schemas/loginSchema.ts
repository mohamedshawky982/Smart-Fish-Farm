
import * as yup from 'yup';
import { PHONE_REGULAR_EXP } from './../constants';

const LoginSchema = {
    initialValues: {
        phone_number: "",
        password: ""
    },
    validationSchema: yup.object().shape({
        phone_number: yup.string().required("من فضلك ادخل رقم هاتف صحيح").matches(PHONE_REGULAR_EXP,"ادخل رقم هاتف صالح"),
        password: yup.string().required("من فضلك ادخل كلمة مرور صحيحه").min(6,"ادخل كمله مرور مكونه من 6 احرف")
    })
}

export default LoginSchema