import { createFeatureSelector, createReducer, createSelector, on } from "@ngrx/store";
import { Products } from "src/app/Interfaces";
import * as productActions from '../Actions/productsAction'

export interface ProductInterface{
    products:Products[]
    getProductsError:string
}

const initialState:ProductInterface={
    products:[],
    getProductsError:' '
}

//selectors
const getProductState = createFeatureSelector<ProductInterface>(' product')
export const  getproducts = createSelector(getProductState,(state)=>state.products)
export const  getprodError = createSelector(getProductState,(state)=>state.getProductsError)


export const productReducer=createReducer(
   initialState,

on(productActions.GetProductsSuccess,(state,action): ProductInterface=>{
    return{
        ...state,
        getProductsError:'',
        products:action.Products
    }
}),
on(productActions.GetProductsFailure,(state,action): ProductInterface=>{
    return{
        ...state,
        getProductsError:action.errorMessage,
        products:[ ]
    }
})



)