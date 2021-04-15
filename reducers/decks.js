import { CREATE_DECK, LOAD_DECKS } from '../actions/decks'
import { ADD_CARD } from '../actions/cards'

const decks = (state={}, action) => {
    switch (action.type) {
        case LOAD_DECKS:
            return { ...state, ...action.decks }
        case CREATE_DECK:
            return { ...state, [action.title]: { title: action.title, questions: [] } }
        case ADD_CARD:
            return {
                ...state,
                [action.title] : {
                    ...state[action.title],
                    questions: [...state[action.title].questions, action.card]
                }
            }
        default:
            return state
    }
}

export default decks
