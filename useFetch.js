import { useEffect, useState } from "react"



export const useFetch = (url, method = 'get') => {

const [responce, setResponce] = useState({
    data: null,
    loading: false
})
useEffect(function()
{
fetch(url, {method})
.then(resp => resp.json())
.then(json => setResponce({
    data: json,
    loading: true
}))
}, [url, method])

return responce
}