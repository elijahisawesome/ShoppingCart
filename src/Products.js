import data from './products/products.js';
import './styles/Product.css';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react'
import {subPagesNames} from './subPages/subPages.js';
import SideBar from './SideBar.js';
import splashImage from './images/supermarket.jpg';
const products = data;
const MAX_URL_LENGTH = 42;


export default function ProductsPage(props){


    return(
        <div>
            <link rel="preconnect" href="https://fonts.googleapis.com"/>
            <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
            <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/> 
            
            {}
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
            <SplashImageGetter splashImageStatus={props.splashImageStatus}/>
        </div>
    )


}

function SplashImageGetter(props){
    if (props.splashImageStatus){
        return(
            <div id='SplashImageContainer'>
                <img id='SplashImage' src={splashImage}></img>
            </div>
        )
    }
    return(
        <div></div>
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