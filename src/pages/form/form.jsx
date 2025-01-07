import React from 'react';
import * as yup from 'yup';
import './form.css';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import { authantication ,GoogleAuthProvide } from '../../config/firebase';
import { signInWithPopup } from 'firebase/auth'; 
import { Appcontex } from '../../App';
import { useContext } from "react";
import { useNavigate } from "react-router-dom";
import PATHS from '../../constants/pathConstants';
function Form() {
      const {setname,name} = useContext(Appcontex)
       const  navigate=useNavigate();
   const  signInWithgoogle = (async ()=>{
     const reselt =   await signInWithPopup(authantication ,GoogleAuthProvide)
     setname(reselt.user.reloadUserInfo.displayName)
     navigate(PATHS.API);
   })


    const schema = yup.object().shape({
        // name: yup.string().required('Name is required'),
        email: yup
            .string()
            .email('Must be a valid email')
            .required('Email is required'),
        // age: yup
        //     .number()
        //     .positive('Age must be positive')
        //     .integer('Age must be an integer')
        //     .min(18, 'You must be at least 18')
        //     .required('Age is required'),
        password: yup
            .string()
            .min(3, 'Password must be at least 3 characters')
            .max(10, 'Password cannot exceed 10 characters')
            .required('Password is required'),
        // re_password: yup
        //     .string()
        //     .oneOf([yup.ref('password'), null], 'Passwords must match')
        //     .required('Re-enter password is required'),
    });

    // React Hook Form
    const { register, handleSubmit, formState: { errors } } = useForm({
        resolver: yupResolver(schema),
    });

    // Form submission handler
    const click = (data) => {
        console.log(data);

    };

    return (
        <>
            <div className="formcontener">
                <form className="form" onSubmit={handleSubmit(click)}>
                    <h4>Sign Up</h4>
                    {/* <input
                        type="text"
                        placeholder= {errors.name ? errors.name.message : "Name" }
                        {...register('name')}
                    />
                    */}

                    <input
                        type="email"
                        placeholder= {errors.email ? errors.email.message :"Email"}
                        {...register('email')}
                    />
                  
{/* 
                    <input
                        type="number"
                        placeholder={errors.age ? errors.age.message :"Age"}
                        {...register('age')}
                    />
                    */}

                    <input
                        type="password"
                        placeholder={errors.password ? errors.password.message :"Password"}
                        {...register('password')}
                    />
                   

                    {/* <input
                        type="password"
                        placeholder={errors.re_password ? errors.re_password.message :"Re-enter Password"}
                        {...register('re_password')}
                    /> */}
                    


                    <button type="submit">Login</button>
                   

                </form>
                <p>Sing in with google</p>
                <button onClick={signInWithgoogle}>singin google</button>
            </div>
        </>
    );
}

export default Form;
