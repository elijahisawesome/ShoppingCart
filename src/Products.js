import * as data from './products/products.json';
import './styles/Product.css';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react'
import {subPagesNames} from './subPages/subPages.js';
import SideBar from './SideBar.js';
const products = data.default;
const MAX_URL_LENGTH = 42;


export default function ProductsPage(props){

    return(
        <div>
            <SideBar page={props.page}/>
            <nav id='productsHeader'>
                {subPagesNames.map((page,index)=>{
                    return(
                    <div className='productBlockHeader' key={index}>
                        <Link to={`/Products/${page}`}>
                        <div >
                            {page}
                        </div>
                        </Link>
                        <ProductBlock block={products[page]} page={page} />
                    </div>)
                })}
            </nav>
            <SplashImageGetter/>
        </div>
    )


}

function SplashImageGetter(){
    if(window.location.href.length>MAX_URL_LENGTH){
        return(
            <div id='SplashImageContainer'>
                <img id='SplashImage' src='../../images/supermarket.jpg'></img>
            </div>
        )
    }
    return(
        <div id='SplashImageContainer'>
                <img id='SplashImage' src='../images/supermarket.jpg'></img>
        </div>
    )
}

function ProductBlock(props){
    return(
    <div className = 'productBlock'>
        {Object.keys(props.block).map((category, index)=>{
            return(
                <Link to={`/Products/${props.page}/${category}`} key={index}>
                    <div className='productBlockTitle'>
                        {category}
                        {props.block[category].map(product=>{
                            return(
                                <div className='productBlockSubTitle' key={Math.random()}>
                                    {product.name}
                                </div>
                            )
                        })}
                    </div>
                </Link>
            )
        })}
    </div>)
}