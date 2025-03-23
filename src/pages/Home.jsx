import { Outlet, useLoaderData } from "react-router-dom";
import Banner from "../components/Banner";
import Categories from "../components/Categories";
import Heading from "../components/Heading";

const Home = () => {

    const categories = useLoaderData();


  return (
    <div>
      {/* Banner */}
      {/* Heading */}
      {/* Categories tab section */}
      {/* Dynamic Nested component */}

      {/* Banner */}
      <Banner></Banner>

      {/* Heading */}
      <Heading
        title={"Browse Coffees by Category"}
        subtitle={
          "Choose your desired coffee category to browse through specific coffees that fit in your test"
        }
      ></Heading>

      {/* Categories Tab section */}
      
      <Categories categories={categories}></Categories>

        <Outlet></Outlet>
    </div>
  );
};

export default Home;
