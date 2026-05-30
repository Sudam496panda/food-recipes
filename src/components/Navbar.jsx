 
import { Link } from "react-router-dom";
import "../App.css";

function Navbar({ search, setSearch }) {

  return (
    <header className="navbar">

      <div className="nav-container">
 
        <Link to="/" className="logo">
          🍔 FoodRecipe
        </Link>
 
        <div className="search-form">

          <input
            type="text"
            placeholder="Search recipes..."
            value={search}
            onChange={(e) =>
              setSearch(e.target.value)
            }
          />

          <button>
            Search
          </button>

        </div>
 
        <ul className="nav-links">
            <li>
            <Link to="/">
             Home
            </Link>
          </li>
           <li>
            <Link to="/Recipes">
              Recipes
            </Link>
          </li>
           
             <li>
            <Link to="/favorites">Favourite-recipes</Link>
          </li>
        </ul>

      </div>

    </header>
  );
}

export default Navbar;