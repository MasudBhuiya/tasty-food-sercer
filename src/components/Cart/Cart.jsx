import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useNavigate } from 'react-router-dom';

const Cart = ({chef}) => {
const {user} = useContext(AuthContext)
    console.log(user);
    const {likes,id, name, numberOfRecipes, picture, yearsOfExperience}= chef;
    const navigate = useNavigate()
    const handleViewDetails = ()=>{
        if(user){
            navigate(`/details/${id}`)
        }
        else{
            navigate('/login')
        }
    }

    return (
        <div className="card md:w-96 bg-base-100 shadow-xl pt-2 mb-3 ">
  <figure className=''><img className='rounded' src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Years of Experience: {yearsOfExperience}</p>
    <p>Recipes: {numberOfRecipes}</p>
    <p>Likes: {likes}</p>
    <div className="card-actions justify-end">
      <button onClick={handleViewDetails} className="btn btn-primary">View Recipes</button>
    </div>
  </div>
</div>
    );
};

export default Cart;