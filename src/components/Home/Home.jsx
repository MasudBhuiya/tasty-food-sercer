import React, { useEffect, useState } from 'react';
import Cart from '../Cart/Cart';

const Home = () => {
    const [chef, setChef] = useState([])

    useEffect(()=>{
        fetch('https://assignment-ten-server-masudbhuiya.vercel.app/data')
        .then(res => res.json())
        .then(data => setChef(data))
    },[])
    return (
        <div className='w-[90%] mx-auto'>
            <div className='md:flex justify-between items-center p-4 bg-orange-200 mt-5'>
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
           <div className='bg-zinc-600 text-white p-5 mt-10 rounded mb-10'>
            <h1 className='text-3xl font-bold text-center mb-3'>Hhy Choose Us</h1>
            <p className='p-5'>Quality of Service, Food, Ambiance and Value of Money are the primary elements for choosing a restaurant. Mariano is one of the most exquisite fine-dinning restaurant in twin cities with a captivating view of Murree Hills, perfect ambiance and scrumptious food. Our team is always looking forward to provide you exceptional services and win your hearts out.</p>
            <div className='p-5'>
                <div>
                <p className='font-semibold text-2xl'>Chef’s Pencil</p>
                <p>Started as an online cookbook where professional Chefs share their favorite recipes, Chef's Pencil has become a valuable resource for professional chef recipes, professional cooking advice, and news from the culinary industry. Chef's Pencil was started by Sydney-based Chef Paul Hegeman. In addition to recipes, our featured Chefs also share culinary techniques, advice on cooking materials, and lots of tips for home cooks.</p>
                </div>
               <div>
               <p className='font-semibold text-2xl'> 
               Tried and Tested Chef Recipes</p>
                <p>Chef's Pencil only features recipes from professional Chefs and so all our recipes are tried and tested.  Take a look at our most popular recipes or check out the latest dishes we’ve added to the site.</p>
               </div>
                <div>
                <p className='font-semibold text-2xl'>Meet Our Chefs</p>
                <p>Need some help deciding what to choose? Take a look at our most popular recipes or check out the latest dishes we’ve added to the site.</p>
                </div>
            </div>
           </div>
           <div className='mb-8'>
            <h1 className='text-center font-bold text-3xl mb-5'>Contact With</h1>
            <div className='sm:flex sm:text-center justify-between'>
                <img className='w-[100px]' src="https://1000logos.net/wp-content/uploads/2019/06/Google-Logo.jpg" alt="" />
                <img className='w-[100px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB90YfG8rA7qHXyhFU7oi8KUoQGNgu7nGrAXAImwJKqGSJ_Kp3Dl-qK-f0yrV9JOi32yY&usqp=CAU" alt="" />
                <img className='w-[100px]' src="https://thumbs.dreamstime.com/b/print-204012274.jpg" alt="" />
                <img className='w-[100px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_xYhdiLUOE7ygFrBFaxGmJDTempr8qRH6aXQgkdA&s" alt="" />
            </div>
           </div>
        </div>
    );
};


export default Home;