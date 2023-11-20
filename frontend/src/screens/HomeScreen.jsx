import React from 'react';
import { Row, Col } from 'react-bootstrap';
import ProductDes from '../components/ProductDes';
import { useEffect,useState } from 'react';
import axios from 'axios';

const HomeScreen = () => {
  const [products,setProducts] = useState([])
  // Separate products into men's and women's collections
  const mensCollection = products.filter((product) => product.gender === 'menproduct');
  const womensCollection = products.filter((product) => product.gender === 'womenproduct');

  useEffect(() => {
    const fetchProducts = async () => {
      const {data} = await axios.get('/api/products');
      setProducts(data);
  };
  
  fetchProducts();
},[]);
 
  return (
    <>
      <h1>Men's Collection</h1>
      <Row>
        {mensCollection.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductDes product={product} />
          </Col>
        ))}
      </Row>

      <h1>Women's Collection</h1>
      <Row>
        {womensCollection.map((product) => (
          <Col key={product._id} sm={12} md={6} lg={4} xl={3}>
            <ProductDes product={product} />
          </Col>
        ))}
      </Row>
    </>
  );
};

export default HomeScreen;
