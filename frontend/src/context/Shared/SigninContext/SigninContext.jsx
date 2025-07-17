import React, { createContext, useContext, useState, useEffect } from "react";
import Swal from 'sweetalert2';
import { useForm } from 'react-hook-form';
import { useNavigate } from "react-router-dom";
import { signinService } from "../../../service/auth";

const SigninContext = createContext();

export const SigninContextProvider = ({ children }) => {
  const { register, handleSubmit, reset, formState: { errors } } = useForm();
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [user, setUser] = useState(null);

  const onSubmit = async (eData) => {
    setLoading(true);
    try {
      const response = await signinService.signin(eData);
      Swal.fire({
        title: "Welcome",
        text: "Login successful",
        icon: "success",
      });
      alert("hey")


      const userData = response.data; 
      console.log("resuly: ", userData)
      setUser(userData);
      reset();


      // Redirect based on role:
      if (userData.role === 'admin') {
        navigate('/admin/dashboard');
      } else if (userData.role === 'guest') {
        navigate('/');
      }

    } catch (error) {
      console.error("Full error object:", error);
      console.error("Error response data:", error.response?.data);
      const errMsg = 
        error.response?.data?.message ||
        error.response?.data?.error_message ||
        error.message || 
        "Unexpected error occurred";
      Swal.fire({
        title: "Error",
        text: errMsg,
        icon: "error",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <SigninContext.Provider value={{
      loading,
      onSubmit,
      register,
      handleSubmit,
      errors,
      user,
    }}>
      {children}
    </SigninContext.Provider>
  );
};

export const useSignin = () => useContext(SigninContext);
