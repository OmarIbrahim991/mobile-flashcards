import React from 'react'
import { KeyboardAvoidingView, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native'


const CreateDeck = () => {
    const [text, setText] = React.useState("")

    return (
        <KeyboardAvoidingView style={styles.createDeckScreen}>
            <KeyboardAvoidingView>
                <Text style={styles.headerText}>What is the title of your new deck?</Text>
                <TextInput
                    style={styles.input}
                    onChangeText={setText}
                    value={text}
                    placeholder="Title of the new deck"
                />
            </KeyboardAvoidingView>
            <TouchableOpacity style={styles.submitBtn}>
                <Text style={styles.btnText}>Create Deck</Text>
            </TouchableOpacity>
        </KeyboardAvoidingView>
    )
}

const styles = StyleSheet.create({
    createDeckScreen: {
        flex: 1,
        justifyContent: "space-between",
        alignItems: "center",
        marginVertical: 40,
    },
    headerText: {
        fontSize: 25,
        margin: 6,
        textAlign: "center",
    },
    input: {
        height: 40,
        margin: 12,
        padding: 6,
        borderWidth: 1,
    },
    submitBtn: {
        padding: 12,
        backgroundColor: "black",
    },
    btnText: {
        color: "white",
    },
})

export default CreateDeck
