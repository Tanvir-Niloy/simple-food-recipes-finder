import React,{useState,useEffect} from 'react';
import Header from './components/Header';
import Recipes from './components/Recipes';
import axios from 'axios';

function App() {

  const [search, setSearch] = useState("");
  const [recipes, setRecipes] = useState([]);


  const APP_ID = "f877f952";
  const APP_KEY = "eac8631a40fe42af855f7fbb9ed6fb8b";

  useEffect(() => {
   
    getRecipes()

  }, [])


  const getRecipes = async () => {
    const res = await axios.get(
      `https://api.edamam.com/search?q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}`
    );
    setRecipes(res.data.hits);
  };


  const onInputChange = e => {

    e.preventDefault()
    setSearch(e.target.value);
    
  };

  const onSearchClick = () => {
    getRecipes();
  };

  return (
    <div>
     <Header search={search} onInputChange={onInputChange} onSearchClick={onSearchClick}/>
     <div className="container">
     <Recipes recipes={recipes}/>
     </div>
    </div>
  );
}

export default App;
