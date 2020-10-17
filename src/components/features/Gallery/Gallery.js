import React, { useState } from 'react';
import PropTypes from 'prop-types';
import styles from './Gallery.module.scss';

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import {
  faExchangeAlt,
  faShoppingBasket,
  faAngleLeft,
  faAngleRight,
} from '@fortawesome/free-solid-svg-icons';
import { faHeart, faEye } from '@fortawesome/free-regular-svg-icons';

import Button from '../../common/Button/Button';
import ProductRating from '../ProductRating/ProductRating';

const Gallery = props => {

  const [activeCategory, setActiveCategory] = useState('topSeller');

  const { setWishList, setCompareList } = props;
  const categoryProducts = props[activeCategory];

  const categories = [
    { id: 'featured', name: 'featured' },
    { id: 'topSeller', name: 'top seller' },
    { id: 'saleOff', name: 'sale off' },
    { id: 'topRated', name: 'top rated' },
  ];

  return (
    <div className={styles.root}>
      <div className='container'>
        <div className='row'>
          <div className={'col-6 ' + styles.leftPanel}>
            <div className={styles.heading}>
              <h3>Furniture gallery</h3>
            </div>
            <div className={styles.menu}>
              <ul>
                {categories.map(item => (
                  <li key={item.id}>
                    <a className={item.id === activeCategory && styles.active}>
                      {item.name}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {categoryProducts.slice(0, 1).map(product => (
              <div key={product.id} className={styles.product}>
                <div className={styles.photo}>
                  <img alt={product.name} src={product.image} />
                </div>
                <div className={styles.buttons}>
                  <div className={styles.buttonWrapper}>
                    <Button className={styles.button} variant='outline'>
                      <FontAwesomeIcon icon={faHeart}></FontAwesomeIcon>
                    </Button>
                    <span>Add To Wishlist</span>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <Button className={styles.button} variant='outline'>
                      <FontAwesomeIcon icon={faExchangeAlt}></FontAwesomeIcon>
                    </Button>
                    <span>Add To Compare</span>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <Button className={styles.button} variant='outline'>
                      <FontAwesomeIcon icon={faEye}></FontAwesomeIcon>
                    </Button>
                    <span>Check The Product</span>
                  </div>
                  <div className={styles.buttonWrapper}>
                    <Button className={styles.button} variant='outline'>
                      <FontAwesomeIcon icon={faShoppingBasket}></FontAwesomeIcon>
                    </Button>
                    <span>Add To Cart</span>
                  </div>
                </div>
                <div className={styles.priceWrapper}>
                  <div className={styles.price}>$ {product.price}.00</div>
                  <div className={styles.oldPrice}>
                    {product.oldPrice && <span>$ {product.oldPrice}.00</span>}
                  </div>
                </div>
                <div className={styles.stars}>
                  <h6>{product.name}</h6>
                  <ProductRating 
                    id={product.id}
                    stars={product.stars}
                    isStarred={true}
                  />
                </div>
              </div>
            ))}
            <div className={styles.miniatures}>
              <Button className={styles.button} variant='small'>
                <FontAwesomeIcon icon={faAngleLeft}></FontAwesomeIcon>
              </Button>
              {categoryProducts.slice(0, 6).map(product => (
                <div key={product.id} className={styles.imgWrapper}>
                  <img alt={product.name} src={product.image} />
                </div>
              ))}
              <Button className={styles.button} variant='small'>
                <FontAwesomeIcon icon={faAngleRight}></FontAwesomeIcon>
              </Button>
            </div>
          </div>
          <div className={'col-6 ' + styles.rightPanel}>
            <div className={styles.photo}>
              <img
                src='http://www.pngall.com/wp-content/uploads/2/Double-Bed.png'
                alt='furniture'
              />
            </div>
            <div className={styles.content}>
              <div className={styles.contentPrice}>
                from <span>$50.80</span>
              </div>
              <h2>Bedroom Bed</h2>
              <div className={styles.button}>
                <Button variant='green'>shop now</Button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Gallery;
