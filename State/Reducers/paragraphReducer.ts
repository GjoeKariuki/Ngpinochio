import { createAction, createReducer, on } from "@ngrx/store";


 export const paragraphReducer=createReducer(
    {showParagraph:false},

    on(createAction(' SHOWP '), state=>{
        return{
            ...state,
            showParagraph:!state.showParagraph
        }
    })
)