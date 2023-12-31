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
        <div className='max-w-screen-2xl mx-auto bg-slate-800 '>
            <div>
            <div className="carousel md:h-[700px]  w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <img src="https://i.ibb.co/RjV5xW3/Screenshot-2023-11-08-175111.png" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 ms-10 right-5 top-1/2">
      <a href="#slide4" className="btn btn-circle">❮</a> 
      <div className="absolute md:ms-40 flex items-center h-full left-0 rounded-xl text-white md:w-[50%]  bg-gradient-to-r from-[rgba(21,21,21,0)] to-[rgba(21,21,21,0)]">
                    <p><span className="text-4xl font-bold">Music Instrument </span><br /> The guitar is a versatile string instrument, available in acoustic and electric variants. It produces sound when the strings are plucked or strummed. Players press the strings against frets to change the pitch. With its distinct shape and wide range of sounds, the guitar is popular across diverse music genres.</p>
                    </div>
      <a href="#slide2" className=" btn btn-circle ">❯</a>
    </div>
  </div> 
  <div id="slide2" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1162911786/photo/the-team-of-cooks-backs-in-the-work-in-the-modern-kitchen-the-workflow-of-the-restaurant-in.jpg?s=612x612&w=0&k=20&c=Nn1xO1gbUGnEzTHp4Sitg_ouob_co3jY5hDv_kHWzxE=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide1" className="btn btn-circle">❮</a> 
      <div className="absolute md:ms-40 flex items-center h-full left-0 rounded-xl text-white md:w-[50%]  bg-gradient-to-r from-[rgba(21,21,21,0)] to-[rgba(21,21,21,0)]">
                    <p><span className="text-4xl font-bold">Music Instrument </span><br /> The guitar is a versatile string instrument, available in acoustic and electric variants. It produces sound when the strings are plucked or strummed. Players press the strings against frets to change the pitch. With its distinct shape and wide range of sounds, the guitar is popular across diverse music genres.</p>
                    </div>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide3" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1299738603/photo/portrait-of-handsome-man-in-kitchen.jpg?s=612x612&w=0&k=20&c=WFTnk_KGRnihKeWcCv2CZIQmqe952kfCOS6-ZFT9vaQ=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide2" className="btn btn-circle">❮</a> 
      <div className="absolute md:ms-40 flex items-center h-full left-0 rounded-xl text-white md:w-[50%]  bg-gradient-to-r from-[rgba(21,21,21,0)] to-[rgba(21,21,21,0)]">
                    <p><span className="text-4xl font-bold">Music Instrument </span><br /> The guitar is a versatile string instrument, available in acoustic and electric variants. It produces sound when the strings are plucked or strummed. Players press the strings against frets to change the pitch. With its distinct shape and wide range of sounds, the guitar is popular across diverse music genres.</p>
                    </div>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div> 
  <div id="slide4" className="carousel-item relative w-full">
    <img src="https://media.istockphoto.com/id/1146261080/photo/chef-finishing-healthy-salad-on-a-black-plate-with-tweezers-almost-ready-to-serve-it-on-a.jpg?s=612x612&w=0&k=20&c=78_UgFxxUBLsQcgL2oI6JRDibAqO4hkNldJ_DyA55KU=" className="w-full" />
    <div className="absolute flex justify-between transform -translate-y-1/2 left-5 right-5 top-1/2">
      <a href="#slide3" className="btn btn-circle">❮</a> 
      <div className="absolute md:ms-40 flex items-center h-full left-0 rounded-xl text-white md:w-[50%] from-[rgba(21,21,21,0)] to-[rgba(21,21,21,0)]">
      {/* bg-gradient-to-r from-[#080404] to-[rgba(21,21,21,0)] */}
                    <p><span className="text-4xl font-bold">Music Instrument </span><br /> The guitar is a versatile string instrument, available in acoustic and electric variants. It produces sound when the strings are plucked or strummed. Players press the strings against frets to change the pitch. With its distinct shape and wide range of sounds, the guitar is popular across diverse music genres.</p>
                    </div>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>

<div className='p-10'>
    <h1 className='text-4xl text-orange-600 text-center font-bold mt-10 mb-10'>All Food Items</h1>
    <div className='grid grid-cols-2 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-5 gap-6'>
        <div className='text-center'>
        <img className='w-44 md:w-72 rounded' src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Baked-Spaghetti_EXPS_CPL19_1081_C11_06_4b-3.jpg?resize=700,700" alt="" />
        </div>
        <div className='text-center'>
        <img className='w-44 md:w-72 rounded' src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps6504_TH153340A10_02_4b-3.jpg?resize=696,696" alt="" />
        </div>
        <div className='text-center'>
        <img className='w-44 md:w-72 rounded' src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Stuffed-Pepper-Soup_EXPS_THSO17_2872_D04_14_5b-2.jpg?resize=700,700" alt="" />
        </div>
        <div className='text-center'>
        <img className='w-44 md:w-72 rounded' src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Basic-Homemade-Bread_EXPS_TOHcom20_32480_C01_26_2b.jpg?resize=768,768" alt="" />
        </div>
        <div className='text-center'>
        <img className='w-44 md:w-72 rounded' src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Fluffy-Key-Lime-Pie_EXPS_DSBZ17_36450_D01_13_6b-7.jpg?resize=696,696" alt="" />
        </div>
        <div className='text-center'>
        <img className='w-44 md:w-72 rounded' src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Rustic-Italian-Tortellini-Soup_EXPS_DIYD19_41101_E04_30_6b-14.jpg?resize=700,700" alt="" />
        </div>
        <div className='text-center'>
        <img className='w-44 md:w-72 rounded' src="https://www.tasteofhome.com/wp-content/uploads/2018/01/exps7178_TH163622C04_13_5b-4.jpg?resize=696,696" alt="" />
        </div>
        <div className='text-center'>
        <img className='w-44 md:w-72 rounded' src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Zucchini-Pizza-Casserole_EXPS_THN16_2912_D06_21_5b-3.jpg?resize=696,696" alt="" />
        </div>
        <div className='text-center'>
        <img className='w-44 md:w-72 rounded' src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Enchilada-Casser-Ole-_EXPS_WRSM17_42083_C03_22_2b-5.jpg?resize=696,696" alt="" />
        </div>
        <div className='text-center'>
        <img className='w-44 md:w-72 rounded' src="https://www.tasteofhome.com/wp-content/uploads/2018/01/Apple-Pie_EXPS_MRRA22_6086_E11_03_1b_v3-1.jpg?resize=700,700" alt="" />
        </div>
    </div>
</div>
            </div>
            {/* <div className='md:flex justify-between items-center p-4 bg-orange-200 mt-5'>
            <div className=' text-center justify-between p-3 md:w-[50%] mx-auto'>
                <h1 className='text-5xl text-orange-500 font-bold mb-2'>Chef Description</h1>
                <p >As a chef at our popular restaurant, you will have the opportunity to create a stunning selection of diverse menu items for our customers. You will be able to put your skills to good use creating masterful dishes for lunch and dinner, as well as mouthwatering desserts and appetizers.</p>
            </div>
            <div className='md:w-[600px]'>
                <img  src="https://images.unsplash.com/photo-1600565193348-f74bd3c7ccdf?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8Nnx8Y2hlZnxlbnwwfHwwfHw%3D&w=1000&q=80" alt="" />
            </div>
            </div> */}
           <div className='mt-10'>
            <h1 className='text-4xl text-orange-600 text-center font-bold mt-10 mb-10'>Chef Information</h1>
           <div className='grid sm:grid-cols-1 md:grid-cols-2 xl:grid-cols-3 items-center w-[99%] mx-auto lg:ms-16 '>
           {
    chef && chef.map(singleChef => <Cart key={singleChef.id} chef={singleChef}></Cart>)
}
           </div>
           </div>
           <div className="hero py-16">
  <div className="hero-content flex-col  lg:flex-row">
    <div className='lg:w-1/2 relative'>
    <img src='https://media.istockphoto.com/id/1059836070/photo/action-portrait-of-male-chef-tossing-ingredients-in-bowl.jpg?s=612x612&w=0&k=20&c=ZvEX3WWVSXEV9B7JO2iHOhIAK1t34IuphZ2J36oy7tI=' className="w-3/4  rounded-lg shadow-2xl" />
    <img src='https://media.istockphoto.com/id/1181904833/photo/he-is-in-his-element-when-cooking.jpg?s=612x612&w=0&k=20&c=qqyEY_C-adebdFQ0_wNDzMK7LJDAtdp-8Rmj4qtL_-s=' className="w-1/2 absolute right-5 top-1/2 rounded-lg border-8 border-base-200 shadow-2xl" />
    </div>
    <div className='md:w-1/2 space-y-5 p-4'>
        <h3 className='text-5xl  text-orange-600 font-bold mt-12 md:mt-0'>About Us...</h3>
      <h1 className="text-4xl font-bold text-white">Tasty Foods website <br /> for get knowledge <br /> about Famous Chef.</h1>
      <p className="py-6 text-white">"Discover Chef John Smith, a Le Cordon Bleu-trained culinary artist with 15+ years of experience. He embraces the farm-to-table concept, seamlessly blending French traditions with global influences. Renowned for dishes like 'Bouillabaisse à la Provençale' and 'Chocolate Fondant,' he leads the Michelin-starred La Maison de Saveurs in New York City. John's commitment to innovation earned him the James Beard Foundation's 'Rising Star Chef of the Year' award." </p>
    </div>
  </div>
</div>
          
           {/* <div className='mb-8'>
            <h1 className='text-center font-bold text-4xl text-orange-600 mb-5'>Contact With</h1>
            <div className='sm:flex sm:text-center justify-around'>
                <img className='w-[100px]' src="https://1000logos.net/wp-content/uploads/2019/06/Google-Logo.jpg" alt="" />
                <img className='w-[100px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSB90YfG8rA7qHXyhFU7oi8KUoQGNgu7nGrAXAImwJKqGSJ_Kp3Dl-qK-f0yrV9JOi32yY&usqp=CAU" alt="" />
                <img className='w-[100px]' src="https://thumbs.dreamstime.com/b/print-204012274.jpg" alt="" />
                <img className='w-[100px]' src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSg_xYhdiLUOE7ygFrBFaxGmJDTempr8qRH6aXQgkdA&s" alt="" />
            </div>
           </div> */}
           
        </div>
    );
};


export default Home;