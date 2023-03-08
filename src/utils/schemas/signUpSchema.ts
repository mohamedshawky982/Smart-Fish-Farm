
import * as yup from 'yup';
import { PHONE_REGULAR_EXP } from './../constants';

const SignUpSchema = {
    initialValues: {
        phone_number: "",
        password: ""
    },
    validationSchema: yup.object().shape({
        phone_number: yup.string().required("من فضلك ادخل رقم هاتف صحيح").matches(PHONE_REGULAR_EXP, "ادخل رقم هاتف صالح"),
        password: yup.string().required("من فضلك ادخل كلمة مرور صحيحه").min(6, "ادخل كمله مرور مكونه من 6 احرف"),
        confirm_password: yup.string().oneOf([yup.ref("password"),null],"كلمة المرور غير متطابقه").required("من فضلك ادخل كلمة مرور صحيحه")
           
    })
}

export default SignUpSchema