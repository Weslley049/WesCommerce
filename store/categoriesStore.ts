
import {create} from 'zustand'
import { ProductCategory } from '../pages/api/categories'


type StateProps = { 
	categories: ProductCategory[];
    fetchCategoriesData: () => void;
}



export const useCategoriesStore = create<StateProps>((set) => ({
    categories: [],
    fetchCategoriesData: async () => {
        try {
          const categories = await fetch("http://localhost:3000/api/categories").then(data => data.json());

          set({ categories});
        } catch (error) {
          console.error('Error fetching categories data:', error);
        }
      },
}));