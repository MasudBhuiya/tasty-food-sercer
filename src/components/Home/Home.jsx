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
           <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center w-[99%] mx-auto'>
           {
    chef && chef.map(singleChef => <Cart key={singleChef.id} chef={singleChef}></Cart>)
}
           </div>
        </div>
    );
};


export default Home;