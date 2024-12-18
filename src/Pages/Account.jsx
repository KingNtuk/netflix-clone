import React from 'react'
import Rows from '../Component/Rows'

const Account = () => {
  return (
    <>
    <div className='w-full h-screen'>
        <img className='w-full h-[500px] object-cover' src='https://assets.nflxext.com/ffe/siteui/vlv3/2e884ce2-da1c-4501-ab9a-10c534d30975/6e293bbe-c8fc-4a91-af6c-85161c6a1f64/NG-en-20230327-popsignuptwoweeks-perspective_alpha_website_large.jpg' alt=''/>
        <div className='bg-black/75 fixed w-full h-screen  top-0 left-0'></div>
        <div className='text-white fixed top-40 p-4'>
            <h1 className='text-4xl font-bold'>My Account</h1>
            <p className='text-md py-4'>saved shows</p>
        </div>
        <Rows title='Saved Shows' /> 
    </div>
    </>
  )
}

export default Account