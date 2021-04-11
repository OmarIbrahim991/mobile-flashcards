import { useState, useEffect } from 'react'
import { getInitialData } from '../utils/data'


const useInitialData = () => {
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const [data, setData] = useState({})

    useEffect(() => {
        getInitialData(5000)
        .then((resp) => {
            setData(resp)
            setLoading(false)
        })
        .catch(() => {
            setError(true)
            setLoading(false)
        })
    }, [])

    return [data, loading, error]
}

export default useInitialData
