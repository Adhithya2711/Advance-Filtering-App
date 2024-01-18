import Category from "./Category/Category";
import Price from "./Prices/Price";
import Colors from "./Colors/Colors";

import { HiShoppingCart } from "react-icons/hi2";
import "./Sidebar.css";

function Sidebar({handleChange}) {

 
  return (
    <>
    <section className="sidebar">
        <div className="logo-container">
          
            <h1><HiShoppingCart/></h1>
            
        </div>

        <Category handleChange={handleChange}/>
        <Price handleChange={handleChange}/>
        <Colors handleChange={handleChange}/>

    </section>
    </>
  )
}
export default Sidebar;