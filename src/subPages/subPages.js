import * as data from '../products/products.json';
import '../styles/subPages.css';
const products = data.default.Products;

function Groceries(props){
    const name='Groceries';
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
}

export default [Groceries,Clothes,Electronics];