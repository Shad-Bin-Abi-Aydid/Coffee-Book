import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import nutrition from '../assets/images/nutrition.png';
import { addFavorite, getAllFavorites } from '../utils';

const CoffeeDetails = () => {
    const {id} = useParams();
    const data = useLoaderData();
    const [coffee, setCoffee] = useState({});
    const [isFavorite, setIsFavorite] = useState(false);

    const {description, category, making_process, rating, popularity,image} = coffee;

    useEffect(() =>{
        const singleData = data.find(coffee => coffee.id == id)
        setCoffee(singleData);

        const favorites = getAllFavorites()

        const isExist = favorites.find(item => item.id == singleData.id);
        if(isExist){
            setIsFavorite(true);
        }
    },[data,id]);


    const handleFavorite = coffee =>{
        addFavorite(coffee);
        setIsFavorite(true);
    }

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
                    <button disabled = {isFavorite} onClick={() => handleFavorite(coffee)} className='btn btn-primary font-bold'>Add Favorite</button>
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