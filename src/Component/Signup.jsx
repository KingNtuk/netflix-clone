import React, { useState } from 'react'
import { Link, Navigate, useNavigate } from 'react-router-dom'

const Signup = () => {

    const navigate = useNavigate()
    const [ value , setValue] = useState({
        email : '' ,
        password : '' ,
    })
    const [error , setError ] =  useState();

    const handleValueValidation =  () => {
        if (value.password && value.email) {
            return true;
        }
        return false;
    }

    const handleSignUp = () =>{
        if(handleValueValidation()){
            if(value.email === (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/)){
                setError('email is not validated')
            }else if(value.password.length < 4){
                setError('password is not strong')
            }else{
                navigate('/login')
            }
        }else{
            setError('All fields are required')
        } 
    }


  return (
    <div className='w-full h-screen'>
        <img className='w-full h-full object-cover hidden md:block' src='https://assets.nflxext.com/ffe/siteui/vlv3/2e884ce2-da1c-4501-ab9a-10c534d30975/6e293bbe-c8fc-4a91-af6c-85161c6a1f64/NG-en-20230327-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt=''/>
        <div className='bg-black/75 fixed w-full h-screen  top-0 left-0'></div>
        <div className='fixed w-full h-screen z-50 py-24 px-4 text-white top-0'>
            <div className='max-w-[450px] h-[640px] bg-black/75 mx-auto py-16'>
                <div className='max-w-[320px] mx-auto'>
                    {error !== "" && <div className='text-red-600 text-center pb-3 text-bold'>{error}</div>}
                    <h1 className='text-3xl font-bold'>Sign Up</h1>
                    <form className='w-full flex flex-col py-4'>
                        <input type='Email' placeholder='Email' 
                        onChange={(e) => setValue({...value, email:e.target.value})}
                        className='my-2 p-3 bg-gray-700 rounded'/>
                        <input 
                        onChange={(e) => setValue({...value, password:e.target.value})}
                        type='Password' placeholder='Password' className='my-2 p-3 bg-gray-700 rounded'/>
                        <button
                        onClick={handleSignUp} 
                        className=' bg-red-600 py-3 my-6 rounded font-bold '>Sign Up</button>
                        <div className='flex justify-between items-center text-gray-600'>
                            <p className=''><input className='mr-2' type='checkbox'/>Remeber me</p>
                            <p>Need Help</p>
                        </div>
                        <p className='py-8 '><span className='text-gray-600'>Already Have an Account?  </span>
                        <Link to='/login'>
                            Sign in
                        </Link>
                        </p>
                    </form>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Signup