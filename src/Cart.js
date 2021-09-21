export default function CartPage(props){
    let productArray = [];

    function allProducts(){
        for(const product in props.productsInCart){
            productArray.push(props.productsInCart[product]);
        }
    }
    allProducts();
    return(
        <div>
            Cart Page!
            {productArray.map((product)=>{
                return(<div>{product.product.name}, {product.count}</div>)
            })}
        </div>
    )
}