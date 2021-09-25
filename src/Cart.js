import './styles/Cart.css';


export default function CartPage(props){
    
    let productArray = [];
    let totalPrice=0.00;

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

    
    function tabulatePrice(product){
        totalPrice+= parseFloat(product);
    }

    allProducts();

    if (checkIfArrayEmpty(productArray)){
        return<DefaultCartPage/>
    }

    return(

        <div id="Cart">
        <link rel="preconnect" href="https://fonts.googleapis.com"/>
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin/>
        <link href="https://fonts.googleapis.com/css2?family=Bebas+Neue&display=swap" rel="stylesheet"/> 
            <div className='cartBuffer'>Shopping Cart</div>
            <div className='cartItems'>
                {productArray.map((product)=>{
                    tabulatePrice(product.product.price * product.count)
                    return(<div className='cartItem'>
                    <div className='cartUpper'>
                        <p>
                            {product.product.name}
                        </p>
                        <p> 
                            ${product.product.price}
                        </p>
                        <div className='cartCounts'>
                            <button className="cartButton" onClick={()=>props.addOrRemoveProduct(product.product,-1)}>-</button>
                            {product.count}
                            <button className="cartButton" onClick={()=>props.incrementProduct({id:product.product.id},1)}>+</button>
                        </div>
                        </div>
                            <div className='cartImageContainer'>
                                <img className='cartImage' src={product.product.img}/> 
                            </div>

                    

                    </div>)
                })}
            </div>
            <div className='cartBuffer'></div>
            <div id='checkoutButtonContainer'>
                <button className='checkoutButton' onClick={()=>{alert('Check out!')}}>
                    Checkout
                </button>
            </div>
            <div>Order Total: ${totalPrice.toFixed(2)}</div>
            <div id='CartPageCover' onClick={()=>{cartToggle()}}></div>
        </div>
    )
}

function DefaultCartPage(){
    return(
        <div id="Cart">Cart is empty!
            <div id='CartPageCover' onClick={()=>{cartToggle()}}></div>
        </div>
    )
}

function cartToggle(){
    const cart = document.getElementById('Cart');
    cart.classList.remove("checkingOut");
}