import AsyncStorage from '@react-native-async-storage/async-storage'
import { getInitialData } from './data' 


export const DATA_KEY = "mobileflashcards:decks"

export const getDecks = () => (
    AsyncStorage.getItem(DATA_KEY)
    .then((decks) => {
        if (decks == null) {
            return getInitialData(5000)
            .then(defaultDecks => AsyncStorage.setItem(DATA_KEY, JSON.stringify(defaultDecks)))
            .then(() => AsyncStorage.getItem(DATA_KEY))
        }
        return decks
    })
    .then(JSON.parse)
)

export const getDeck = (title) => (
    AsyncStorage.getItem(DATA_KEY)
    .then(JSON.parse)
    .then(decks => decks[title])
)

export const saveDeck = (title) => (
    AsyncStorage.getItem(DATA_KEY)
    .then(JSON.parse)
    .then((decks) => {
        if (!decks[title]) {
            decks[title] = { title, questions: [] }
        }
        return decks
    })
    .then(finalDecks => AsyncStorage.setItem(DATA_KEY, JSON.stringify(finalDecks)))
)

export const addCardToDeck = ({ title, card }) => (
    AsyncStorage.getItem(DATA_KEY)
    .then(JSON.parse)
    .then((decks) => {
        decks[title].questions = [...decks[title].questions, card]
        return decks
    })
    .then(finalDecks => AsyncStorage.setItem(DATA_KEY, JSON.stringify(finalDecks)))
)

export const clearDecks = () => {
    AsyncStorage.removeItem(DATA_KEY)
}
