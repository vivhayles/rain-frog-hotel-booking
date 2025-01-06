function NavLink({link, text}) {
    return (
        <a className = "font-serif px-4 text-lg md:text-2xl text-[#faf4ef]"
           href={link}>{text}</a>
    )
}

export default NavLink;