import toast from "react-hot-toast";

// get data from local storage

const getAllFavorites = () =>{
    const all = localStorage.getItem('favorites');

    // check in localStorage have any data or not
    if(all){
        const favorites = JSON.parse(all);
        return favorites;
    }else{
        return []
    }
}


// add data to local storage

const addFavorite = coffee =>{
    const favorites = getAllFavorites();

    // check the data is already exist or not
    const isExist = favorites.find(item => item.id == coffee.id);

    if(isExist) return toast.error('This is already added!');
        
    favorites.push(coffee);
    localStorage.setItem('favorites', JSON.stringify(favorites));
    toast.success('Successfully Added!');
}


// remove data from local storage 

const removeFavorites = id =>{
    // get all previously saved data
    const favorites = getAllFavorites();

    const remaining = favorites.filter(coffee => coffee.id != id);

    // Now set the new list of item to local storage.
    localStorage.setItem('favorites', JSON.stringify(remaining));
    toast.success('Successfully Removed');

}


export {addFavorite, getAllFavorites, removeFavorites}