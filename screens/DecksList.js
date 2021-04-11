import React from 'react'
import { ActivityIndicator, Text, ScrollView } from 'react-native'
import useInitialData from '../hooks/useInitialData'
import Deck from '../components/Deck'

const DecksList = () => {
    const [data, loading, error] = useInitialData()

    if (loading === true) { return <ActivityIndicator style={styles.center} size="large" color="blue" /> }
    if (error === true) { return <Text style={styles.center}>Failed to load data!</Text> }

    return (
        <ScrollView style={styles.decksListScreen}>
            {
                Object.keys(data).map((deckTitle) => (
                    <Deck key={deckTitle} title={deckTitle} numOfCards={data[deckTitle].questions.length} />
                ))
            }
        </ScrollView>
    )
}

const styles = {
    decksListScreen: {
        paddingVertical: 12,
        marginVertical: 12,
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    }
}

export default DecksList
