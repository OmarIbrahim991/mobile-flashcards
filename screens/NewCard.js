import React from 'react'
import { View } from 'react-native'
import { useDispatch } from 'react-redux'
import Input from '../components/Input'
import Button from '../components/Button'
import Header from '../components/Header'
import { handleAddCard } from '../actions/cards'
import Loading from './Loading'
import Error from './Error'


const NewCard = ({ navigation, route }) => {
    const [question, setQuestion] = React.useState("")
    const [answer, setAnswer] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)
    const dispatch = useDispatch()

    const { params } = route
    const { title } = params

    const createNewCard = () => {
        setLoading(true)
        const card = { question, answer }
        dispatch(handleAddCard({
            title,
            card,
            setLoading,
            setError,
            setQuestion,
            setAnswer,
            navigation,
        }))
    }

    const isDisabled = () => question.length === 0 || answer.length === 0

    if (loading) { return <Loading /> }
    if (error) { return <Error message="Failed to add new card!" /> }

    return (
        <View>
            <Header>{title}</Header>
            <Input text={question} setText={setQuestion} placeholder="The question" />
            <Input text={answer} setText={setAnswer} placeholder="The answer" />
            <Button onPress={createNewCard} value="Submit" disabled={isDisabled()} />
        </View>
    )
}

export default NewCard
