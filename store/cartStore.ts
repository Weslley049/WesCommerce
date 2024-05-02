
import {create} from 'zustand'
import { Data } from '../pages/api/products'


type StateProps = { 
	products: Data[]  
  totalCost: number;
	add: (product: Data) => void
    remove: (index: number) => void
}

function AddProduct(product: Data) {

}

export const useCartStore = create<StateProps>((set) => ({
  products: [],
  totalCost: 0,
  add: (product: Data) => set((state) => ({
    products: [...state.products, product],
    totalCost: state.totalCost + product.price
  })),
  remove: (indexToRemove: number) => set((state) => ({
    products: state.products.filter((_, index) => index !== indexToRemove),
    totalCost: state.totalCost - state.products.filter((_, index) => index == indexToRemove)[0].price
  })),
}));