import './App.css';
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Cart from './Cart.js';
import Products from './Products.js';
import Contact from './Contact.js';
import Home from './Home.js';
import Nav from './NavBar';
import {useState} from 'react'
import subPages,{subPagesNames} from './subPages/subPages.js';


function App() {
  const [productsInCart, setProductsInCart] = useState({});
  const [totalProducts, setTotalProducts] = useState(0);
  const [subPage, setSubPage] = useState('')

  const updatePage = function(val){
    setSubPage(val);
  }
  const addOrRemoveProduct = function(newProduct, val){


    if(val>0 && !!productsInCart[newProduct.id]){
      setProductsInCart({
        ...productsInCart, [newProduct.id]:{
        count:productsInCart[newProduct.id].count+val,
        product:newProduct
      }});
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

  const incrementProduct=function(newProduct){
    let oldProd = productsInCart[newProduct.id].product;

    setProductsInCart({
      ...productsInCart, [newProduct.id]:{
      count:productsInCart[newProduct.id].count+1,
      product:oldProd
    }});
    setTotalProducts(totalProducts+1)
  }

  return (
    <Router>
      <Nav totalProducts={totalProducts}/>
      <Products addOrRemoveProduct={addOrRemoveProduct} page={subPage}/>
      <Switch> 
        <Route exact path = '/' component={Home}></Route>
        <Route exact path ='/Contact'><Contact/></Route>
        {subPagesNames.map((page, index)=>{
          const Page=subPages[index];
          return(
            <Route exact path ={`/Products/${page}`}><Page addOrRemoveProduct={addOrRemoveProduct} setPage={updatePage}/></Route>
          )
        })}
      </Switch>
      <Cart addOrRemoveProduct={addOrRemoveProduct} productsInCart={productsInCart} incrementProduct={incrementProduct}/>
    </Router>
  );
}

export default App;

//<Route path = '/Checkout'><Cart addOrRemoveProduct={addOrRemoveProduct} productsInCart={productsInCart}/></Route>