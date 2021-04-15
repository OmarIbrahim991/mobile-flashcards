import React from 'react'
import { ScrollView, TouchableOpacity, Text } from 'react-native'
import useInitialData from '../hooks/useInitialData'
import Deck from '../components/Deck'
import Loading from './Loading'
import Error from './Error'
import { clearDecks } from '../utils/storage'   //to be removed


const DeckList = ({ navigation }) => {
    const [data, loading, error] = useInitialData()
    const decks = Object.keys(data).map(deckTitle => ({ title: deckTitle, }))

    if (loading === true) { return <Loading /> }
    if (error === true) { return <Error message="Failed to load data!" /> }
    if (decks.length === 0) { return <Error message="There are no decks to show!" /> }

    return (
        <ScrollView style={styles.deckListScreen}>
            {/* to be removed  */}
            <TouchableOpacity onPress={clearDecks} style={{ alignSelf: "center" }}>
                <Text>Clear All</Text>
            </TouchableOpacity>
            {/* to be removed  */}
            {
                decks.map( ({ title }) => (
                    <Deck
                        key={title}
                        title={title}
                        onPress={() => navigation.navigate("Deck Details", { title })}
                    />
                ))
            }
        </ScrollView>
    )
}

const styles = {
    deckListScreen: {
        paddingVertical: 12,
        marginVertical: 12,
    },
}

export default DeckList
