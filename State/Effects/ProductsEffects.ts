
import { Injectable } from "@angular/core";
import { Actions, createEffect, ofType } from "@ngrx/effects";
import { EcommerceproductService } from "src/app/Services/ecommerceproduct.service";
import * as productActions from '../Actions/productsAction'
import { catchError, map, mergeMap, of } from "rxjs";
import { products } from "src/app/productsholder";

@Injectable()

export class ProductEffects{

constructor(private actions$:Actions, private productService:EcommerceproductService ){}
getProducts$= createEffect(()=>{
    return this.actions$.pipe(
        ofType(productActions.GetProducts),
        mergeMap( action=>{
            return this.productService.getAllProducts().pipe(
                //success
                 map(Products=>{
                    return productActions.GetProductsSuccess({Products})
                 }),
                 //error 
                 catchError(error=> of(productActions.GetProductsFailure({errorMessage:error})))
            ) 
        })
    )
})


}