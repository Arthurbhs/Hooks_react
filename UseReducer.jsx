import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useReducer } from 'react'


const initialState = { 

cart: [{}],
products: [],
user: null,
number: 0

}

function reducer(state, action){
     switch(action.type){
        case 'number_add2':
            return {...state, number: state.number + 2}
          
            case 'login':
            return {...state, user: {name: action.payload}}
          
            default:
                return state
     }

}

const UseReducer = (props) => {
    const [state, dispatch] = useReducer(reducer, initialState)
    return (
        <div className="UseReducer">
            <PageTitle
                title="Hook UseReducer"
                subtitle="Uma outra forma de ter estado em componentes funcionais!"
            />
            <div className="center">
                {state.user ?
                <span className="text">{state.user.name}</span>
                : <span className="text">sem Usuario</span>
}
                
                <span className="text">{state.number}</span>
                <button className="btn" onClick={() => dispatch({type: 'login', payload: 'Maria'})}>login</button>
               <button className="btn" onClick={() => dispatch({type: 'number_add2'})}>+2</button>
            </div>
        </div>
    )
}

export default UseReducer
