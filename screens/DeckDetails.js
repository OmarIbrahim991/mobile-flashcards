import React from 'react'
import { View, Text } from 'react-native'
import { useSelector } from 'react-redux'
import Button from '../components/Button'
import Header from '../components/Header'
import { purple } from '../utils/colors'


const DeckDetails = ({ navigation, route }) => {
    const { params } = route
    const { title } = params
    const numOfCards = useSelector(state => state.decks[title].questions.length)

    return(
        <View style={styles.deckDetailsScreen}>
            <View>
                <Header>{title}</Header>
                <Text style={styles.center}>{numOfCards} card{numOfCards !== 1 && "s"}</Text>
            </View>
            <View>
                <Button onPress={() => navigation.navigate("New Card", { title })} value="Add Card" />
                <Button onPress={() => navigation.navigate("Quiz", { title })} value="Start Quiz" />
            </View>
        </View>
    )
}

const styles = {
    deckDetailsScreen: {
        flex: 1,
        justifyContent: "space-around",
        alignItems: "center",
    },
    center: {
        justifyContent: "center",
        alignItems: "center",
        textAlign: "center",
        color: purple,
    },
}

export default DeckDetails
