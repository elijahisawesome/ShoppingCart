import {Link} from 'react-router-dom';
import logo from './images/Cheeseburger.jpg';
import './styles/NavBar.css';


export default function NavBar(props){
    return(
        <nav id = 'NavBar'>
            <h3 className = 'NavLogoWrapper'>
                <img className = 'NavLogo'src={logo} alt='wat'/>
            </h3>
            <Link to ='/Products'>
                <li className="navItem">Products</li>
            </Link>
            <Link to ='/'>
                <li className="navItem">Home</li>
            </Link>
            <Link to ='/Checkout'>
                <li className="navItem">Checkout image {props.totalProducts}</li>
            </Link>
        </nav>
    )
}