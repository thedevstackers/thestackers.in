import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <NavLink to="/thestackers.in">Home</NavLink>
            <NavLink to="https://thedevstackers.github.io/thestackers.in/services">Services</NavLink>
            <NavLink to="https://thedevstackers.github.io/thestackers.in/team">Team</NavLink>
            <NavLink to="https://thedevstackers.github.io/thestackers.in/about">About</NavLink>
            <NavLink to="https://thedevstackers.github.io/thestackers.in/contact">Contact</NavLink>
        </nav>
    )
}

export default Navbar;
