import { useState, useEffect } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { handleLoadDecks } from '../actions/decks'


const useInitialData = () => {
    const data = useSelector(state => state.decks)
    const [loading, setLoading] = useState(true)
    const [error, setError] = useState(false)
    const dispatch = useDispatch()

    useEffect(() => {
        dispatch(handleLoadDecks({ setLoading, setError }))
    }, [dispatch])

    return [data, loading, error]
}

export default useInitialData
