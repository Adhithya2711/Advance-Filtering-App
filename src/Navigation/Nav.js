import { FaGripfire } from "react-icons/fa6";
import { FiShoppingCart } from "react-icons/fi"; 
import { FaRegUser } from "react-icons/fa";




import "./Nav.css";

function Nav({handleInputChange, query}) {
  return (
    <nav>
      <div className="nav-container">
        <input type="text" className="search-input"
        onChange={handleInputChange}
        value={query}
        placeholder="Enter your search shoes."/>
      </div>

      <div className='profile-container'>
        <a href='#'>
          <FaGripfire className="nav-icons" />
        </a>

        <a href='#'>
          <FiShoppingCart className="nav-icons"/>

        </a>

        <a href='#'>
          <FaRegUser className="nav-icons" />  ADHITHYA K
        </a>

      </div>
    </nav> 
  )
}


export default Nav;