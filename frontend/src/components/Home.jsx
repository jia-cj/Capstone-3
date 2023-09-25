import React, { Fragment } from 'react';
import MetaData from './layout/MetaData';
import Product from './product/Product';

const Home = () => {

  const products = [
    {
      name: 'Banana',
      price: 5.00,
      description: 'Fresh and delicious banana',
      image: '../images/banana.jpg', 
    },
    {
      name: 'Romaine',
      price: 100,
      description: 'Fresh and Crunchy',
      image: '../images/image 2.webp', 
    },
    {
      name: 'Beef-loin',
      price: 300,
      description: 'Fresh and Juicy Chuncks of meat',
      image: '../images/Beef-loin.webp', 
    },
  ];

  return (
    <Fragment>
      <MetaData title={'Buy Best Rockets Online'} />

      <h1 id="products_heading">Latest Products</h1>

      <div className="row">
        {products.map((product, index) => (
          <Product key={index} {...product} />
        ))}
      </div>
    </Fragment>
  );
};

export default Home;
