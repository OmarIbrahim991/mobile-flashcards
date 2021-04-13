import { getInitialData } from '../utils/data'


export const LOAD_DECKS = "LOAD_DECKS"

const loadDecks = (decks) => ({
    type: LOAD_DECKS,
    decks,
})

export const handleLoadDecks = ({ setLoading, setError }) => (dispatch) => (
    getInitialData(5000)
    .then((decks) => {
        dispatch(loadDecks(decks))
        setLoading(false)
    })
    .catch(() => {
        setError(true)
        setLoading(false)
    })
)
