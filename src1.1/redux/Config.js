 import { reducer } from "./Reducers"
 import { numberAdd2 } from "./action/Number"
 
 const initialState = { 

    cart: [{}],
    products: [],
    user: null,
    number: 0
    
    }

    export{
    reducer,
    numberAdd2,
        initialState
    }


