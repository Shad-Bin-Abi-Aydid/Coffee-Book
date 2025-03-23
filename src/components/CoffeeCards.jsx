import React from 'react';
import { useLoaderData, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCards = () => {
    const {category} = useParams();
    const data = useLoaderData();

    console.log(data);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3'>
            {
                data.map((coffee)=><Card key={coffee.id} coffee = {coffee}></Card>)
            }
            
        </div>
    );
};

export default CoffeeCards;