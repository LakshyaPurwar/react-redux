import ProductItem from './ProductItem';
import classes from './Products.module.css';

const Products = (props) => {
  const products = [{title : 'Test1' , price : 6  , description : 'This is our first product - amazing'},
  {title : 'Test2' , price : 8  , description : 'This is our second product - amazing'},
  {title : 'Test3' , price : 10  , description : 'This is our third product - amazing'}

];

const displayedProducts = products.map((product)=>{
  return <ProductItem
  key = {product.title}
  title = {product.title}
  price={6}
  description={product.description}/>
});
  return (
    <section className={classes.products}>
      <h2>Buy your favorite products</h2>
      <ul>
        {displayedProducts}
        
      </ul>
    </section>
  );
};

export default Products;
