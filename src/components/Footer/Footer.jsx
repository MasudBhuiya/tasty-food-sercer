import React from 'react';

const Footer = () => {
    return (
        <div className='bg-black md:flex p-4 text-white justify-between'>
            <div >
                <h2 className='font-bold text-2xl'>Tasty Foods</h2>
                <p >I love cooking and blogging. Using a fork, break salmon. Halve reserved potatoes and eggs crosswise.</p>
                <p className='mt-3 mb-3'>E-mail :masudbhuiyan1415@gmail.com
                </p>
                <p>Phone :018********</p>
                   
            </div>
            <div>
                <h2 className='font-bold text-2xl mt-2'>For more details</h2>
                <input className='p-2' type="email" placeholder='Enter Your Email' />
                <button className='bg-red-500 rounded px-3 py-2 text-white mt-2 me-2'>Subscribe</button>
            </div>
        </div>
    );
};

export default Footer;