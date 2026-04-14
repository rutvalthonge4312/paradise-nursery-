import React, { useEffect, useState } from 'react';
import './styles.css';
import CardItem from '../../components/layout/CardItem/CardItem.tsx';
import getPlants from '../../utils/getplants.ts';
import PlantsArray from '../../interfaces/plantsArrayinterface.ts';
import { useSelector } from 'react-redux';
import ItemsInCart from '../../interfaces/itemsInCart.ts';

const ProductListingPage = () => {
  const [plantsArray, setPlantsArray] = useState<PlantsArray[]>([]);
  const itemsInCart = useSelector((state: { cart: { items: ItemsInCart[] } }) => state.cart.items)

  useEffect(() => {
    const plantsArray = getPlants();
    setPlantsArray(plantsArray);
  }, [])

  return (
    <div className='product-listing-page'>
      {plantsArray.map((category) => {
        return (
          <div className='category-container' key={category.category}>
            <h2 className='category-titlle'>{category.category}</h2>
            <div className='plants-container'>
              {category.plants.map((plant) => {
                const itemInCart = itemsInCart.find((item) => item.name === plant.name)
                if(itemInCart){
                  plant.isAvailable = false
                }
                return (
                  <CardItem
                    key={plant.name}
                    plant={plant}
                  />
                );
              })}
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default ProductListingPage;