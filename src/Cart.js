export default function CartPage(props){
    let productArray = [];

    function allProducts(){
        for(const product in props.productsInCart){
            productArray.push(props.productsInCart[product]);
        }

    }
    
    function checkIfArrayEmpty(array){
        if(array.length ==0){
            return true
        }
        return false;
    }

    allProducts();

    if (checkIfArrayEmpty(productArray)){
        return<DefaultCartPage/>
    }

    return(
        <div>
            Cart Page!
            {productArray.map((product)=>{
                return(<div>{product.product.name}, {product.count} 
                <button onClick={()=>props.addOrRemoveProduct(product.product,-1)}>remove</button>
                <button onClick={()=>props.addOrRemoveProduct({id:product.product.id, name:product.product.name},1)}>Add</button>
                </div>)
            })}
        </div>
    )
}

function DefaultCartPage(){
    return(
        <div>Cart is empty!</div>
    )
}