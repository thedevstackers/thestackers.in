import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/thestackers.in">Home</NavLink>
            <NavLink to="services">Services</NavLink>
            <NavLink to="team">Team</NavLink>
            <NavLink to="about">About</NavLink>
            <NavLink to="contact">Contact</NavLink>
        </nav>
    )
}

export default Navbar;
