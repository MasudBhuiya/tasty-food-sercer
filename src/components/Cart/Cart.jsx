import React, { useEffect, useState } from 'react';

const Cart = ({chef}) => {
    console.log(chef);
    const {likes, name, numberOfRecipes, picture, yearsOfExperience}= chef;
    return (
        <div className="card md:w-96 bg-base-100 shadow-xl pt-2 mb-3 ">
  <figure className=''><img className='rounded' src={picture} alt="Shoes" /></figure>
  <div className="card-body">
    <h2 className="card-title">{name}</h2>
    <p>Years of Experience: {yearsOfExperience}</p>
    <p>Recipes: {numberOfRecipes}</p>
    <p>Likes: {likes}</p>
    <div className="card-actions justify-end">
      <button className="btn btn-primary">View Recipes</button>
    </div>
  </div>
</div>
    );
};

export default Cart;