import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { purple, white, gray } from '../utils/colors'


const Deck = ({ title, ...props }) => {
    const numOfCards = useSelector(state => state.decks[title].questions.length)

    return (
        <TouchableOpacity style={styles.deck} {...props}>
            <Text style={styles.titleText}>{title}</Text>
            <Text style={{ color: gray, }}>{numOfCards} card{numOfCards !== 1 && "s"}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    deck: {
        justifyContent: "center",
        alignItems: "center",
        borderWidth: 2,
        borderColor: purple,
        borderRadius: 12,
        padding: 6,
        margin: 6,
        backgroundColor: white,
    },
    titleText: {
        fontSize: 25,
        margin: 6,
        textAlign: "center",
        color: purple,
    },
})

export default Deck
