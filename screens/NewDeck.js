import React from 'react'
import { KeyboardAvoidingView, StyleSheet } from 'react-native'
import Button from '../components/Button'
import Input from '../components/Input'
import Header from '../components/Header'

const NewDeck = () => {
    return (
        <KeyboardAvoidingView style={styles.newDeckScreen}>
            <KeyboardAvoidingView>
                <Header>What is the title of your new deck?</Header>
                <Input placeholder="Title of the new deck" />
            </KeyboardAvoidingView>
            <Button value="Create Deck" />
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
