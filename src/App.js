import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cart from './Cart.js';
import Products from './Products.js';
import Home from './Home.js';
import Nav from './NavBar';
import {useState} from 'react'


function App() {
  const [productsInCart, setProductsInCart] = useState({});
  const [totalProducts, setTotalProducts] = useState(0);

  const addOrRemoveProduct = function(newProduct, val){
    if(val>0 && !!productsInCart[newProduct.id]){
      setProductsInCart({...productsInCart, [newProduct.id]:{count:productsInCart[newProduct.id].count+val,product:newProduct}});
    }
    else if(val <0 && productsInCart[newProduct.id].count>1){
      setProductsInCart({...productsInCart, [newProduct.id]:{count:productsInCart[newProduct.id].count+val,product:newProduct}});
    }
    else if(val<0 && productsInCart[newProduct.id].count == 1){
      let newCart = productsInCart;
      delete newCart[newProduct.id];
      setProductsInCart(newCart);
    }
    else if(!productsInCart[newProduct.id]){
      setProductsInCart({...productsInCart,[newProduct.id]:{count:1,product:newProduct}})
    }
    setTotalProducts(totalProducts+val)
  }

  return (
    <Router>
      <Nav totalProducts={totalProducts}/>
      <Switch> 
        <Route exact path = '/' component={Home}></Route>
        <Route path = '/Checkout'><Cart addOrRemoveProduct={addOrRemoveProduct} productsInCart={productsInCart}/></Route>
        <Route path = '/Products'> <Products addOrRemoveProduct={addOrRemoveProduct}/></Route>
      </Switch>
    </Router>
  );
}

export default App;
