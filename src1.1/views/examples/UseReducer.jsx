import React from 'react'
import PageTitle from '../../components/layout/PageTitle'
import { useReducer } from 'react'

import { initialState, reducer } from '../../redux/Config'
import { numberAdd2, login  } from '../../redux/action'



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
                <button className="btn" onClick={() => login(dispatch, 'João')}>login</button>
               <button className="btn" onClick={() => numberAdd2(dispatch)}>+2</button>
               <button className="btn" onClick={() => dispatch({type: 'number_*7'})}>X7</button>
               <button className="btn" onClick={() => dispatch({type: 'number_/25'})}>/25</button>
              
               <button className="btn" onClick={() => dispatch({type: 'any_number', payload: -9})}>-9</button> <button className="btn" onClick={() => dispatch({type: 'number_int'})}>inteiro</button>
            </div>
        </div>
    )
}

export default UseReducer
