import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

const Details = () => {
    const [recipe, setRecipe] = useState([])
    const data = useLoaderData();
    const { rating, likes, id, name, bio, numberOfRecipes, picture, yearsOfExperience, recipes
    } = data;
    // const allrec = recipes.map(r=> r)
    // console.log(data)

    return (
        <div>
            <div>
                <div className="card lg:card-side bg-slate-200 shadow-xl p-4">
                    <figure><img className='md:w-[600px] lg:w-[1000px]' src={picture} alt="Album" /></figure>
                    <div className="card-body">
                        <h2 className="card-title text-2xl font-bold">{name}</h2>
                        <p>{bio}</p>
                        <p className='font-bold'>Likes: {likes}</p>
                        <p className='font-bold'>Recipes: {numberOfRecipes}</p>
                        <p className='font-bold'>Experience: {yearsOfExperience}</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">Listen</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className='md:flex w-[90%] mx-auto justify-between mt-12'>
                <div className="card sm:w-96  bg-base-100 shadow-xl pt-2 mb-3 ">
                    <figure className='h-64'><img className='rounded' src={recipes[0].image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-2xl">{recipes[0].title}</h2>
                        <p> <span className='font-bold text-lg'>Ingredients:</span> {recipes[0].ingredients.map(item => <li>{item}</li>)}</p>
                        <p> <span className='text-orange-400'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} /></span> {recipes[0].rating}</p>
                        <p>Likes: 4500</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Recipes</button>
                        </div>
                    </div>
                </div>
                <div className="card sm:w-96 bg-base-100 shadow-xl pt-2 mb-3 ">
                    <figure className='h-64'><img className='rounded' src={recipes[1].image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-2xl">{recipes[1].title}</h2>
                        <p> <span className='font-bold text-lg'>Ingredients:</span> {recipes[1].ingredients.map(item => <li>{item}</li>)}</p>
                        <p> <span className='text-orange-400'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} /></span> {recipes[1].rating}</p>
                        <p>Likes: 4000</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Recipes</button>
                        </div>
                    </div>
                </div>
                <div className="card sm:w-96 bg-base-100 shadow-xl pt-2 mb-3 ">
                    <figure className='h-64'><img className='rounded' src={recipes[2].image} alt="Shoes" /></figure>
                    <div className="card-body">
                        <h2 className="font-bold text-2xl">{recipes[2].title}</h2>
                        <p> <span className='font-bold text-lg'>Ingredients:</span> {recipes[2].ingredients.map(item => <li>{item}</li>)}</p>
                        <p> <span className='text-orange-400'><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStar} /><FontAwesomeIcon icon={faStarHalfAlt} /></span> {recipes[2].rating}</p>
                        <p>Likes: 5000</p>
                        <div className="card-actions justify-end">
                            <button className="btn btn-primary">View Recipes</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Details;