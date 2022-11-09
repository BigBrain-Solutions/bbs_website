import React from "react";
import Temp from "../images/temp.svg";

function Header() {
    return ( 
        <div className="w-full h-full flex flex-row bg-gray-600">
            <div>
                <img src={Temp} alt="" />
            </div>

            <div>
                <img src={Temp} alt="" />
            </div>

            <div>
                <img src={Temp} alt="" />
                <button className="flex -end">Log in/Sign in </button>
            </div>
        </div>
     );
}

export default Header;