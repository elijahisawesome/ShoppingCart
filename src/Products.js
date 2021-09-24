import * as data from './products.json';
const products = data.default.Products;


export default function ProductsPage(props){

    console.log(products);

    return(
        <div>
            Products Page!
            <div>
                A juicy peach!
                <button onClick={()=>props.addOrRemoveProduct(products[0],1)}>Add to Cart</button>
                A dumb boy!
                <button onClick={()=>props.addOrRemoveProduct(products[1],1)}>Add to Cart</button>
                A Huge Car!
                <button onClick={()=>props.addOrRemoveProduct(products[2],1)}>Add to Cart</button>
                A Fat Cat!
                <button onClick={()=>props.addOrRemoveProduct(products[3],1)}>Add to Cart</button>
                A Big ol Bag!
                <button onClick={()=>props.addOrRemoveProduct(products[4],1)}>Add to Cart</button>
            </div>
        </div>
    )
}