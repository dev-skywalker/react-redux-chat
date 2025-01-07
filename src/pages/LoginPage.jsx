import { useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from 'axios'
import toast from 'react-hot-toast';
import { useDispatch } from 'react-redux';
import { setToken } from '../redux/userSlice';


const LoginPage = () => {

    const [data, setData] = useState({
        email: "",
        password: ""
    })
    const navigate = useNavigate()
    const dispatch = useDispatch()


    const handleOnChange = (e) => {
        const { name, value } = e.target
        console.log('HOST:', import.meta.env.VIM)
        // console.log(process.env.REE)

        setData((preve) => {
            return {
                ...preve,
                [name]: value
            }
        })
    }

    const handleSubmit = async (e) => {
        e.preventDefault()
        e.stopPropagation()

        const URL = `${import.meta.env.VITE_APP_BACKEND_URL}/api/login`

        try {
            const response = await axios.post(URL, data)
            console.log("response", response.data)
            console.log("success", response.data.success)

            toast.success(response.data.message)

            if (response.data.success) {
                console.log("reach", response.data.success)
                dispatch(setToken(response?.data?.token))
                localStorage.setItem('token', response?.data?.token)
                console.log("reachSS", response?.data?.token)

                setData({
                    email: "",
                    password: "",
                })

                navigate('/')

            }
        } catch (error) {
            toast.error(error?.response?.data?.message)
        }
    }


    return (
        <div className='mt-5'>
            <div className='bg-white w-full max-w-md  rounded overflow-hidden p-4 mx-auto'>
                <h3>Welcome to Chat app!</h3>
                {/* <h3>{import.meta.env.VITE_CLOUD_NAME}</h3> */}

                <form className='grid gap-4 mt-5' onSubmit={handleSubmit}>


                    <div className='flex flex-col gap-1'>
                        <label htmlFor='email'>Email :</label>
                        <input
                            type='email'
                            id='email'
                            name='email'
                            placeholder='enter your email'
                            className='bg-slate-100 px-2 py-1 focus:outline-primary'
                            value={data.email}
                            onChange={handleOnChange}
                            required
                        />
                    </div>

                    <div className='flex flex-col gap-1'>
                        <label htmlFor='password'>Password :</label>
                        <input
                            type='password'
                            id='password'
                            name='password'
                            placeholder='enter your password'
                            className='bg-slate-100 px-2 py-1 focus:outline-primary'
                            value={data.password}
                            onChange={handleOnChange}
                            required
                        />
                    </div>



                    <button
                        className='bg-primary text-lg  px-4 py-1 hover:bg-secondary rounded mt-2 font-bold text-white leading-relaxed tracking-wide'
                    >
                        Login
                    </button>

                </form>

                <p className='my-3 text-center'>Don't have account ? <Link to={"/register"} className='hover:text-primary font-semibold'>Register</Link></p>
            </div>
        </div>
    )
}

export default LoginPage