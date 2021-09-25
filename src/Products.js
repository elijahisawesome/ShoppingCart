import * as data from './products.json';
import './styles/Product.css';
const products = data.default.Products;


export default function ProductsPage(props){

    return(
        <div>
            Products Page!
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
/*
(
    <div>
        Products Page!
        <div>
            {products[0].name}
            <button onClick={()=>props.addOrRemoveProduct(products[0],1)}>Add to Cart</button>
            {products[1].name}
            <button onClick={()=>props.addOrRemoveProduct(products[1],1)}>Add to Cart</button>
            {products[2].name}
            <button onClick={()=>props.addOrRemoveProduct(products[2],1)}>Add to Cart</button>
            {products[3].name}
            <button onClick={()=>props.addOrRemoveProduct(products[3],1)}>Add to Cart</button>
            {products[4].name}
            <button onClick={()=>props.addOrRemoveProduct(products[4],1)}>Add to Cart</button>
        </div>
    </div>
)*/