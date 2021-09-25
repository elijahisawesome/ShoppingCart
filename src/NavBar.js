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
            <button className="navItem" onClick={(e)=>{toggleShop(e)}}>Checkout image {props.totalProducts}</button>
        </nav>
    )
}

function toggleShop(event){
    event.stopPropagation();
    const Cart = document.getElementById('Cart');
    Cart.classList.toggle('checkingOut');
}