import  { React, createContext, useContext, useState } from "react";
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { signupService } from "../../../service/auth";
import { useNavigate } from "react-router-dom";

const SignupContext = createContext();
export const SignupContextProvider = ({children}) => {
    const navigate = useNavigate();
    const { register, handleSubmit, watch,reset , formState: { errors } } = useForm();
    const [loading, setLoading] = useState(false);
    
    const onSubmit = async (eData) => {
        setLoading(true);
        try {
            const response = await signupService.signup(eData); 

            if (response?.message) {
                Swal.fire({
                    title: "Success",
                    text: response?.message,
                    icon: "success",
                    confirmButtonText: "Continue",
                });
            }
            navigate("/signin");
            reset();
        } catch (error) {
                const errMsg = error.response?.data?.error_message ||  error.response?.data || error;
                Swal.fire({
                    title: "Error Message",
                    text: errMsg,
                    icon: "error",
                    confirmButtonText: "OK",
                });

        } finally {
            setLoading(false);
        }
    };

    const values = {
        loading,
        onSubmit,
        register,
        handleSubmit,
        watch,
        errors
    }
    return(
        <SignupContext.Provider value={values}>
            {children}
        </SignupContext.Provider>
    )
}
export const useSignup = () => useContext(SignupContext);
