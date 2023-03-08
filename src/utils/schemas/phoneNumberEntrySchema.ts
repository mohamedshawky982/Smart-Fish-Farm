
import * as yup from 'yup';
import { PHONE_REGULAR_EXP } from './../constants';

const PhoneNumberEntrySchema = {
    initialValues: {
        phone_number: "",
    },
    validationSchema: yup.object().shape({
        phone_number: yup.string().required("من فضلك ادخل رقم هاتف صحيح").matches(PHONE_REGULAR_EXP,"ادخل رقم هاتف صالح"),
    })
}

export default PhoneNumberEntrySchema