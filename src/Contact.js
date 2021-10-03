import { useEffect } from "react/cjs/react.development";
import youtube from './images/youtube.svg';
import instagram from './images/instagram.svg';
import github from './images/github.svg';
import bandcamp from './images/bandcamp.svg';
import './styles/Contact.css';

export default function Clothes(props){
    useEffect(()=>{
        props.updateSplashImage(false);
    })

    const name='Clothes';
    return(
        <div className='contactContainer'>

            <a className='contactImage' href='https://github.com/elijahisawesome'> <img className='contactImage' src={github}/> </a> 

            <a  className='contactImage' href = 'https://dustetc.bandcamp.com/album/grinch'><img className='contactImage' src={bandcamp}/> </a>

            <a className='contactImage' href = 'https://www.instagram.com/wowaightkid'><img className='contactImage' src={instagram}/> </a>
            
        </div>
    )
}