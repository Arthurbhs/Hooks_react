import React, { useContext } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import DataContext from '../../Data/DataConntext'
const UseContext = (props) => {

    function addNumber(delta) {
        setState({
            ...state,
            number: state.number + delta
        })
    }

   const {state, setState} =  useContext(DataContext)
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
           
             <div className="center">
            <span className="text">{state.text}</span>
            </div>
            <div className="center">
            <span className="text">{state.number}</span>
            </div>
            <div className="center">
          <button className="btn"
            onClick={() => addNumber(-1) }>-1</button>
            <button className="btn"
            onClick={() => addNumber(+1) }>+1</button>
            </div>
        </div>
       
            
        
        
    )
}

export default UseContext
