import React from 'react';
import './Contact.css'
const Contact = () => {
    return (
        <div>
            <div className='background relative -top-24 flex flex-col items-center justify-center'>
                <div className='text-white h-[400px]  flex flex-col items-center justify-center lg:w-[1440px]  bg-opacity-50 bg-slate-700'>
                    <h1 className='text-7xl font-bold '>CONTACT US</h1><br />
                    <p className='text-xl'>Contacting Made Easy – We're Just a Message Away!!!</p>
                </div>

            </div>
            <div className='flex flex-wrap relative md:-top-52 p-4 gap-8 justify-center'>
                <div className="rounded-2xl md:w-96 shadow-xl bg-orange-500 p-10 text-white mb-3 flex flex-col items-center justify-center">
                    <h1 className='text-4xl font-bold mb-3'>Phone</h1>
                    <p className=' font-medium'>+88 01853694742</p>
                    <p className=' font-medium'>+88 01853694742</p>
                </div>
                <div className="rounded-2xl md:w-96 shadow-xl bg-[#332E29] p-10 text-white mb-3 flex flex-col items-center justify-center">
                    <h1 className='text-4xl font-bold mb-3 '>Address</h1>
                    <p className=' font-medium'>H# 1/B(1st floor, Quantum Emerald Point, Gareeb-e-Nawaz Ave,) Dhaka 1230</p>
                </div>
                <div className="rounded-2xl md:w-96 shadow-xl bg-orange-500 p-10 text-white mb-3 flex flex-col items-center justify-center">
                    <h1 className='text-4xl font-bold mb-3'>Working Hours</h1>
                    <p className=' font-medium'>Mon - Fri: 08:00 - 22:00</p>
                    <p className=' font-medium'>Sat - Sun: 10:00 - 23:00</p>
                </div>
            </div>


            <div>
                <hr className='w-[280px] border-2 border-slate-500 mb-4 mx-auto' />
                <h1 className='text-4xl text-center mb-4'>CONTACT FORM</h1>
                <hr className='w-[280px] border-2 border-slate-500 mb-10 mx-auto' />

                <div className='max-w-[1440px] mx-auto bg-base-200 mt-20 mb-20'>
                    <form className='max-w-[1240px] py-20 mx-auto' action="">
                        <div className='grid md:grid-cols-2 gap-6'>
                        <div>
                        <p className='font-bold text-lg'>Name*</p>
                        <input type="text" className='w-full p-4 mt-2 rounded-lg' name="name" placeholder='Enter your name' id="" />
                        </div>
                        <div>
                        <p className='font-bold text-lg'>Email*</p>
                        <input type="email" className='w-full p-4 mt-2 rounded-lg' name="email" placeholder='Enter your email' id="" />
                        </div>
                        </div>
                        <p className='font-bold text-lg mt-3'>Phone*</p>
                        <input type="number" className='w-full p-4 mt-2 rounded-lg' name="phone" placeholder='Enter your Phone Number' id="" />
                        <p className='font-bold text-lg mb-2 mt-3'>Message*</p>
                        <textarea name="details" className='w-full p-3 rounded-lg' placeholder='Write your message here' id="" cols="" rows="8"></textarea>
                        <input className='btn btn-block mt-10' type="submit" value="Send" name="" id="" />
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Contact;