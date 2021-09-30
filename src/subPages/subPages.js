import * as data from '../products/products.json';
import '../styles/subPages.css';
import {useEffect} from 'react';
const products = data.default;
const subPagesNames = ['Groceries','Clothes','Electronics']

function PageGenerator(props){
    useEffect(()=>{
        return()=>{props.setPage('')}
    },[])
    props.setPage(props.sideBar);

    if(props.isSubMenu){
        return(
            <div>
                <div id = 'productsHeader'>
                    {props.title}
                </div>
                <div id='products'>
                    {props.productArray.map((product)=>{
                        return(
                            <div className ='product'>
                            {product.name}
                            <div className='productImageContainer'>
                                <img className ='productImage'src={`../${product.img}`}/>
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
            <div>
                <div id = 'productsHeader'>
                    {props.title}
                </div>
                <div id='products'>
                    {Object.entries(props.productArray).map((category,index)=>{
                        return category[1].map((product) =>{
                            return(
                                <div className ='product'>
                                {product.name}
                                <div className='productImageContainer'>
                                    <img className ='productImage'src={`../${product.img}`}/>
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