import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../Context/AuthProvider';
import { Navigate, useLocation, useNavigate } from 'react-router-dom';

const Cart = ({chef}) => {
const {user} = useContext(AuthContext)
// const location = useLocation()
    // console.log(user);
    const {likes,id, name, numberOfRecipes, picture, yearsOfExperience}= chef;
    const navigate = useNavigate()
    const handleViewDetails = ()=>{
              navigate(`/details/${id}`)
    }
    return (
        <div className="card w-full mx-4 md:mx-0 md:w-96 bg-base-100 shadow-xl  mb-3 ">
  <figure className=''><img className='rounded w-full h-60' src={picture} alt="Shoes" /></figure>
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