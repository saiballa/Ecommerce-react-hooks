import * as yup from "yup";

export const RegisterFormSchema = yup.object({
    name:yup.string().trim().required("Must have to enter your name to register!").min(3,"Name must have at least 3 characters").matches(/^[a-zA-Z\s]+$/, "name must have letters and space only"),
    email:yup.string().email("must be a email").required("Must have to enter your email to register!"),
    password:yup.string().required("you have to enter your password to have a secure registratiion!").min(6,"at least password should have 6 characters"),
    phone:yup.string().required("Must have to enter your phone number to register!").length(10,"must have exact 10 digits"),
    answer:yup.string().required("Must have a answer"),
});

export const LoginFormSchema = yup.object({
    email:yup.string().email("must be a email").required("Must have to enter your email to register!"),
    password:yup.string().required("you have to enter your password to have a secure registratiion!").min(5,"at least password should have 6 characters"),
});

export type LoginFormType = yup.InferType<typeof LoginFormSchema>

export type RegisterFormType = yup.InferType<typeof RegisterFormSchema>;