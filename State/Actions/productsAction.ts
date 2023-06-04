import { createAction, props } from "@ngrx/store";
import { Products } from "src/app/Interfaces";

export const GetProducts = createAction('[Products-GetProduct]')
export const GetProductsSuccess = createAction('[Products-GetProductsSucess]',props<{Products:Products[]}>())
export const GetProductsFailure = createAction('[Products-GetProduct]',props<{errorMessage:string}>())