

export  function reducer(state, action){
    switch(action.type){
       case 'number_add2':
           return {...state, number: state.number + 2}

       
               case 'number_*7':
                   return {...state, number: state.number * 7}

                   case 'number_/25':
                       return {...state, number: state.number / 25}

                       case 'number_int':
                           return {...state, number: parseInt(state.number)}

                           case 'any_number':
                           return {...state, number: state.number + action.payload}
         
           case 'login':
           return {...state, user: {name: action.payload}}
         
           default:
               return state
    }

}