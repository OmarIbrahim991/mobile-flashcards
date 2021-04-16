import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import Button from '../components/Button'
import Header from '../components/Header'
import { green, purple, red } from '../utils/colors'
import { removeNotifications, setNotification } from '../utils/notifications'
import Error from './Error'


const Quiz = ({ navigation, route }) => {
    const [index, setIndex] = React.useState(0)
    const [showAnswer, toggleAnswer] = React.useState(false)
    const [score, setScore] = React.useState(0)

    const { title } = route.params
    const questions = useSelector(state => state.decks[title].questions)
    const total = questions.length

    const handleCorrect = () => {
        setScore(currentScore => currentScore + 1)
        toggleAnswer(false)
        setIndex(currentIndex => currentIndex + 1)
    }

    const handleWrong = () => {
        toggleAnswer(false)
        setIndex(currentIndex => currentIndex + 1)
    }

    const handleRetakeQuiz = () => {
        setIndex(0)
        setScore(0)
    }

    const toggleVisibility = () => toggleAnswer(current => !current)

    React.useEffect(() => {
        if (index === total && index !== 0) {
            removeNotifications()
            .then(setNotification)
        }
    }, [index])

    if (total === 0) { return <Error message="This deck has no cards" /> }
    if (index === total) {
        return (
            <View style={styles.center}>
                <Header headerStyle={{ color: purple }}>Score: {(score*100/total).toFixed(2)}%</Header>
                <Button onPress={() => navigation.navigate("Decks")} value="Go to Decks" />
                <Button onPress={handleRetakeQuiz} value="Retake this Quiz" />
            </View>
        )
    }

    return (
        <View style={styles.quiz}>
            <View style={styles.section}>
                <Text style={{ alignSelf: "flex-start"}}>{index + 1}/{total}</Text>
                {!showAnswer && <Header>{questions[index].question}</Header>}
                <Button onPress={toggleVisibility} value={showAnswer ? "Question" : "Answer"} />
                {showAnswer && <Header>{questions[index].answer}</Header>}
            </View>
            {
                showAnswer &&
                <View>
                    <Button value="Correct" btnStyle={{ backgroundColor: green }} onPress={handleCorrect} />
                    <Button value="Incorrect" btnStyle={{ backgroundColor: red }} onPress={handleWrong} />
                </View>
            }
        </View>
    )
}

const styles = StyleSheet.create({
    quiz: {
        flex: 1,
        justifyContent: "center",
        alignItems: "stretch",
        padding: 12,
    },
    section: {
        flex: 1,
        justifyContent: "flex-start",
        alignItems: "center",
    },
    center: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
    },
})

export default Quiz
