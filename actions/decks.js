import { getDecks, saveDeck } from "../utils/storage"


export const LOAD_DECKS = "LOAD_DECKS"
export const CREATE_DECK = "CREATE_DECK"

const loadDecks = (decks) => ({
    type: LOAD_DECKS,
    decks,
})

const createDeck = (title) => ({
    type: CREATE_DECK,
    title,
})

export const handleLoadDecks = ({ setLoading, setError }) => (dispatch) => (
    getDecks()
    .then((decks) => {
        dispatch(loadDecks(decks))
        setLoading(false)
    })
    .catch(() => {
        setError(true)
        setLoading(false)
    })
)

export const handleCreateDeck = ({ title, setLoading, setError, setTitle, navigation }) => (dispatch) => (
    saveDeck(title)
    .then(() => {
        dispatch(createDeck(title))
        setTitle("")
        setLoading(false)
        navigation.navigate("Decks")
    })
    .catch(() => {
        setError(true)
        setLoading(false)
    })
)
