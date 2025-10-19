import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

import Product from './Product';

function Home({ className, products }) {
  return (
    <div className={className}>
      <h1>New Products</h1>
      {products.length > 0 ? (
        <ul className="Home__products">
          {products.map((product) => (
            <Product key={product.id} item={product} />
          ))}
        </ul>
      ) : (
        <div>Loading products....</div>
      )}
    </div>
  );
}

Home.propTypes = {
  className: PropTypes.string.isRequired,
  products: PropTypes.array.isRequired
};

export default styled(Home)`
  .Home__products {
    display: flex;
    flex-wrap: wrap;

    list-style-type: none;
    padding: 0;
    margin: 0 -12px;
  }

  .Products {
    padding-right: 12px;
    padding-bottom: 36px;
    padding-left: 12px;
    width: 33%;
    position: relative;
  }

  .Products__name {
    color: #333;

    text-overflow: ellipsis;
    overflow: hidden;
    white-space: nowrap;
    width: 100%;
    display: block;
  }

  .Products__type {
    color: #767676;
  }

  .Products__image {
    width: 100%;
    height: 200px;
    object-fit: cover;
    border-radius: 8px;
  }
`;