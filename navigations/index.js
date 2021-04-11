import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import TabNav from './TabNav'
import DeckDetails from '../screens/DeckDetails'
import NewCard from '../screens/NewCard'


const Stack = createStackNavigator()

const MainNav = () => {
    return (
        <NavigationContainer>
            <Stack.Navigator initialRouteName="Home">
                <Stack.Screen name="Home" component={TabNav} />
                <Stack.Screen name="Deck Details" component={DeckDetails} />
                <Stack.Screen name="New Card" component={NewCard} />
            </Stack.Navigator>
        </NavigationContainer>
    )
}

export default MainNav
