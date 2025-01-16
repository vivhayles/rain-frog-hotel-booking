import {Link} from "react-router-dom";

function LinkButton({href, text}) {
    return (
        <Link className='border-4 border-[#c5c58d] bg-[#c5c58d]' href={href}>{text}</Link>
    )
}

export default LinkButton;