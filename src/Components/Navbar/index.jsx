import { useState } from "react";
import Navlink from "../Navlink/index.jsx";

function Navbar() {
    const [menuOpen, setMenuOpen] = useState(false);

    function toggleMenu() {
        setMenuOpen(!menuOpen);
    }

    return (
        <nav id="links" className="bg-[#00472d] text-center px-2">
            <button
                className="text-lg text-[#faf4ef] font-serif md:hidden"
                id="menu-button"
                onClick={toggleMenu}>
                {menuOpen ? "Close Menu" : "Open Menu"}
            </button>

            <div
                id="nav-links"
                className={`${
                    menuOpen ? "flex" : "hidden"
                } flex-col justify-start items-center py-1 px-2 sm:text-xl md:flex md:flex-row md:justify-start`}>
                <Navlink id='Home' link="/" text='Home'></Navlink>
                <Navlink id='Bookings' link="/bookings" text='Bookings'></Navlink>
                <Navlink id='Report' link="/report" text='Report'></Navlink>
            </div>
        </nav>
    );
}

export default Navbar;