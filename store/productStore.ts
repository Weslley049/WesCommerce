
import {create} from 'zustand'
import { Data } from '../pages/api/products'
import { useQuery } from '@tanstack/react-query';

type QueryFormat = {
    [key: string]: string
}


type StateProps = { 
	products: Data[] 
    fetchProductsData: (query?: QueryFormat) => void;
}   

const fetchProducts = async (query?: QueryFormat) => {
    const queryResultante = Object.entries(query || {}).map(([key,value]) => `${key}=${value}`).join('&')

    return fetch(`https://api.escuelajs.co/api/v1/products${queryResultante ? `?${queryResultante}` : ''}`).then(response => response.json()) 
}


export const useProductsStore = create<StateProps>((set) => ({
  products: [],
  fetchProductsData: async (query) => {
    try {
       const products = await fetchProducts(query);    
      


        set({ products});
    } catch (error) {
      console.error('Error fetching products data:', error);
    }
  },

}));