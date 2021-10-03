import * as data from '../products/products.js';
import '../styles/subPages.css';
import {useEffect} from 'react';
const products = data.default;
const subPagesNames = ['Groceries','Clothes','Electronics']

function PageGenerator(props){
    useEffect(()=>{
        props.setPage(props.sideBar);
        return()=>{props.setPage('')}
    },[])

    if(props.isSubMenu){
        return(
            <div key={Math.random()}>
                <div id = 'productsHeader'>
                    {props.title}
                </div>
                <div id='products'>
                    {props.productArray.map((product, index)=>{
                        return(
                            <div className ='product' key={index}>
                            {product.name}
                            <div className='productImageContainer'>
                                <img className ='productImage'src={`${product.img}`}/>
                            </div>
                            <button onClick={()=>props.addOrRemoveProduct(product,1)}>Add to Cart</button>
                            </div>
                        )
                    })}
                </div>
            </div>
        )
    }
    else{
        return(
            <div key={Math.random()}>
                <div id = 'productsHeader'>
                    {props.title}
                </div>
                <div id='products'>
                    {Object.entries(props.productArray).map((category,index)=>{
                        return category[1].map((product, index) =>{
                            return(
                                <div className ='product' key={index}>
                                {product.name}
                                <div className='productImageContainer'>
                                    <img className ='productImage'src={`${product.img}`}/>
                                </div>
                                <button onClick={()=>props.addOrRemoveProduct(product,1)}>Add to Cart</button>
                                </div>
                            )
                        })
                    })}
                </div>
            </div>
        )
    }
}

export default PageGenerator;
export {products, subPagesNames};