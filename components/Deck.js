import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'


const Deck = ({ title, ...props }) => {
    const numOfCards = useSelector(state => state.decks[title].questions.length)

    return (
        <TouchableOpacity style={styles.deck} {...props}>
            <Text style={styles.titleText}>{title}</Text>
            <Text>{numOfCards} card{numOfCards !== 1 && "s"}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    deck: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: "black",
        borderRadius: 12,
        padding: 6,
        margin: 6,
    },
    titleText: {
        fontSize: 25,
        margin: 6,
        textAlign: "center",
    },
})

export default Deck
