import { addCardToDeck } from '../utils/storage'


export const ADD_CARD = "ADD_CARD"

const addCard = ({ title, card, }) => ({
    type: ADD_CARD,
    title,
    card,
})

export const handleAddCard = ({ title, card, setLoading, setError, setQuestion, setAnswer, navigation, }) => (dispatch) => {
    addCardToDeck({ title, card, })
    .then(() => {
        dispatch(addCard({ title, card }))
        setQuestion("")
        setAnswer("")
        setLoading(false)
        navigation.navigate("Deck Details", { title, })
    })
    .catch(() => {
        setLoading(false)
        setError(true)
    })
}
