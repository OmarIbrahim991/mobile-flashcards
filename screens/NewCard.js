import React from 'react'
import { View } from 'react-native'
import Input from '../components/Input'
import Button from '../components/Button'
import Header from '../components/Header'

const NewCard = ({ route }) => {
    const { params } = route
    const deckTitle = params.title

    return (
        <View>
            <Header>{deckTitle}</Header>
            <Input placeholder="The question" />
            <Input placeholder="The answer" />
            <Button value="Submit" />
        </View>
    )
}

export default NewCard
