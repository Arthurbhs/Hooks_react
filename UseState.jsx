import React, { useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'


const UseState = (props) => {
    // esta função hook permite alterar os valores  das variaveis
    const [count, setCount] = useState(0)
  

    return (
        <div className="UseState">
            <PageTitle
                title="Hook UseState"
                subtitle="Estado em componentes funcionais!"
            />
            <SectionTitle title="ex#1"/>
            <div className="center">
                <span className="text">{count}</span>
               <div className='button'>
               <button className="btn"
                 onClick={() => setCount(count - 2)}>-2</button>
                  <button className="btn"
                 onClick={() => setCount(count - 10)}>-10</button>
                <button className="btn"
               onClick={() => setCount(count - 1)}>-1</button>

                <button className="btn"
                 onClick={() => setCount(count + 1)}>+1</button>

<button className="btn"
                 onClick={() => setCount(count + 2)}>+2</button>

<button className="btn"
                 onClick={() => setCount(count + 10)}>+10</button>
                </div> 
            </div>
      
        </div>
    )
}

export default UseState
