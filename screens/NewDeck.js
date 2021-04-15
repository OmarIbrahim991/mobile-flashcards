import React from 'react'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import { useDispatch } from 'react-redux'
import Button from '../components/Button'
import Input from '../components/Input'
import Header from '../components/Header'
import { handleCreateDeck } from '../actions/decks'
import Loading from './Loading'
import Error from './Error'


const NewDeck = ({ navigation }) => {
    const dispatch = useDispatch()
    const [title, setTitle] = React.useState("")
    const [loading, setLoading] = React.useState(false)
    const [error, setError] = React.useState(false)

    const createNewDeck = () => {
        setLoading(true)
        dispatch(handleCreateDeck({ title, setLoading, setError, navigation, setTitle }))
    }

    const isDisabled = () => title.length === 0

    if (loading) { return <Loading /> }
    if (error) { return <Error message="Failed to create new deck!" /> }

    return (
        <KeyboardAvoidingView style={styles.newDeckScreen}>
            <KeyboardAvoidingView>
                <Header>What is the title of your new deck?</Header>
                <Input text={title} setText={setTitle} placeholder="Title of the new deck" />
            </KeyboardAvoidingView>
            <Button value="Create Deck" onPress={createNewDeck} disabled={isDisabled()} />
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    newDeckScreen: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
        marginVertical: 40,
    },
})

export default NewDeck
