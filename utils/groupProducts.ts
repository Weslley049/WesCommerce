import { Data } from "../pages/api/products";

import {groupBy} from 'lodash';


type AllowedGroupers<T> = keyof T;

export const groupByProducts =  <T extends Data>(products: T[], grouper: AllowedGroupers<T>[]) => {
    console.log('produtos',products);
    
    return groupBy(products, (item) => grouper.map(elem => item[elem]))
}