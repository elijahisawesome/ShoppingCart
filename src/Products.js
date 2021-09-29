import * as data from './products/products.json';
import './styles/Product.css';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react'
import subPages,{subPagesNames} from './subPages/subPages.js';
import SideBar from './SideBar.js';
const products = data.default.Products;


export default function ProductsPage(props){
    const [sideBarData,setSideBarData] = useState('');

    const updateSideBar = function(val){
        setSideBarData(val);
    }
    useEffect(()=>{
        updateSideBar(props.page);
    })

    return(
        <div>
            <SideBar page={props.page}/>
            <nav id='productsHeader'>
                {subPagesNames.map(page=>{
                    return(
                     <Link to={`/Products/${page}`}>
                     <div className='productBlockHeader'>
                        {page}
                         <div className = 'productBlock'>
                             <LoremGen/>
                         </div>
                     </div>
                    </Link>)
                })}
            </nav>
            <div id='SplashImageContainer'>
                <img id='SplashImage' src='../images/supermarket.jpg'></img>
            </div>
        </div>
    )


}
function LoremGen(){
    return(
    <div className = 'productSubmenu'>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
    </div>
    )
}

/*
            <div id="products">
                {products.map((product)=>{
                    return(<div className ='product'>
                        {product.name}
                        <div className='productImageContainer'>
                            <img className ='productImage'src={product.img}/>
                        </div>
                        <button onClick={()=>props.addOrRemoveProduct(product,1)}>Add to Cart</button>
                    </div>)
                })}
            </div>
*/

            /*
                <div id='productBlockHeaderContainer'>
                   
                    <div className='productBlockHeader'>
                        Clothes
                        <div className = 'productBlock'>
                            <LoremGen/>
                        </div>
                    </div>
                    <div className='productBlockHeader'>
                        Electronics
                        <div className = 'productBlock'>
                            <LoremGen/>
                        </div>
                    </div>

                </div>
            */