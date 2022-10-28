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



    return (
        <div className="UseEffect">
            <PageTitle
                title="Hook UseEffect"
                subtitle="Permite executar efeitos colaterais em componentes funcionais!"
         />
        </div>
    )
}

export default UseEffect
