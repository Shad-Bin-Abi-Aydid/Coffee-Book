import { useLoaderData } from "react-router-dom";
import Card from "../components/Card";
import { useState } from "react";

const Coffees = () => {
  const data = useLoaderData();
  const [coffees, setCoffees] = useState(data);

  const handleSort = (sortBy) => {
    if (sortBy == 'popularity') {

      const sorted = [...data].sort((a,b) => b.popularity-a.popularity);
      setCoffees(sorted);

    } else if (sortBy == 'rating') {

        const sorted = [...data].sort((a,b) => b.rating-a.rating);
        setCoffees(sorted);

    }
  };

  return (
    <>
      {/* Displaying buttons */}
      <div className="flex flex-col md:flex-row  justify-between items-center">
        <div>
          <h1 className="text-3xl font-thin">
            Sort Coffee&apos;s by Popularity & Rating -&gt;{" "}
          </h1>
        </div>
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center space-x-4">
          <button
            onClick={() => handleSort("popularity")}
            className="btn btn-warning font-bold"
          >
            Sort By Popularity
          </button>
          <button
            onClick={() => handleSort("rating")}
            className="btn btn-warning font-bold"
          >
            Sort By Rating
          </button>
        </div>
      </div>

      {/* Displaying Card */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {coffees.map((coffee) => (
          <Card key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
};

export default Coffees;
