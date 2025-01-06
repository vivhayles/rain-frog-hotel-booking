import {Link} from "react-router-dom";
function NavLink({link, text}) {
    return (
        <Link to={link} className = "font-serif px-4 text-lg md:text-2xl text-[#faf4ef]">{text}</Link>
    )
}

export default NavLink;