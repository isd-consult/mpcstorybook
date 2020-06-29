import * as Yup from 'yup'

const messages = {
  email: 'Please enter a valid email address. For example johndoe@domain.com',
  password: 'At least 6 characters',
  confirmEmail: 'Email must match',
  required: 'This field is required',
}

export const SignUpFirstStepSchema = Yup.object().shape({
  email: Yup.string()
    .email(messages.email)
    .required(messages.required),
  confirmEmail: Yup.string()
    .oneOf([Yup.ref('email'), null], messages.confirmEmail)
    .required(messages.required),
})

export const SignUpSchema = Yup.object().shape({
  email: Yup.string()
    .email(messages.email)
    .required(messages.required),
  password: Yup.string()
    .min(6, messages.password)
    .required(messages.required)
})

export const SignInSchema = Yup.object().shape({
  email: Yup.string()
    .email(messages.email)
    .required(messages.required),
  password: Yup.string()
    .min(6, messages.password)
    .required(messages.required),
})

export const ContactUsSchema = Yup.object().shape({
  firstName: Yup.string().required(messages.required),
  lastName: Yup.string().required(messages.required),
  phoneNumber: Yup.string().required(messages.required),
  email: Yup.string()
    .email(messages.email)
    .required(messages.required),
  subject: Yup.string().required(messages.required),
  message: Yup.string(),
})

export const AddressSchema = Yup.object().shape({
  address_nickname: Yup.string().required(messages.required),
  recipient_name: Yup.string().required(messages.required),
  mobile_number: Yup.string().required(messages.required),
  street_address: Yup.string().required(messages.required),
  suburb: Yup.string().required(messages.required),
  city: Yup.string().required(messages.required),
  province: Yup.string().required(messages.required),
})
