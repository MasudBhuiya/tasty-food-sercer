import React from 'react';

const Home = () => {
    return (
        <div className='md:flex justify-between items-center p-4'>
            <div className=' text-center justify-between p-3'>
                <h1 className='text-5xl text-orange-500 font-bold mb-2'>Chef Description</h1>
                <p>Learn about the key requirements, duties, responsibilities, and skills that should be in a chef job description.</p>
            </div>
            <div className='md:w-[600px]'>
                <img  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
            </div>
        </div>
    );
};

export default Home;