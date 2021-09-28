import {Link} from 'react-router-dom';
import logo from './images/Cheeseburger.jpg';
import './styles/NavBar.css';


export default function NavBar(props){
    return(
        <nav id = 'NavBar'>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
            <h3 className = 'NavLogoWrapper'>
                <img className = 'NavLogo'src={logo} alt=''/>
            </h3>
            <Link to ='/Contact'>
                <li className="navItem">Contact</li>
            </Link>
            <Link to ='/'>
                <li className="navItem">Home</li>
            </Link>
            <button className="navItem" onClick={(e)=>{toggleShop(e)}}><i class="fa fa-shopping-cart"></i> {props.totalProducts}</button>
        </nav>
    )
}

function toggleShop(event){
    event.stopPropagation();
    const Cart = document.getElementById('Cart');
    Cart.classList.toggle('checkingOut');
}