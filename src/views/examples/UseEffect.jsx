import React, { useEffect, useState } from 'react'
import PageTitle from '../../components/layout/PageTitle'
import SectionTitle from '../../components/layout/SectionTitle'

function calcFatorial(num){
    const n = parseInt(num)
    if(n < 0)return -1
    if( n === 0 ) return 1
    return calcFatorial(n - 1) * n
}

const UseEffect = (props) => {
    const [number, setNumber] = useState(0)
    const [fatorial, setFatorial] = useState(1)
  
    useEffect(function(){
        setFatorial(calcFatorial(number))

    }, [number])

    useEffect(function () {
      if(fatorial > 100000){
        document.title = "Pra que agredir"
      }

    }, [fatorial] )

    useEffect(function () {
        if(fatorial <  0 ){
          document.title = "ai que burro"
        }
  
      }, [fatorial] )

      useEffect(function () {
        if((fatorial <  50) && (fatorial > 0)  ){
          document.title = "lhe falta odio"
        }
  
      }, [fatorial] )

      const [status, setStatus] = useState("impar")

      useEffect(function() {
           setStatus(number % 2 === 0 ? "par" : "impar")
      }, [number])



    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
          
            
            />
            <SectionTitle title="ex #1"/>
              <div className="center">
                <div>
                    <span className="text">Fatorial</span>
                      <span className="text red">{fatorial === -1 ? 'Não existe' : fatorial}</span>
                </div>
                  <input type="number" className="input"
                  value={number}
                  onChange={e => setNumber(e.target.value)}/>

                </div>

              
            
        </div>
    )
}

export default UseEffect
