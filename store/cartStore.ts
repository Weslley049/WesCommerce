
import {create} from 'zustand'
import { Data } from '../pages/api/products'


type StateProps = { 
	products: {
    product: Data,
    quantity: number,
  }[]
  totalCost: number;
	add: (productData: Data) => void
    remove: (index: number) => void
}


export const useCartStore = create<StateProps>((set, getState) => ({
  products: [],
  totalCost: 0,
  add: (productData: Data) => {
    let {products, totalCost } = getState();
  
    if(products.some(({product}) => product.id === productData.id)){
      products = products.map(({product,quantity}) => {
        return product.id === productData.id ? {
          product,
          quantity: quantity + 1
        }: {
          product,
          quantity
        }
      })
    }else {
      products = [...products, {
        product: productData,
        quantity: 1
      }]
    }

    totalCost = totalCost + productData.price

    set({ products, totalCost });
 
  },
  remove: (indexToRemove: number) => {
    let {products, totalCost } = getState();

    let priceProductToRemove = products[indexToRemove].product.price

    products = products.map(({product, quantity}, index) => {
      return index === indexToRemove ? {
        product,
        quantity: quantity - 1
      }: {
        product,
        quantity
      }
    }).filter(({quantity}) => !!quantity)
    
    totalCost = totalCost - priceProductToRemove

    set({products, totalCost})

  },
}));