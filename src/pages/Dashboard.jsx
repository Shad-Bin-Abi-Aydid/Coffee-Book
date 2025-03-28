import { useState } from "react";
import Heading from "../components/Heading";
import { getAllFavorites, removeFavorites } from "../utils";
import Card from "../components/Card";

const Dashboard = () => {
  const [coffees, setCoffees] = useState([]);

  useState(() => {
    const favorites = getAllFavorites();
    setCoffees(favorites);
  }, []);

  const handleRemove = id =>{

    removeFavorites(id);

    // Update the local storage 
    const favorites = getAllFavorites();
    setCoffees(favorites);
  }

  return (
    <>
      <Heading
        title="Welcome to Dashboard"
        subtitle="Manage coffees that you have previously added as favorite. You can view or remove them from here."
      ></Heading>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 my-6">
        {coffees.map((coffee) => (
          <Card handleRemove = {handleRemove} key={coffee.id} coffee={coffee}></Card>
        ))}
      </div>
    </>
  );
};

export default Dashboard;
