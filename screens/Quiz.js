import React from 'react'
import { View, Text, StyleSheet } from 'react-native'
import Button from '../components/Button'
import Header from '../components/Header'


const Quiz = ({ route }) => {
    const [index, setIndex] = React.useState(0)
    const [showAnswer, toggleAnswer] = React.useState(false)
    const [score, setScore] = React.useState(0)

    const { questions } = route.params
    const total = questions.length

    if (total === 0) { return <Header>This deck has no cards.</Header> } 
    if (index === total) { return <Header>Score: {(score*100/total).toFixed(2)}%</Header> }

    return (
        <View style={styles.quiz}>
            <View style={styles.section}>
                <Text style={{ alignSelf: "flex-start"}}>{index + 1}/{total}</Text>
                {!showAnswer && <Header>{questions[index].question}</Header>}
                <Button value={showAnswer ? "Question" : "Answer"} />
                {showAnswer && <Header>{questions[index].answer}</Header>}
            </View>
            {
                showAnswer &&
                <View>
                    <Button value="Correct" btnStyle={{ backgroundColor: "green" }} />
                    <Button value="Incorrect" btnStyle={{ backgroundColor: "red" }} />
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
})

export default Quiz
