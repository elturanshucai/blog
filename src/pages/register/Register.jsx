import React, { useEffect } from 'react'
import MainLayout from '../../components/MainLayout'
import { Link, useNavigate } from 'react-router-dom';
import { useForm } from 'react-hook-form';
import { useMutation } from '@tanstack/react-query';
import { signup } from '../../services/index/users';
import toast from 'react-hot-toast';
import { useDispatch, useSelector } from 'react-redux';
import { userActions } from '../../store/reducers/userReducers';

export default function Register() {
    const dispatch = useDispatch()
    const userState = useSelector(state => state.user)
    const navigate = useNavigate()

    const { mutate, isPending } = useMutation({
        mutationFn: ({ name, email, password }) => {
            return signup({ name, email, password })
        },
        onSuccess: (data) => {
            dispatch(userActions.setUserInfo(data))
            localStorage.setItem('account', JSON.stringify(data))
            toast.success("User registiration successfully !")
        },
        onError: (error) => {
            toast.error(error.message)
        }
    })

    useEffect(()=>{
        if(userState.userInfo){
            navigate("/")
        }
    }, [userState.userInfo])

    const { register, handleSubmit, formState: { errors, isValid }, watch } = useForm({
        defaultValues: {
            name: "",
            email: "",
            password: "",
            confirmPassword: ""
        },
        mode: "onChange"
    })

    const submitHandler = (data) => {
        const { name, email, password } = data;
        mutate({ name, email, password })
    }
    return (
        <MainLayout>
            <section className='container mx-auto px-5 py-10'>
                <div className='w-full max-w-sm mx-auto'>
                    <h1 className='font-roboto text-2xl font-bold text-center text-dark-hard mb-8'>Sign Up</h1>
                    <form onSubmit={handleSubmit(submitHandler)}>
                        <div className='flex flex-col mb-6 w-full'>
                            <label htmlFor="name" className='text-[#5a7184] font-semibold block'>Name</label>
                            <input
                                id="name"
                                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.name ? "border-red-500" : "border-[#c3cad9]"}`}
                                placeholder='Enter name'
                                {...register("name", {
                                    minLength: {
                                        value: 2,
                                        message: "Name length must be at least 2 characters"
                                    },
                                    required: {
                                        value: true,
                                        message: "Name is required"
                                    }
                                })}
                            />
                            {errors.name?.message && (
                                <p className='text-red-500 text-xs mt-1'>{errors.name?.message}</p>
                            )}
                        </div>
                        <div className='flex flex-col mb-6 w-full'>
                            <label htmlFor="email" className='text-[#5a7184] font-semibold block'>Email</label>
                            <input
                                id="email"
                                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.email ? "border-red-500" : "border-[#c3cad9]"}`}
                                placeholder='Enter email'
                                type='email'
                                {...register("email", {
                                    pattern: {
                                        value: /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/,
                                        message: "Enter a valid email"
                                    },
                                    required: {
                                        value: true,
                                        message: "Email is required"
                                    }
                                })}
                            />
                            {errors.email?.message && (
                                <p className='text-red-500 text-xs mt-1'>{errors.email?.message}</p>
                            )}
                        </div>
                        <div className='flex flex-col mb-6 w-full'>
                            <label htmlFor="password" className='text-[#5a7184] font-semibold block'>Password</label>
                            <input
                                id="password"
                                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.password ? "border-red-500" : "border-[#c3cad9]"}`}
                                placeholder='Enter password'
                                type='password'
                                {...register("password", {
                                    minLength: {
                                        value: 6,
                                        message: "Password length must be at least 6 characters"
                                    },
                                    required: {
                                        value: true,
                                        message: "Password is required"
                                    }
                                })}
                            />
                            {errors.password?.message && (
                                <p className='text-red-500 text-xs mt-1'>{errors.password?.message}</p>
                            )}
                        </div>
                        <div className='flex flex-col mb-6 w-full'>
                            <label htmlFor="confirmPassword" className='text-[#5a7184] font-semibold block'>Confirm Password</label>
                            <input
                                id="confirmPassword"
                                className={`placeholder:text-[#959ead] text-dark-hard mt-3 rounded-lg px-5 py-4 font-semibold block outline-none border ${errors.confirmPassword ? "border-red-500" : "border-[#c3cad9]"}`}
                                placeholder='Enter confirm password'
                                type='password'
                                {...register("confirmPassword", {
                                    required: {
                                        value: true,
                                        message: "Confirm Password is required"
                                    },
                                    validate: (value) => {
                                        if (value !== watch("password")) {
                                            return "Passwords do not match"
                                        }
                                    }
                                })}
                            />
                            {errors.confirmPassword?.message && (
                                <p className='text-red-500 text-xs mt-1'>{errors.confirmPassword?.message}</p>
                            )}
                        </div>
                        <Link
                            to="/forgot-password"
                            className='font-semibold text-sm text-primary'
                        >Forgot password?</Link>
                        <button
                            disabled={!isValid || isPending}
                            type='submit'
                            className='bg-primary text-white font-bold text-lg py-4 px-8 rounded-lg w-full my-6 disabled:opacity-70 disabled:cursor-not-allowed'>
                            Register
                        </button>
                        <p className='text-sm font-semibold text-[#5a7184]'>
                            You have an account? <Link to="/login" className='text-primary'>Login now</Link>
                        </p>
                    </form>
                </div>
            </section>
        </MainLayout>
    )
}
