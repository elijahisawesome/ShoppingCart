import * as data from '../products/products.json';
import '../styles/subPages.css';
import {useEffect} from 'react';
const products = data.default;
const subPagesNames = ['Groceries','Clothes','Electronics'];
const subPages=[];

function subPagePopulator(){
    subPagesNames.forEach((page)=>{
        let NewPage = function(props){
        useEffect(()=>{
            return ()=> {props.setPage('')}
        },[])
        props.setPage(products[page]);
        
        let productArray = objectIterator(products[page]);
        
        return (
        <div>
            <div id='productsHeader'>
               {page}
            </div>
            <div id="products">
                {productArray.map((Category)=>{
                    return(Category.map((product)=>{
                        return(
                        <div className ='product'>
                        {product.name}
                        <div className='productImageContainer'>
                            <img className ='productImage'src={product.img}/>
                        </div>
                        <button onClick={()=>props.addOrRemoveProduct(product,1)}>Add to Cart</button>
                        </div>)
                    }))
                    
                })}
            </div>
        </div>)
    }
    subPages.push(NewPage);
    })
}

function objectIterator(obj){
    let newArray=[];
    for(const val in obj){
        newArray.push(obj[val]);
    }
    return newArray;
}

subPagePopulator();

export default subPages;
export {subPagesNames};








/*
function Groceries(props){
    const name='Groceries';
    
    useEffect(()=>{
        return ()=> {props.setPage('')}
    },[])
    props.setPage(name);
    return(
        <div>
            <div id='productsHeader'>
                Hey Groceries
            </div>
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
        </div>
    )
}

function Clothes(props){
    const name='Clothes';
    useEffect(()=>{
        return ()=> {props.setPage('')}
    },[])
    props.setPage(name);
    return(
        <div>
            <div id='productsHeader'>
                Hey Clothes
            </div>
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
        </div>
    )
}
function Electronics(props){
    const name='Electronics';
    useEffect(()=>{
        return ()=> {props.setPage('')}
    },[])
    props.setPage(name);
    return(
        <div>
            <div id='productsHeader'>
                Hey Electronics
            </div>
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
        </div>
    )
}*/