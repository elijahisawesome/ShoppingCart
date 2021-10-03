import {Link} from 'react-router-dom';
import logo from './images/Cheeseburger.jpg';
import './styles/NavBar.css';


export default function NavBar(props){
    return(
        <nav id = 'NavBar'>
            <link rel="stylesheet" href="https://maxcdn.bootstrapcdn.com/font-awesome/4.4.0/css/font-awesome.min.css"></link>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Josefin+Sans:wght@300&display=swap" rel="stylesheet"/> 

            <Link to ='/' className = 'NavLogoWrapper'>
                <div className = 'NavLogo'></div>
            </Link>
            
            <h3 >
                
            </h3>
            <Link to ='/Contact'>
                <li className="navItem">Contact</li>
            </Link>
            <button className="navItem" onClick={(e)=>{toggleShop(e)}}><i className="fa fa-shopping-cart"></i> {props.totalProducts}</button>
        </nav>
    )
}

function toggleShop(event){
    event.stopPropagation();
    const Cart = document.getElementById('Cart');
    Cart.classList.toggle('checkingOut');
}