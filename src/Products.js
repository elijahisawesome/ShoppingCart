import * as data from './products/products.json';
import './styles/Product.css';
import {Link} from 'react-router-dom';
import {useEffect, useState} from 'react'
import subPages,{subPagesNames} from './subPages/subPages.js';
import SideBar from './SideBar.js';
const products = data.default;


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
                        <ProductBlock block={products[page]} page={page}/>
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

function ProductBlock(props){
    return(
    <div className = 'productBlock'>
        {Object.keys(props.block).map((category)=>{
            return(
                <Link to={`/Products/${props.page}/${category}`}>
                    <div className='productBlockTitle'>
                        {category}
                        {props.block[category].map(product=>{
                            return(
                                <div className='productBlockSubTitle'>
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

function objectIterator(obj){
    let newArray=[];
    for(const val in obj){
        newArray.push(obj[val]);
    }
    return newArray;
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