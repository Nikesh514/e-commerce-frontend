import * as yup from 'yup'

export const loginSchema = yup.object({
    email: yup.string().required('Email is required').email('Invalid email format'),
    password:yup.string().required('Passwoed is requied')
})


export const registerSchema = yup.object({
  first_name: yup.string().required('First Name is required'),
  last_name: yup.string().required('Last Name is required'),
  email: yup.string().required('Email is required').email('Invalid email format'),
  password: yup.string().required('Password is required').min(6, 'Password must be at least 6 characters'),
  confirm_password: yup.string()
    .required('Confirm password is required')
    .oneOf([yup.ref('password')], 'Passwords must match'),
  phone: yup.string().optional().test(
    'is-valid-phone',
    'Invalid phone number',
    (value) => {
      if (!value) return true;
      return /^((98|97)\d{8})$/.test(value);
    }
  )
});
