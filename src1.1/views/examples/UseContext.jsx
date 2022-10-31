import React, { useContext, useEffect } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'
import DataContext from '../../Data/DataConntext'
import { appContext } from '../../Data/store'
const UseContext = (props) => {

    function addNumber(delta) {
        setState({
            ...state,
            number: state.number + delta
        })
    }

const {number, text, setNumber, setText} = useContext(appContext)

useEffect(function() {
    if(number > 1250){
        setText('nhe!!!')
    }
    }, [number])


   const {state, setState} =  useContext(DataContext)
    return (
        <div className="UseContext">
            <PageTitle
                title="Hook UseContext"
                subtitle="Aceita um objeto de contexto e retorna o valor atual do contexto!"
            />
              <SectionTitle title="EX#1"/>
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
            <SectionTitle title="EX#2"/>
            <div className="center">
                <span className="text">{text}</span>
             <span className='text'>{number}</span>
            </div>
            <div className="center">
            <button className='btn'
            onClick={() => setNumber(number -1)}>-1</button>
            <button className='btn'
            onClick={() => setNumber(number +1)}>+1</button>
            </div>
        </div>
       
            
        
        
    )
}

export default UseContext
