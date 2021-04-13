import React from 'react'
import { TouchableOpacity, Text, StyleSheet } from 'react-native'


const Deck = ({ title, numOfCards=0, ...props }) => {
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
        margin: 12,
    },
    titleText: {
        fontSize: 25,
        margin: 6,
        textAlign: "center",
    },
})

export default Deck
