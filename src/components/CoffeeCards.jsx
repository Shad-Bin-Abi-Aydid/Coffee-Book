import React, { useEffect, useState } from 'react';
import { useLoaderData, useNavigate, useParams } from 'react-router-dom';
import Card from './Card';

const CoffeeCards = () => {
    const navigate = useNavigate();
    const {category} = useParams();
    const data = useLoaderData();
    const [coffees, setCoffee] = useState([]);

    useEffect(()=>{
        if(category){
            const filteredByCategory = [...data].filter(coffee => coffee.category === category)

            setCoffee(filteredByCategory);
        }else{
            setCoffee(data.slice(0,6));
        }

    },[category, data])

    console.log(data);
    return (
        <>
            <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6'>
                {
                    coffees.map((coffee)=><Card key={coffee.id} coffee = {coffee}></Card>)
                }
                
            </div>
            <button onClick={() => navigate('/coffees')}  className='btn btn-warning'>View All</button>
        </>
    );
};

export default CoffeeCards;