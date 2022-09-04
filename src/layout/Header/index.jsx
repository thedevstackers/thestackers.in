import { Link } from "react-router-dom";
import { Navbar } from "../../components/index";
import logo from '../../assets/images/logo.jpeg';

const Header = () => {
    return (
        <div className="header">
            <Link to='/'>
                <img src={logo} alt="logo" className="logo" />
            </Link>
            <Navbar />
        </div>
    );
}

export default Header;
