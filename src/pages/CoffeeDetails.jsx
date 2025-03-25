import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import nutrition from '../assets/images/nutrition.png';

const CoffeeDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [coffee, setCoffee] = useState({});

    const {description, category, making_process, ingredients, rating, popularity,image} = coffee;

    useEffect(() =>{
        const singleData = data.find(coffee => coffee.id == id)
        setCoffee(singleData);
    },[data,id]);
    return (
        <div className='space-y-10'>
            <h1 className='text-3xl font-thin'>{description}</h1>
            <img className='w-full mx-auto md:h-[500px] rounded-xl' src={image} alt="" />
            <div className='flex flex-col md:flex-row justify-between items-center space-y-10'>
                <div>
                    <h1 className='text-2xl font-then'>{category}</h1>
                    <p className='font-semibold'>Popularity: {popularity}</p>
                    <p className='font-semibold'>Rating: {rating}</p>
                </div>
                <div>
                    <button className='btn btn-primary font-bold'>Add Favorite</button>
                </div>
            </div>
            <div className='flex flex-col md:flex-row justify-center  space-y-10'>
                <div>
                    <p className='text-lg font-thin'>{making_process}</p>
                    <p className='text-xl font-bold my-10'>Ingredients: </p>
                    
                </div>
                <div>
                    <img src={nutrition} alt="" />
                </div>
            </div>
        </div>
    );
};

export default CoffeeDetails;