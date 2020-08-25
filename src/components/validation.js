import * as Yup from "yup";

// Regular expression for phone numbers
const phoneRegExp = /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

// Validation Schema for Add user page
const validationSchema = Yup.object().shape({
  first_name: Yup.string().min(2, "Too Short").max(20, "Too long").required("Required"),
  last_name: Yup.string().min(2, "Too Short").max(20, "Too long").required("Required"),
  email: Yup.string().email("Invalid email").required("Required"),
  phone: Yup.string().matches(phoneRegExp, "Phone number is not valid"),
  password: Yup.string().required("Required"),
  confirmPassword: Yup.string()
    .oneOf([Yup.ref("password"), null], "Passwords must match")
    .required("Required"),
  privilege: Yup.string().required("Required"),
});

export { validationSchema };
