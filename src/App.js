import './App.css';
import {BrowserRouter as Router, Switch, Route, useRouteMatch} from 'react-router-dom';
import Cart from './Cart.js';
import Products from './Products.js';
import Contact from './Contact.js';
import Home from './Home.js';
import Nav from './NavBar';
import {useState} from 'react'
import PageGenerator,{products as pagesProducts} from './subPages/subPages.js';


function App() {
  const [productsInCart, setProductsInCart] = useState({});
  const [totalProducts, setTotalProducts] = useState(0);
  const [subPage, setSubPage] = useState('');
  const [splashImage, setSplashImage] = useState(true);



  const updateSplashImage = function(val){
    setSplashImage(val);
  }
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
      <Products addOrRemoveProduct={addOrRemoveProduct} page={subPage} splashImageStatus={splashImage} updateSplashImage={updateSplashImage}/>
      <Switch> 
        <Route exact path = '/'> <Home updateSplashImage={updateSplashImage}/></Route>
        <Route exact path ='/Contact'><Contact updateSplashImage={updateSplashImage}/></Route>
        {Object.entries(pagesProducts).map((category, index)=>{
          return(
            <Route exact path={`/Products/${category[0]}`} key={index}>
              <PageGenerator updateSplashImage={updateSplashImage} isSubMenu={false} sideBar={category} title={category[0]} productArray={category[1]} addOrRemoveProduct={addOrRemoveProduct} setPage={updatePage}/>
            </Route>
          )
        })}
        <CategoryRouting updateSplashImage={updateSplashImage} addOrRemoveProduct={addOrRemoveProduct} updatePage={updatePage}/>
      </Switch>
      <Cart addOrRemoveProduct={addOrRemoveProduct} productsInCart={productsInCart} incrementProduct={incrementProduct}/>
    </Router>
  );
}

const CategoryRouting = (props)=>{
  return(
  Object.entries(pagesProducts).map((category, index)=>{
    return(
      Object.entries(category[1]).map((subProduct, subIndex)=>{
        return(
          <Route exact path={`/Products/${category[0]}/${subProduct[0]}`} key={subIndex}>
            <PageGenerator updateSplashImage={props.updateSplashImage} isSubMenu={true} sideBar={category} title={subProduct[0]} productArray={subProduct[1]} addOrRemoveProduct={props.addOrRemoveProduct} setPage={props.updatePage}/>
          </Route>
        )
      })
    )
  })
  )
}



export default App;

