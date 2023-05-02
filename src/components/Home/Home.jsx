import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
    const [chef, setChef] = useState([])

    useEffect(()=>{
        fetch('http://localhost:5000/data')
        .then(res => res.json())
        .then(data => setChef(data))
    },[])
    return (
        <div className='w-[90%] mx-auto'>
            <div className='md:flex justify-between items-center p-4'>
            <div className=' text-center justify-between p-3 md:w-[50%] mx-auto'>
                <h1 className='text-5xl text-orange-500 font-bold mb-2'>Chef Description</h1>
                <p >As a chef at our popular restaurant, you will have the opportunity to create a stunning selection of diverse menu items for our customers. You will be able to put your skills to good use creating masterful dishes for lunch and dinner, as well as mouthwatering desserts and appetizers.</p>
            </div>
            <div className='md:w-[600px]'>
                <img  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
            </div>
            </div>
           <div>
            <h1 className='text-3xl text-center font-semibold mt-10 mb-5'>Chef Information</h1>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center w-[99%] mx-auto '>
           {
    chef && chef.map(singleChef => <Cart key={singleChef.id} chef={singleChef}></Cart>)
}
           </div>
           </div>
           <div className='bg-gray-700 text-white p-5 mt-10 rounded mb-10'>
            <h1 className='text-3xl font-bold text-center mb-3'>Hhy Choose Us</h1>
            <p className='p-5'>Quality of Service, Food, Ambiance and Value of Money are the primary elements for choosing a restaurant. Mariano is one of the most exquisite fine-dinning restaurant in twin cities with a captivating view of Murree Hills, perfect ambiance and scrumptious food. Our team is always looking forward to provide you exceptional services and win your hearts out.</p>
            <div className='p-5 flex justify-between '>
                <div>
                <p className='font-semibold text-2xl'>17+</p>
                <p>Catering</p>
                </div>
               <div>
               <p className='font-semibold text-2xl'> 
                100+</p>
                <p>Menu</p>
               </div>
                <div>
                <p className='font-semibold text-2xl'> 1M+</p>
                <p>Order</p>
                </div>
            </div>
           </div>
        </div>
    );
};


export default Home;